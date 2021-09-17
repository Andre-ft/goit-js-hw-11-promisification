const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = ({id}) => {    
    return new Promise((resolve, reject) => {
        const delay = randomIntegerFromInterval(200, 500);
        
        setTimeout(() => {
            const canProcess = Math.random() > 0.3;
                
            if (canProcess) resolve({ id, delay });
            
            reject(id);
          
        }, delay);
    })
};

export default makeTransaction