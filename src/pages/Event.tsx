import React, {FC, useEffect, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import { useDispatch, useSelector } from "react-redux";
import {IEvent} from "../models/IEvent";
import { selectUsersItems } from '../store/ducks/users/selectors';
import { fetchAddTweet } from '../store/ducks/events/actionCreators';

const Event: FC = () => {
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);
    const {fetchGuests, createEvent, fetchEvents} = useActions();
    const masters = useSelector(selectUsersItems);

    useEffect(() => {
        fetchGuests()
        fetchEvents(user.username);
    }, [])

    const addNewEvent = (event: IEvent) => {
        setModalVisible(false);
        dispatch(fetchAddTweet(event));
    }

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
