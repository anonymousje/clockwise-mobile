const useTimeTracking = () => {
  const approveTime = () => {
    console.log('Time approved');
  };

  const approveAll = () => {
    console.log('All time entries approved');
  };

  const unapproveAll = () => {
    console.log('All time entries unapproved');
  };

  return { approveTime, approveAll, unapproveAll };
};

export default useTimeTracking;
