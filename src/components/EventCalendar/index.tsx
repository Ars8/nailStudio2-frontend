import React, { FC, useState } from "react";
import { Calendar, Alert, Modal, Card, Button } from "antd";

import "./EventCalendar.css";
import EventForm from "../EventForm";
import { useDispatch, useSelector } from "react-redux";
import { selectMasterItems } from "../../store/ducks/master/selectors";
import { User } from "../../store/ducks/user/contracts/state";
import moment from "moment";
import { Appointment } from "../../store/ducks/events/contracts/state";
import { selectAppointmentsItems } from "../../store/ducks/events/selectors";
import { fetchAddAppointment } from "../../store/ducks/events/actionCreators";

const EventCalendar: FC = () => {
	const dispatch = useDispatch();

	const initialState = {
		selectedValue: new Date(),
	};

	const [state, setState] = useState(initialState);
	const [modalVisible, setModalVisible] = useState(false);
	const [confirmAppoint, setConfirmAppoint] = useState(false);
	
  const master: User | string | undefined = useSelector(selectMasterItems);
	const events: Appointment[] = useSelector(selectAppointmentsItems);

		
		const eventState = new Date(state.selectedValue);

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
		console.log(addAppointmentDate);
		setState({
			selectedValue: addAppointmentDate,
		});
		setConfirmAppoint(!confirmAppoint);
	}

	console.log(state)
	const selectedHour = new Date(state.selectedValue).getHours();

	const backToTime = () => {
		setConfirmAppoint(!confirmAppoint)
	}

	const addAppointment = () => {
		dispatch(fetchAddAppointment({
			appointmentDate: state.selectedValue,
			toMaster: master?._id,
		}));
		addNewEvent();
	}

	console.log(master)

	return (
		<>
			<Alert
						message={`Выбранная дата: ${selectedFullDate}`}
			/>
			<Calendar	onSelect={onSelect}/>
			<Modal
				title={confirmAppoint && `Дата посещения: ${selectedFullDate} к мастеру ${master?.username}`}
				visible={modalVisible}
				footer={null}
				onCancel={() => setModalVisible(false)}
      >
				{confirmAppoint 
				? 
				<EventForm
						arrEvents={arrEvents}
						addHour={addHour}
				/>
				: 
				<Card className="modalCard">
					<p>Дата Вашего посещения: {selectedFullDate}</p>
					<p>Время Вашего посещения: {selectedHour}:00</p>
					<p>К мастеру: {master?.username}</p>
					<Button onClick={addAppointment}>Записаться</Button>
					<Button onClick={backToTime}>Поменять время</Button>				
				</Card>}
      </Modal>
		</>
	);
};

export default EventCalendar;
