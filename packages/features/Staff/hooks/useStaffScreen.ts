function useStaffScreen() {
  function onSubmit(data) {
    console.log('Successful', JSON.stringify(data));
  }

  return { onSubmit };
}

export default useStaffScreen;
