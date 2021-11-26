import React, {FC, useState} from 'react';
import { Card, Layout, Row, Button } from 'antd';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login: FC = () => {
  const [visibleModal, setVisibleModal] = useState<'logIn' | 'signUp'>();

  const handleClickOpenLogIn = (): void => {
    setVisibleModal('logIn')
  };

  const handleClickOpenSignUp = (): void => {
    setVisibleModal('signUp')
  };

  const handleCloseModal = (): void => {
    setVisibleModal(undefined);
  };

  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Button onClick={handleClickOpenLogIn} type="primary">
          Войти
        </Button>
        <Button onClick={handleClickOpenSignUp} type="primary">
          Зарегистрироваться
        </Button>
        <Card>
          <LoginForm open={visibleModal === 'logIn'} onClose={handleCloseModal} />
          <RegisterForm open={visibleModal === 'signUp'} onClose={handleCloseModal}/>
        </Card>        
      </Row>
    </Layout>
  )
}

export default Login
