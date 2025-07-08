import { StaffFormData } from '../../types';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';

const staffSchema = z.object({
  fullName: z.string().min(1, 'Full Name is required'),
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

function useStaffScreen() {
  const [showModal, setShowModal] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      fullName: '',
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

  function onSubmit(data: StaffFormData) {
    console.log('Successful', JSON.stringify(data));

    setShowModal(false);
    reset();
  }

  function closeForm() {
    setShowModal(false);
    reset();
  }
  function getStaff() {
    const response = [
      {
        id: '1',
        empId: 'EMP001',
        name: 'Usman',
        position: 'Software Engineer',
        email: 'usman@example.com',
        status: 'Activated',
      },

      {
        id: '2',
        empId: 'EMP002',
        name: 'Foad',
        position: 'Product Manager',
        email: 'foad@example.com',
        status: 'Deactivated',
      },

      {
        id: '3',
        empId: 'EMP003',
        name: 'Haris',
        position: 'UI/UX Designer',
        email: 'haris@example.com',
        status: 'Activated',
      },
    ];

    return response;
  }

  return {
    control,
    handleSubmit,
    onSubmit,
    showModal,
    setShowModal,
    getStaff,
    expandedId,
    setExpandedId,
    closeForm,
  };
}

export default useStaffScreen;
