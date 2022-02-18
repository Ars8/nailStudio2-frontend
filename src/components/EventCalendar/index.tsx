import React, { FC, useState } from "react";
import { Calendar, Alert, Modal } from "antd";

import "./EventCalendar.css";
import EventForm from "../EventForm";
import { useSelector } from "react-redux";
import { selectMasterItems } from "../../store/ducks/master/selectors";
import { User } from "../../store/ducks/user/contracts/state";
import moment from "moment";
import { Appointment } from "../../store/ducks/events/contracts/state";
import { selectAppointmentsItems } from "../../store/ducks/events/selectors";

const EventCalendar: FC = () => {
	const initialState = {
		selectedValue: new Date(),
	};

	const [state, setState] = useState(initialState);
	const [modalVisible, setModalVisible] = useState(false);
	
  const master: User | undefined = useSelector(selectMasterItems);
	const events: Appointment[] = useSelector(selectAppointmentsItems);

		
		const eventState = new Date(state.selectedValue);
		console.log(typeof eventState);

	let arrEvents = [];

	for (let i = 0; i < events.length; i++) {
		if(new Date(events[i].appointmentDate).toDateString() === eventState.toDateString()) {
			arrEvents.push(new Date(events[i].appointmentDate).getHours())
		}
	}

	const addNewEvent = () => {
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

	const selectedFullDate = moment(state.selectedValue).format('DD.MM.YYYY');

	const addHour = (hour: number) => {
		const addAppointmentDate = new Date(eventState.setHours(hour, 0, 0, 0));
		console.log(typeof addAppointmentDate);
		addNewEvent();
		const d = new Date()
		console.log(typeof d);
	}

	return (
		<>
			<Alert
						message={`You selected date: ${selectedFullDate}`}
			/>
			<Calendar	onSelect={onSelect}/>
			<Modal
				title={`Дата посещения: ${selectedFullDate} к мастеру ${master?.username}`}
				visible={modalVisible}
				footer={null}
				onCancel={() => setModalVisible(false)}
      >
				<EventForm
						arrEvents={arrEvents}
						addHour={addHour}
				/>
      </Modal>
		</>
	);
};

export default EventCalendar;
