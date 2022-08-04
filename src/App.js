import { observer } from 'mobx-react-lite';
import React from 'react';
import { Context } from './index';
import AppRouter from './components/AppRouter';
import { check } from './http/userAPI';
import { Spinner } from 'react-bootstrap';

const App = observer(() => {
  const { user } = React.useContext(Context);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    check()
      .then((user) => {
        user.setUser(true);
        user.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spinner animation="grow" />;
  }
  return <AppRouter />;
});

export default App;
