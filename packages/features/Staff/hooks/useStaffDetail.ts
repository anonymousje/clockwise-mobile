import { useState, useEffect } from 'react';
import type { filterItemsType, staffType } from '../../types';
import { useRoute } from '@react-navigation/native';
import { StaffDetailNavigationProp, errorType } from '../../types';
import { useDispatch } from 'react-redux';
import { fetchUpdatedStaffList } from '../../../store/actions/flags';
import { z } from 'zod';
import StaffDetailService from '../services/StaffDetailService';
import STRINGS from '../../../utils/strings';
import COMMON_CONSTANTS from '../../../constants/CommonConstants';

const useStaffDetail = () => {
  const route = useRoute<StaffDetailNavigationProp>();
  const { data } = route.params;
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);

  const [staffData, setStaffData] = useState<staffType | null>(null);
  const [departmentList, setDepartmentList] = useState<filterItemsType[]>([]);
  const [locationList, setLocationList] = useState<filterItemsType[]>([]);
  const [jobRolelist, setJobRoleList] = useState<filterItemsType[]>([]);
  const [validationErrors, setValidationErrors] = useState<errorType>({});

  const staffSchema = z.object({
    first_name: z.string().min(1, STRINGS.ZOD_ERRORS.FIRST_NAME_REQUIRED),
    last_name: z.string().min(1, STRINGS.ZOD_ERRORS.LAST_NAME_REQUIRED),
    email: z.string().email(STRINGS.ZOD_ERRORS.EMAIL_INVALID),
  });

  useEffect(() => {
    if (!data) {
      return;
    }

    const fetchData = async () => {
      setStaffData(data);
      const response = await StaffDetailService.getMeta();
      if (response.status) {
        setDepartmentList(response.response.departments);
        setLocationList(response.response.locations);
        setJobRoleList(response.response.jobroles);
      } else {
        console.error(response.exceptionMessage);
      }
    };

    fetchData();
  }, [data]);

  const editStaffData = async () => {
    if (editMode) {
      const validation = staffSchema.safeParse(staffData);

      if (!validation.success) {
        const errors: errorType = {};

        validation.error.errors.forEach((err) => {
          if (err.path.length > 0) {
            errors[err.path[0]] = err.message;
          }
        });

        setValidationErrors(errors);
        return;
      }

      setValidationErrors({});
      try {
        await StaffDetailService.updateUser(staffData?.id, {
          first_name: staffData?.first_name,
          last_name: staffData?.last_name,
          nickname: staffData?.nickname,
          status: staffData?.status,
          email: staffData?.email,
          cellphone: staffData?.cellphone,
          password: '',
          homephone: '',
          username: staffData?.username,
          address: staffData?.address,
          role_id: staffData?.role_id,
          department: staffData?.department,
          location: staffData?.location,
          jobrole: staffData?.jobrole,
          created_by: 2,
        });

        dispatch(fetchUpdatedStaffList(true));
        const response = await StaffDetailService.getUser(staffData?.id);

        if (response.status) {
          const updatedUser: staffType | null = response.response;
          setStaffData(updatedUser);
        }
      } catch (e: any) {
        const errors: errorType = {};

        if (e.response && e.response.data) {
          const msg = e.response.data.errors[0];

          if (msg.toLowerCase().includes(STRINGS.RESPONSE_SORT.EMAIL)) {
            errors.email = msg;
          } else if (
            msg.toLowerCase().includes(STRINGS.RESPONSE_SORT.USERNAME)
          ) {
            errors.username = msg;
          } else if (
            msg.toLowerCase().includes(STRINGS.RESPONSE_SORT.USERCODE)
          ) {
            errors.userCode = msg;
          } else {
            errors.general = STRINGS.STAFF_UPDATE_ERROR;
          }
        }

        setValidationErrors(errors);
        return;
      }
    }

    setEditMode(!editMode);
  };

  const formatDateTime = (dateString?: string): string => {
    if (!dateString) return ` ${STRINGS.DASH}`;
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleString(COMMON_CONSTANTS.DATE_TIME.EN_US, {
      year: COMMON_CONSTANTS.DATE_TIME.NUMERIC,
      month: COMMON_CONSTANTS.DATE_TIME.SHORT,
      day: COMMON_CONSTANTS.DATE_TIME.TWO_DIGIT,
      hour: COMMON_CONSTANTS.DATE_TIME.TWO_DIGIT,
      minute: COMMON_CONSTANTS.DATE_TIME.TWO_DIGIT,
      second: COMMON_CONSTANTS.DATE_TIME.TWO_DIGIT,
      hour12: true,
    });
  };

  const changeStatus = async () => {
    if (staffData?.status === 0) {
      await StaffDetailService.updateUser(staffData?.id, {
        ...staffData,
        status: 1,
      });
      dispatch(fetchUpdatedStaffList(true));
    } else {
      await StaffDetailService.updateUser(staffData?.id, {
        ...staffData,
        status: 0,
      });
      dispatch(fetchUpdatedStaffList(true));
    }

    try {
      const response = await StaffDetailService.getUser(staffData?.id);
      if (response.status) {
        const updatedUser: staffType | null = response.response;
        setStaffData(updatedUser);
      }
    } catch (error) {}
  };

  const checkUndefined = (value: string | null | undefined) => {
    return value === null || value === undefined ? ` ${STRINGS.DASH}` : value;
  };

  const handleTextChange = (text: string, field: keyof staffType) => {
    if (staffData) {
      setStaffData({ ...staffData, [field]: text });
    }
  };

  const handlePickerChange = (
    itemValue: string | null | undefined,
    fieldName: string,
  ) => {
    if (staffData) {
      const listMap: { [key: string]: filterItemsType[] } = {
        department: departmentList,
        location: locationList,
        jobRole: jobRolelist,
      };
      setStaffData({
        ...staffData,
        [`${fieldName}_name`]: itemValue,
        [`${fieldName}`]: listMap[fieldName]?.find(
          (item) => item.name === itemValue,
        )?.id,
      });
    }
  };

  return {
    editMode,
    staffData,
    setStaffData,
    editStaffData,
    departmentList,
    locationList,
    jobRolelist,
    validationErrors,
    changeStatus,
    formatDateTime,
    checkUndefined,
    handleTextChange,
    handlePickerChange,
  };
};

export default useStaffDetail;
