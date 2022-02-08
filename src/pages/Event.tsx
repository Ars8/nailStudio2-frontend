import React, {FC} from 'react';
import {Layout} from "antd";
import EventCalendar from "../components/EventCalendar/index";
import { useDispatch, useSelector } from "react-redux";
import { selectAppointmentsItems } from '../store/ducks/events/selectors';
import { fetchUserData } from '../store/ducks/user/actionCreators';
import {fetchAppointment} from '../store/ducks/events/actionCreators';

const Event: FC = () => {
    const dispatch = useDispatch();
    const events = useSelector(selectAppointmentsItems);

    React.useEffect(() => {
        dispatch(fetchUserData());
        dispatch(fetchAppointment());
      }, [dispatch]);

    return (
        <Layout>
            <EventCalendar events={events}/>
        </Layout>
    );
};

export default Event;
