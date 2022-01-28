import React, {FC} from 'react';
import {Calendar, Badge} from "antd";

import './EventCalendar.css';
import { Appointment } from '../../store/ducks/events/contracts/state';

interface EventCalendarProps {
    events: Appointment[];
}

const EventCalendar: FC<EventCalendarProps> = ({events}) => {
  const DATE = new Date(events[1]?.appointmentDate);

console.log(events[1]);
console.log(DATE.getDate());
function getListData(value: any) {
  console.log(value.dayOfYear())
  let listData;
  switch (value.date() + value.month()) {
    case 24:
      listData = [
        { type: 'warning', content: events[0]?.appointmentTime },
        { type: 'success', content: events[1]?.appointmentTime },
        
      ];
      break;
    case 26:
      listData = [
        { type: 'warning', content: events[2]?.appointmentTime },
        { type: 'success', content: events[3]?.appointmentTime },
        { type: 'error', content: events[4]?.appointmentTime },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value: any) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={'success'} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value: any) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value: any) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

    return (
        <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
    );
};

export default EventCalendar;
