import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import apiClient from '../../authClient';
import { StaffFormData } from '../../types';
import { NavigationProp } from '../../types';
import { useNavigation } from '@react-navigation/native';

const staffSchema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  password: z.string().min(7, 'Minimum 7 characters required'),
  cellPhone: z.string().min(1, 'Cell Phone is required'),
  homePhone: z.string().optional(),
  emailAddress: z.string().email('Invalid email address'),
  userName: z.string().min(1, 'Username is required'),
  nickName: z.string().optional(),
  address: z.string().optional(),
  employeeId: z.string().min(1, 'Employee ID is required'),
  permissionLevel: z.string().min(1, 'Permission Level is required'),
  status: z.enum(['Activated', 'Deactivated']).optional(),
});

export default function useAddEmployee() {
  const [errorMsg, setErrorMsg] = useState(false);

  const navigation = useNavigation<NavigationProp>();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      password: '',
      cellPhone: '',
      homePhone: '',
      emailAddress: '',
      userName: '',
      nickName: '',
      address: '',
      employeeId: '',
      permissionLevel: '',
      status: undefined,
    },

    resolver: zodResolver(staffSchema),
  });

  const onSubmit = async (data: StaffFormData) => {
    console.log('Successful', JSON.stringify(data));

    const firstName = data.firstName;
    const lastName = data.lastName;
    const email = data.emailAddress;
    const password = data.password;

    try {
      const response = await apiClient.post('/user/create-user', {
        firstName,
        lastName,
        email,
        password,
      });

      const { succeeded } = response.data;

      console.log('Succeeded: ', succeeded);
      reset();
    } catch (errors) {
      console.log('Errors: ', errors);
      setErrorMsg(true);
    }
  };

  function closeForm() {
    reset();
    navigation.goBack();
  }

  return { control, handleSubmit, onSubmit, closeForm, errorMsg };
}
