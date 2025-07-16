import { Text, View } from 'react-native';
import { StaffDetailNavigationProp } from '../../types';
import { useRoute } from '@react-navigation/native';

export default function StaffDetail() {
  const route = useRoute<StaffDetailNavigationProp>();
  const { data } = route.params;
  console.log('Staff Detail Data:', data);

  return (
    <View>
      <Text>Edit Staff Screen</Text>
      <Text>First Name: {data.firstName}</Text>
      <Text>Last Name: {data.lastName}</Text>
      <Text>Email: {data.email}</Text>
      <Text>Cell Phone: {data.cellPhone}</Text>
      <Text>Home Phone: {data.homePhone}</Text>
      <Text>User Name: {data.userName}</Text>
      <Text>Nick Name: {data.nickName}</Text>
      <Text>Address: {data.address}</Text>
      <Text>Employee ID: {data.employeeId}</Text>
      <Text>Permission Level: {data.permissionLevel}</Text>
      <Text>Status: {data.status}</Text>
    </View>
  );
}
