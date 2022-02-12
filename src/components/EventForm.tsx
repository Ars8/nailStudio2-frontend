import React, {FC} from 'react';
import {Form} from "antd";
import {IUser} from "../models/IUser";
import {IEvent} from "../models/IEvent";
import AppointmentHoursItem from './AppointmentHoursItem';
import { Appointment } from '../store/ducks/events/contracts/state';

interface EventFormProps {
    masters: IUser[],
    events: Appointment[],
    submit: (event: IEvent) => void
}

const EventForm: FC<EventFormProps> = ({events}) => {
    return (
        <Form>
            {events.map((item, index) => (
                <AppointmentHoursItem key={index}>
                    <div>{item.appointmentDate}</div>
                </AppointmentHoursItem>
            ))}
        </Form>
    );
};

export default EventForm;
