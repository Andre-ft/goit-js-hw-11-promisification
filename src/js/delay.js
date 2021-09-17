const delay = ms => {
  // Твой код
    return new Promise((resolve, rejecte) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);        
  })
};

export default delay