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
    firstName: z.string().min(1, STRINGS.ZOD_ERRORS.FIRST_NAME_REQUIRED),
    lastName: z.string().min(1, STRINGS.ZOD_ERRORS.LAST_NAME_REQUIRED),
    email: z.string().email(STRINGS.ZOD_ERRORS.EMAIL_INVALID),
  });

  useEffect(() => {
    if (!data) {
      return;
    }

    const fetchData = async () => {
      setStaffData(data);

      setDepartmentList(await StaffDetailService.getDepartment());

      setLocationList(await StaffDetailService.getLocation());

      setJobRoleList(await StaffDetailService.getJobRole());
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
          firstName: staffData?.first_name,
          lastName: staffData?.last_name,
          email: staffData?.email,
          phoneNumber: staffData?.cellphone,
          username: staffData?.username,
          address: staffData?.address,
          nickname: staffData?.nickname,
          userStatus: staffData?.status,
          role: staffData?.role,
          departmentName: staffData?.department_name,
          locationName: staffData?.location_name,
          jobRoleName: staffData?.jobrole_name,
        });

        dispatch(fetchUpdatedStaffList(true));
        const updatedUser: staffType | null = await StaffDetailService.getUser(
          staffData?.id,
        );

        setStaffData(updatedUser);
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
    if (staffData?.status === 3) {
      await StaffDetailService.restoreUser(staffData?.id);
      dispatch(fetchUpdatedStaffList(true));
    } else {
      await StaffDetailService.deleteUser(staffData?.id);
      dispatch(fetchUpdatedStaffList(true));
    }

    try {
      const updatedUser: staffType | null = await StaffDetailService.getUser(
        staffData?.recordId,
      );

      setStaffData(updatedUser);
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
        [`${fieldName}Name`]: itemValue,
        [`${fieldName}RecordId`]: listMap[fieldName]?.find(
          (item) => item.name === itemValue,
        )?.recordId,
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
