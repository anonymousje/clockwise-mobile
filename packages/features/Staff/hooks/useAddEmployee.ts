import { useState } from 'react';
import { z } from 'zod';
import { useDispatch } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { StaffFormData, NavigationProp } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { fetchUpdatedStaffList } from '../../../store/actions/flags';
import COMMON_CONSTANTS from '../../../constants/CommonConstants';
import STRINGS from '../../../utils/strings';
import AddEmployeeService from '../services/AddEmployeeService';

const useAddEmployee = () => {
  const [errorMsg, setErrorMsg] = useState(false);
  const [firstName, setFirstName] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp>();

  const staffSchema = z.object({
    first_name: z.string().min(1, STRINGS.ZOD_ERRORS.FIRST_NAME_REQUIRED),
    last_name: z.string().min(1, STRINGS.ZOD_ERRORS.LAST_NAME_REQUIRED),
    email: z.string().email(STRINGS.ZOD_ERRORS.EMAIL_INVALID),
    password: z
      .string()
      .min(7, STRINGS.VALIDATIONS.LENGTH)
      .regex(/[A-Z]/, STRINGS.VALIDATIONS.UPPERCASE)
      .regex(/[^A-Za-z0-9]/, STRINGS.VALIDATIONS.SPECIAL_CHAR),
  });

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      first_name: COMMON_CONSTANTS.DEFAULT,
      last_name: COMMON_CONSTANTS.DEFAULT,
      password: COMMON_CONSTANTS.DEFAULT,
      email: COMMON_CONSTANTS.DEFAULT,
    },

    resolver: zodResolver(staffSchema),
  });

  const onSubmit = async (data: StaffFormData) => {
    const response = await AddEmployeeService.addEmployee({
      first_name: data.first_name,
      last_name: data.last_name,
      nickname: '',
      status: 1,
      address: '',
      cellphone: '',
      homephone: '',
      location: 1,
      department: 1,
      email: data.email,
      password: data.password,
      username: data.first_name + Date.now(),
      jobrole: 1,
      role_id: 1,
      created_by: 2,
    });

    if (response.status) {
      reset();
      dispatch(fetchUpdatedStaffList(true));
      navigation.goBack();
    } else {
      setErrorMsg(true);
    }
  };

  const clearForm = () => {
    reset();
    setFirstName(COMMON_CONSTANTS.DEFAULT);
    setErrorMsg(false);
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    errorMsg,
    firstName,
    setFirstName,
    clearForm,
  };
};

export default useAddEmployee;
