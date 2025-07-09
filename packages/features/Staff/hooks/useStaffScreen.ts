import { useState } from 'react';
import { NavigationProp } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../../constants/screens';

function useStaffScreen() {
  const [showModal, setShowModal] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const navigation = useNavigation<NavigationProp>();

  function getStaff() {
    const response = [
      {
        id: '1',
        fullName: 'Usman',
        cellPhone: '+923080883395',
        homePhone: '',
        emailAddress: 'usman@example.com',
        userName: 'Test',
        nickName: 'NickTest',
        address: 'Johar Town',
        employeeId: 'EMP-100',
        permissionLevel: 'Manager',
        status: 'Activated',
      },

      {
        id: '2',
        fullName: 'Foad',
        cellPhone: '+923080883395',
        homePhone: '',
        emailAddress: 'foad@example.com',
        userName: 'Test2',
        nickName: 'NickTest2',
        address: 'Wapda Town',
        employeeId: 'EMP-101',
        permissionLevel: 'Manager',
        status: 'Activated',
      },

      {
        id: '3',
        fullName: 'Haris',
        cellPhone: '+923080883395',
        homePhone: '',
        emailAddress: 'haris@example.com',
        userName: 'Test3',
        nickName: 'NickTest3',
        address: 'Faisal Town',
        employeeId: 'EMP-102',
        permissionLevel: 'Employee',
        status: 'Deactivated',
      },
    ];

    return response;
  }
  function openForm() {
    navigation.navigate(SCREENS.AddEmployee);
  }

  return {
    showModal,
    setShowModal,
    getStaff,
    expandedId,
    setExpandedId,
    openForm,
  };
}

export default useStaffScreen;
