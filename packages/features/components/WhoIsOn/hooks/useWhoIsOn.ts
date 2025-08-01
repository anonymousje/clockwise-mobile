import { useEffect, useState } from 'react';
import WhoIsOnService from '../services/WhoIsOnService';
import { WhoIsOnResponseType, WhoIsOnUser } from '../../../types';

const useWhoIsOn = (refreshFlag: { refreshFlag: boolean }) => {
  const [whoIsOnList, setWhoIsOnList] = useState<WhoIsOnUser[]>([]);
  const [showModal, setShowModal] = useState(false);

  const fetchWhoIsOnData = async (): Promise<WhoIsOnResponseType> => {
    const response = await WhoIsOnService.fetchWhoIsOnData();

    if (response.status) {
      const whoIsOnData = response.response.onlineUsers || [];
      console.log('Who is on data:', whoIsOnData);
      setWhoIsOnList(whoIsOnData);
    }
    return response;
  };

  useEffect(() => {
    fetchWhoIsOnData();
  }, [refreshFlag]);

  return {
    whoIsOnList,
    showModal,
    setShowModal,
  };
};

export default useWhoIsOn;
