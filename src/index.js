import css from './styles.css';
import delay from './js/delay';
import toggleUserState from './js/toggle-user-state';
import makeTransaction from './js/make-transaction';


// =============================== задание 1 ==============================
const logger = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms


// =============================== задание 2 ==============================
const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const logger2 = updatedUsers => console.table(updatedUsers);
/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(logger2);
toggleUserState(users, 'Lux').then(logger2);


// =============================== задание 3 ==============================
const logSuccess = ({id, delay}) => {
  console.log(`Transaction ${id} processed in ${delay}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);
