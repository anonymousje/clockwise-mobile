import { useEffect, useState } from 'react';
import WhoIsOnService from '../services/WhoIsOnService';
import { WhoIsOnResponseType, WhoIsOnUser } from '../../../types';

const useWhoIsOn = () => {
  const [whoIsOnList, setWhoIsOnList] = useState<WhoIsOnUser[]>([]);

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
  }, []);

  return {
    whoIsOnList,
  };
};

export default useWhoIsOn;
