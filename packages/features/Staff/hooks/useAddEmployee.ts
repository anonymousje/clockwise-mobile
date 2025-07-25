import { useState } from 'react';
import { z } from 'zod';
import { useDispatch } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import apiClient from '../../apiClient';
import { StaffFormData, NavigationProp } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { fetchUpdated } from '../../../store/actions/fetchUsers';

export default function useAddEmployee() {
  const [errorMsg, setErrorMsg] = useState(false);
  const [firstName, setFirstName] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp>();

  const staffSchema = z.object({
    firstName: z.string().min(1, 'First Name is required'),
    lastName: z.string().min(1, 'Last Name is required'),
    email: z.string().email('Invalid email address'),
    password: z
      .string()
      .min(7, 'Minimum 7 characters required')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(
        /[^A-Za-z0-9]/,
        'Password must contain at least one special character',
      ),
  });

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      password: '',
      email: '',
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
    } catch (errors) {
      console.log('Errors: ', errors);

      setErrorMsg(true);
    }
  };

  function clearForm() {
    reset();
    setFirstName('');
    setErrorMsg(false);
  }

  return {
    control,
    handleSubmit,
    onSubmit,
    errorMsg,
    firstName,
    setFirstName,
    clearForm,
  };
}
