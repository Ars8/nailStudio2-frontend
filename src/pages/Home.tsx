import React from 'react';
import { Button, Row } from 'antd';
import { useHistory } from 'react-router-dom';

const Home = (): React.ReactElement => {
  const history = useHistory();

  const handleGoAppointment = (): void => {
    history.push('/nailsmasters');
  }
  return (
    <Row justify="center" align="middle" className="h100">
      <Button type="primary" onClick={handleGoAppointment}>Записаться на маникюр</Button>      
    </Row>
  )
}

export default Home
