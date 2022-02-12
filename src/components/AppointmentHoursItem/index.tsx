import { Button } from 'antd';
import React from 'react';
import "./AppointmentHoursItem.css";

interface hourItemPropsType {
  children: React.ReactNode
}

const AppointmentHoursItem = (props: hourItemPropsType) => {
  return (
      <Button type="primary" className="hourItem" block>
        {props.children}
      </Button>
  )
}

export default AppointmentHoursItem;