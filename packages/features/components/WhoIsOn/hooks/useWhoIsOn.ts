import { useEffect, useState } from 'react';
import WhoIsOnService from '../services/WhoIsOnService';
import { WhoIsOnResponseType, WhoIsOnUser } from '../../../types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { fetchUpdatedWhoIsOnList } from '../../../../store/actions/flags';

const useWhoIsOn = (refreshFlag: { refreshFlag: boolean }) => {
  const [whoIsOnList, setWhoIsOnList] = useState<WhoIsOnUser[]>([]);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const updated = useSelector((state: RootState) => state.updated);

  const fetchWhoIsOnData = async (): Promise<WhoIsOnResponseType> => {
    const response = await WhoIsOnService.fetchWhoIsOnData();

    if (response.status) {
      const whoIsOnData = response.response.onlineUsers || [];
      setWhoIsOnList(whoIsOnData);
    }
    return response;
  };

  useEffect(() => {
    fetchWhoIsOnData();
    if (updated.whoIsOnListUpdateFlag) {
      dispatch(fetchUpdatedWhoIsOnList(false));
    }
  }, [refreshFlag, updated.whoIsOnListUpdateFlag, dispatch]);

  return {
    whoIsOnList,
    showModal,
    setShowModal,
  };
};

export default useWhoIsOn;
