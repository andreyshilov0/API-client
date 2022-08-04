import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';

import { Container, Form, Card, Button, Row } from 'react-bootstrap';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const Auth = observer(() => {
  const { user } = React.useContext(Context);
  const location = useLocation(); // Помогает определять путь на котором находится пользователь
  const isLogin = location.pathname === LOGIN_ROUTE; // Если isLogin открыт путь login , тогда будет true
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(user);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (e) {
      console.log(e.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}>
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="mt-3"
            placeholder="Введите email"
          />
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="mt-3"
            placeholder="Введите пароль"
            type="password"
          />
          <Row className="d-flex justify-content-between">
            {isLogin ? ( // Реализовано переключение между формами с помощью тернарного оператора
              <div className="mt-3">
                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегестрируйтесь</NavLink>
              </div>
            ) : (
              <div className="mt-3">
                <NavLink to={LOGIN_ROUTE}>Есть аккаунт, войдите!</NavLink>
              </div>
            )}
            <Button onClick={click} variant="primary" className="mt-3">
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
