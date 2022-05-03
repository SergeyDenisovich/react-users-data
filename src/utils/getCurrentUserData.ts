export const getCurrentUserData = (userData: any) => {
  let indexOfObjData = Object.keys(userData).findIndex((data) => data === 'address');
  let userAddressData = Object.keys(userData.address)
    .filter((elem) => {
      if (elem === 'suite' || elem === 'geo') {
        return false;
      } else {
        return true;
      }
    })
    .map((elem) => {
      return {
        [elem]: userData.address[elem],
      };
    });

  const editUserInfo = Object.keys(userData)
    .filter((prop) => {
      if (prop === 'id' || prop === 'company' || prop === 'address' || prop === 'comment') {
        return false;
      } else {
        return true;
      }
    })
    .map((data) => {
      return {
        [data]: userData[data],
      };
    });

  let restUserDataArr = editUserInfo.slice(indexOfObjData);

  let startUserData = editUserInfo.slice(0, indexOfObjData);

  return [...startUserData, ...userAddressData, ...restUserDataArr];
};
