import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import WhoIsOnService from '../services/WhoIsOnService';
import { WhoIsOnResponseType, WhoIsOnUser } from '../../../types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { NavigationProp } from '../../../types';
import { fetchUpdatedWhoIsOnList } from '../../../../store/actions/flags';
import { SCREENS } from '../../../../constants/screens';

const useWhoIsOn = () => {
  const [whoIsOnList, setWhoIsOnList] = useState<WhoIsOnUser[]>([]);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp>();
  const updated = useSelector((state: RootState) => state.updated);
  const refreshFlag = useSelector(
    (state: RootState) => state.updated.refreshFlag,
  );

  const fetchWhoIsOnData = async (): Promise<WhoIsOnResponseType> => {
    const response = await WhoIsOnService.fetchWhoIsOnData();

    if (response.status) {
      const whoIsOnData = response.response.onlineUsers || [];
      setWhoIsOnList(whoIsOnData);
    }
    return response;
  };

  useEffect(() => {
    if (updated.whoIsOnListUpdateFlag) {
      fetchWhoIsOnData();
      dispatch(fetchUpdatedWhoIsOnList(false));
    }
    if (refreshFlag) {
      fetchWhoIsOnData();
    }
  }, [refreshFlag, updated.whoIsOnListUpdateFlag, dispatch]);

  useEffect(() => {
    fetchWhoIsOnData();
  }, []);

  const handleUserPress = () => {
    navigation.navigate(SCREENS.TimeClockDetails);
  };

  return {
    whoIsOnList,
    showModal,
    setShowModal,
    handleUserPress,
  };
};

export default useWhoIsOn;
