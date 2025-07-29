import { useState, useEffect } from 'react';
import type { filterItemsType, staffType } from '../../types';
import { useRoute } from '@react-navigation/native';
import { StaffDetailNavigationProp, errorType } from '../../types';
import apiClient from '../../apiClient';
import { useDispatch } from 'react-redux';
import { fetchUpdated } from '../../../store/actions/fetchUsers';
import { z } from 'zod';
import STRINGS from '../../../utils/strings';
import VALUES from '../../../constants/values';

const useStaffDetail = () => {
  const route = useRoute<StaffDetailNavigationProp>();
  const { recordId } = route.params;
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
    if (!recordId) {
      return;
    }

    const fetchDepartment = async () => {
      return await apiClient
        .get('/department/get-all-departments')
        .then((response) => response.data.data)
        .catch((error) => {
          throw error;
        });
    };

    const fetchLocation = async () => {
      return await apiClient
        .get('/location/get-all-locations')
        .then((response) => response.data.data)
        .catch((error) => {
          throw error;
        });
    };

    const fetchJobRole = async () => {
      return await apiClient
        .get('/jobrole/get-all-jobroles')
        .then((response) => response.data.data)
        .catch((error) => {
          throw error;
        });
    };

    const fetchUser = async (): Promise<staffType | null> => {
      return await apiClient
        .get(`/user/get-user/${recordId}`)
        .then((response) => response.data.data)
        .catch((error) => {
          throw error;
        });
    };

    const fetchData = async () => {
      const data = await fetchUser();
      setStaffData(data);

      const departmentData = await fetchDepartment();
      setDepartmentList(departmentData);

      const locationData = await fetchLocation();
      setLocationList(locationData);

      const jobRoleData = await fetchJobRole();
      setJobRoleList(jobRoleData);
    };

    fetchData();
  }, [recordId]);

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
        await apiClient.put(`/user/edit-user/${staffData?.recordId}`, {
          firstName: staffData?.firstName,
          lastName: staffData?.lastName,
          email: staffData?.email,
          phoneNumber: staffData?.phoneNumber,
          username: staffData?.username,
          address: staffData?.address,
          nickname: staffData?.nickname,
          userCode: staffData?.userCode,
          userStatus: staffData?.userStatus,
          role: staffData?.role,
          departmentRecordId: staffData?.departmentRecordId,
          locationRecordId: staffData?.locationRecordId,
          jobRoleRecordId: staffData?.jobRoleRecordId,
          departmentName: staffData?.departmentName,
          locationName: staffData?.locationName,
          jobRoleName: staffData?.jobRoleName,
        });

        dispatch(fetchUpdated(true));
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
    return date.toLocaleString(VALUES.DATE_TIME.EN_US, {
      year: VALUES.DATE_TIME.NUMERIC,
      month: VALUES.DATE_TIME.SHORT,
      day: VALUES.DATE_TIME.TWO_DIGIT,
      hour: VALUES.DATE_TIME.TWO_DIGIT,
      minute: VALUES.DATE_TIME.TWO_DIGIT,
      second: VALUES.DATE_TIME.TWO_DIGIT,
      hour12: true,
    });
  };

  const changeStatus = async () => {
    if (staffData?.userStatus === 3) {
      await apiClient.post(`/user/restore-user/${staffData?.recordId}`);
      dispatch(fetchUpdated(true));
    } else {
      await apiClient.post(`/user/delete-user`, { id: staffData?.recordId });
      dispatch(fetchUpdated(true));
    }

    try {
      const updatedUser = await apiClient
        .get(`/user/get-user/${staffData?.recordId}`)
        .then((response) => response.data.data);
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
