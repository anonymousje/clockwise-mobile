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
    firstName: z.string().min(1, STRINGS.ZOD_ERRORS.FIRST_NAME_REQUIRED),
    lastName: z.string().min(1, STRINGS.ZOD_ERRORS.LAST_NAME_REQUIRED),
    email: z.string().email(STRINGS.ZOD_ERRORS.EMAIL_INVALID),
    password: z
      .string()
      .min(7, STRINGS.VALIDATIONS.LENGTH)
      .regex(/[A-Z]/, STRINGS.VALIDATIONS.UPPERCASE)
      .regex(/[^A-Za-z0-9]/, STRINGS.VALIDATIONS.SPECIAL_CHAR),
  });

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      firstName: COMMON_CONSTANTS.DEFAULT,
      lastName: COMMON_CONSTANTS.DEFAULT,
      password: COMMON_CONSTANTS.DEFAULT,
      email: COMMON_CONSTANTS.DEFAULT,
    },

    resolver: zodResolver(staffSchema),
  });

  const onSubmit = async (data: StaffFormData) => {
    try {
      await AddEmployeeService.addEmployee({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      });

      reset();
      dispatch(fetchUpdatedStaffList(true));

      navigation.goBack();
    } catch (error) {
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
