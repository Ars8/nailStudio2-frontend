import React, {FC, useState} from 'react';
import {Form, TimePicker} from "antd";
import {IUser} from "../models/IUser";
import {IEvent} from "../models/IEvent";
import moment from 'moment';

interface EventFormProps {
    masters: IUser[],
    submit: (event: IEvent) => void
}

const EventForm: FC<EventFormProps> = (props) => {
    const [selectedTime, setSelectedTime] = useState("00:00");
    return (
        <Form>

            <TimePicker
                format="HH:mm"
                minuteStep={60}
                disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 20, 21, 22, 23]}
                showNow={false}
                value={moment(selectedTime, "HH:mm")}
                onSelect={(value) => {
                const timeString = moment(value).format("HH:mm");
                setSelectedTime(timeString)
            }} />
            
        </Form>
    );
};

export default EventForm;
