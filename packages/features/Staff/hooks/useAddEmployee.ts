import { useState } from 'react';
import { z } from 'zod';
import { useDispatch } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import apiClient from '../../apiClient';
import { StaffFormData, NavigationProp } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { fetchUpdated } from '../../../store/actions/fetchUsers';
import VALUES from '../../../constants/values';
import STRINGS from '../../../utils/strings';

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
      firstName: VALUES.DEFAULT,
      lastName: VALUES.DEFAULT,
      password: VALUES.DEFAULT,
      email: VALUES.DEFAULT,
    },

    resolver: zodResolver(staffSchema),
  });

  const onSubmit = async (data: StaffFormData) => {
    try {
      await apiClient.post('/user/create-user', {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      });

      reset();
      dispatch(fetchUpdated(true));

      navigation.goBack();
    } catch (error) {
      setErrorMsg(true);
    }
  };

  const clearForm = () => {
    reset();
    setFirstName(VALUES.DEFAULT);
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
