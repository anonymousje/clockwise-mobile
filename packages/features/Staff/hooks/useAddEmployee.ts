import { useState } from 'react';
import { z } from 'zod';
import { useDispatch } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import apiClient from '../../authClient';
import { StaffFormData, NavigationProp } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { fetchUpdated } from '../../redux/actions/fetchUsers';

const staffSchema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  password: z
    .string()
    .min(7, 'Minimum 7 characters required')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(
      /[^A-Za-z0-9]/,
      'Password must contain at least one special character',
    ),
  emailAddress: z.string().email('Invalid email address'),
});

export default function useAddEmployee() {
  const [errorMsg, setErrorMsg] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp>();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      password: '',
      emailAddress: '',
    },

    resolver: zodResolver(staffSchema),
  });

  const onSubmit = async (data: StaffFormData) => {
    console.log('Successful', JSON.stringify(data));

    try {
      const response = await apiClient.post('/user/create-user', {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.emailAddress,
        password: data.password,
      });

      const { succeeded } = response.data;

      console.log('Succeeded: ', succeeded);
      reset();
      dispatch(fetchUpdated(true));

      navigation.goBack();
    } catch (errors) {
      console.log('Errors: ', errors);
      setErrorMsg(true);
    }
  };

  function closeForm() {
    reset();
    navigation.goBack();
  }

  return {
    control,
    handleSubmit,
    onSubmit,
    closeForm,
    errorMsg,
  };
}
