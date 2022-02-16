import React, {FC} from 'react';
import {Layout} from "antd";
import EventCalendar from "../components/EventCalendar/index";
import { useDispatch } from "react-redux";
import {fetchAppointment} from '../store/ducks/events/actionCreators';
import { fetchMaster } from '../store/ducks/master/actionCreators';

const Event: FC = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchMaster());
        dispatch(fetchAppointment());
      }, [dispatch]);

    return (
        <Layout>
            <EventCalendar/>
        </Layout>
    );
};

export default Event;
