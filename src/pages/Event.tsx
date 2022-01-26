import React, {FC, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import EventCalendar from "../components/EventCalendar/index";
import EventForm from "../components/EventForm";
import { useDispatch, useSelector } from "react-redux";
import {IEvent} from "../models/IEvent";
import { selectAppointmentsItems } from '../store/ducks/events/selectors';
import { fetchUserData } from '../store/ducks/user/actionCreators';
import {fetchAppointment} from '../store/ducks/events/actionCreators'
import { selectUsersItems } from '../store/ducks/users/selectors';

const Event: FC = () => {
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);
    const events = useSelector(selectAppointmentsItems);
    const masters = useSelector(selectUsersItems)

    const addNewEvent = (event: IEvent) => {
        setModalVisible(false);
    }

    React.useEffect(() => {
        dispatch(fetchUserData());
        dispatch(fetchAppointment());
      }, [dispatch]);

      console.log(events);

    return (
        <Layout>
            <EventCalendar events={events}/>
            <Row justify="center">
                <Button
                    onClick={() => setModalVisible(true)}
                >
                    Добавить событие
                </Button>
            </Row>
            <Modal
                title="Добавить событие"
                visible={modalVisible}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                <EventForm
                    masters={masters}
                    submit={addNewEvent}
                />
            </Modal>
        </Layout>
    );
};

export default Event;
