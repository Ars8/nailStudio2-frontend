import React, {FC, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import { useDispatch, useSelector } from "react-redux";
import {IEvent} from "../models/IEvent";
import { selectUsersItems } from '../store/ducks/users/selectors';
import { fetchAddTweet, setAddFormState } from '../store/ducks/events/actionCreators';
import { AddFormState } from '../store/ducks/events/contracts/state';
import { selectTweetsItems } from '../store/ducks/events/selectors';
import { fetchUserData } from '../store/ducks/user/actionCreators';

const Event: FC = () => {
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);
    const masters = useSelector(selectUsersItems);
    const events = useSelector(selectTweetsItems)

    const addNewEvent = (event: IEvent) => {
        setModalVisible(false);
        dispatch(setAddFormState(AddFormState.LOADING))
        dispatch(fetchAddTweet(event));
    }

    React.useEffect(() => {
        dispatch(fetchUserData());
      }, [dispatch]);

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
