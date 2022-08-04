import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, SHOP_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { Context } from '../index';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav.Link style={{ color: 'white' }} onClick={() => navigate(`${SHOP_ROUTE}`)}>
          Comix Con
        </Nav.Link>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button variant={'outline-info'} onClick={() => navigate(`${ADMIN_ROUTE}`)}>
              Админ панель
            </Button>
            <Button variant={'outline-light'} className="ml-4" onClick={() => logOut()}>
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button variant={'outline-info'} onClick={() => navigate(LOGIN_ROUTE)}>
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
