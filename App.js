// ІМПОРТУЄМО БІБЛІОТЕКИ БЕЗ ЯКИХ НЕ МОЖЕМО ПИСАТИ КОД
import React from "react";
import styled from "styled-components";

// ІМПОРТУЄМО ПОТРІБНІ КОМПОНЕНТИ
import Page from "./component/Page";
import Header from "./component/Header";
import Balance from "./component/Balance";
import Menu from "./component/Menu";
import Payment from "./component/Payment";

// КОНФІГУРАЦІЯ ========================================

const START_BALANCE = 10000;
const LIMIT_BALANCE = 100000;
const GET_MONEY = 100;

const SALARY_AMOUNT = 1000;
const COURSE_PRICE = 850;

export default function App() {
  // ФУНКЦІОНАЛ БАЛАНСУ ========================

  // Ось тут тримаємо актуальне значення балансу

  const [balance, setBalance] = React.useState(START_BALANCE);

  // Функція для прямого поповнення балансу
  const getMoney = () => setBalance(balance + GET_MONEY);

  // Функція яка виконується кожен раз коли наш баланс змінився
  React.useEffect(() => {
    // Перевірка на ліміт балансу
    if (balance > LIMIT_BALANCE) {
      alert(`Ваш ліміт балансу: ${LIMIT_BALANCE}`);
      setBalance(START_BALANCE);
    }

    // Перевірка на мінусовий баланс
    if (balance < 0) {
      alert(`Ви використали усі свої гроші. Поповніть картку`);
      // setBalance(0);
    }
    // Сюди записуються змінні при оновленні яких буде виконуватися функція
  }, [balance]);

  // ФУНКЦІОНАЛ ТРАНЗАКЦІЙ =======================================

  const [payment, setPayment] = React.useState([]);

  const getSalary = () => {
    setBalance(balance + SALARY_AMOUNT);

    setPayment([
      {
        name: "Зарплата",
        amount: SALARY_AMOUNT,
        type: "+"
      },
      ...payment
    ]);
  };

  const buyCourse = () => {
    setBalance(balance - COURSE_PRICE);

    setPayment([
      {
        name: "Оплата курсу",
        amount: COURSE_PRICE,
        type: "-"
      },
      ...payment
    ]);
  };

  const buyFood = () => {
    setBalance(balance - 20);

    setPayment([
      {
        name: "Оплата їжі",
        amount: 20,
        type: "*"
      },
      ...payment
    ]);
  };

  // ВЕРСТКА ІНТЕРФЕЙСУ ==========================================

  const LOGIN = "Viacheslav";
  const PASSWORD = "1234";

  const [isLogged, setLogged] = React.useState(false);

  const doLogin = () => {
    const login = prompt("Ваш логін");
    const password = prompt("Ваш пароль");

    if (login === LOGIN && password === PASSWORD) {
      alert("Ви увійшли!");
      setLogged(true);
    } else {
      if (login !== LOGIN && password !== PASSWORD) {
        return alert("Помилка в логіні та паролі");
      }

      if (login !== LOGIN) {
        return alert("Помилка в логіні");
      }

      if (password !== PASSWORD) {
        return alert("Помилка в паролі");
      }
    }
  };

  return (
    <Page>
      {/* компонент шапки з нашою назвою
          також при кліку мишкою на шапку
          в нас визивається функція HelloWorld
      */}

      <Header name="Приват24" onClick={doLogin} />

      {/* Компонент баланса в який передається
          Актуальне значення балансу  */}
      {isLogged && <Balance balance={balance} />}

      {/* Компонент меню з кнопками */}
      {isLogged && (
        <Menu
          // ось сюди ми передаємо конфігурацію кнопок
          config={[
            {
              name: "Поповнити баланс",
              onClick: getMoney,
              img: "/icon/wallet.svg"
            },
            {
              name: "Отримати зарплату",
              onClick: getSalary,
              img: "/icon/money.svg"
            },
            {
              name: "Купити курс",
              onClick: buyCourse,
              img: "/icon/media.svg"
            },
            {
              name: "Купити їжу в Glovo",
              onClick: buyFood,
              img: "/icon/food.svg"
            }
          ]}
        />
      )}
      {/* компонент списка наших транзакцій
          цей функціонал ми будемо робити на 3 уроці
      */}
      {isLogged && <Payment payment={payment} />}
      {isLogged === false && (
        <NotLogged>Вам потрібно увійти в акаунт</NotLogged>
      )}
    </Page>
  );
}

const NotLogged = styled.div`
  padding: 100px 30px;
  background: #000;
  color: #fff;
  text-align: center;

  margin-top: 100px;

  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;
