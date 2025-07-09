import { Text, View, Modal, TouchableOpacity } from 'react-native';
import { styles } from '../../Staff/styles/StaffScreen.styles';
import useStaffScreen from '../hooks/useStaffScreen';

export default function Staff() {
  const { openForm, getStaff, expandedId, setExpandedId } = useStaffScreen();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.staffSectionHeader}>Staff List</Text>
        {getStaff().map((staff) => (
          <TouchableOpacity
            key={staff.id}
            style={styles.staffItem}
            onPress={() =>
              setExpandedId(expandedId === staff.id ? null : staff.id)
            }
            activeOpacity={0.7}
          >
            <Text style={styles.staffName}>
              {staff.fullName} <Text>({staff.employeeId})</Text>
            </Text>

            <Text style={styles.staffDetails}>
              Position: {staff.permissionLevel}
            </Text>

            {expandedId === staff.id && (
              <>
                <Modal
                  animationType='slide'
                  onRequestClose={() => setExpandedId(null)}
                >
                  <View style={styles.infoContainer}>
                    <View style={styles.info}>
                      <Text style={styles.staffDetails}>Email</Text>

                      <Text style={styles.infoContainerDetails}>
                        {staff.emailAddress}
                      </Text>
                    </View>
                    <View style={styles.info}>
                      <Text style={styles.staffDetails}>CellPhone</Text>

                      <Text style={styles.infoContainerDetails}>
                        {staff.cellPhone}
                      </Text>
                    </View>
                    <View style={styles.info}>
                      <Text style={styles.staffDetails}>Username</Text>

                      <Text style={styles.infoContainerDetails}>
                        {staff.userName}
                      </Text>
                    </View>
                    <View style={styles.info}>
                      <Text style={styles.staffDetails}>Address</Text>

                      <Text style={styles.infoContainerDetails}>
                        {staff.address}
                      </Text>
                    </View>
                    <View style={styles.info}>
                      <Text style={styles.staffDetails}>Permission Level</Text>
                      <Text style={styles.infoContainerDetails}>
                        {staff.permissionLevel}
                      </Text>
                    </View>

                    <View
                      style={[
                        styles.statusBadge,
                        staff.status === 'Activated'
                          ? styles.statusActivated
                          : styles.statusDeactivated,
                      ]}
                    >
                      <Text>{staff.status}</Text>
                    </View>
                  </View>
                </Modal>
              </>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={openForm}
          style={styles.addButton}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
