import React, {FC} from 'react';
import {Button, Form} from "antd";
import {IEvent} from "../../models/IEvent";
import { User } from '../../store/ducks/user/contracts/state';
import { useSelector } from 'react-redux';
import { selectMasterItems } from '../../store/ducks/master/selectors';
import './EventForm.css'

interface EventFormProps {
    arrEvents: number[],
    submit: (event: IEvent) => void,
}

const EventForm: FC<EventFormProps> = ({arrEvents}) => {
    const master: User | undefined = useSelector(selectMasterItems);
    
    const workingHours = master?.workingHours;
    console.log(workingHours);
    console.log(arrEvents);

    return (
        <Form>
            {workingHours?.map(item => (
                <Button key={item} disabled={arrEvents.includes(item)} type="primary" className="hourItem" block>{item}:00</Button>
            ))}
        </Form>
    );
};

export default EventForm;
