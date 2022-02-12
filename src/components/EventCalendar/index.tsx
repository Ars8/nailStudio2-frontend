import React, { FC, useState } from "react";
import { Calendar, Alert, Modal } from "antd";

import "./EventCalendar.css";
import { Appointment } from "../../store/ducks/events/contracts/state";
import moment from "moment";
import EventForm from "../EventForm";
import { useSelector } from "react-redux";
import { selectUsersItems } from "../../store/ducks/users/selectors";
import { IEvent } from "../../models/IEvent";

interface EventCalendarProps {
	events: Appointment[];
}

const EventCalendar: FC<EventCalendarProps> = ({ events }) => {
	const initialState = {
		selectedValue: moment(new Date()),
	};

	const [state, setState] = useState(initialState);
	const [modalVisible, setModalVisible] = useState(false);
	const masters = useSelector(selectUsersItems);

	const addNewEvent = (event: IEvent) => {
		setModalVisible(false);
	}

	const selectDay = () => {
			setModalVisible(true)
	}

	const onSelect = (value: any) => {
		setState({
			selectedValue: value,
		});
		selectDay();
	};

	

	return (
		<>
			<Alert
						message={`You selected date: ${state.selectedValue}`}
			/>
			<Calendar	onSelect={onSelect}/>
			<Modal
				title={`Дата посещения: ${state.selectedValue}`}
				visible={modalVisible}
				footer={null}
				onCancel={() => setModalVisible(false)}
      >
				<EventForm
						masters={masters}
						events={events}
						submit={addNewEvent}
				/>
      </Modal>
		</>
	);
};

export default EventCalendar;
