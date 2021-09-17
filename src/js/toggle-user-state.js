const toggleUserState = (allUsers, userName) => {
    return new Promise((resolve, reject) => {
        const updatedUsers = allUsers.map(user =>
          user.name === userName ? { ...user, active: !user.active } : user,
        );
        resolve(updatedUsers);
  })
};

export default toggleUserState