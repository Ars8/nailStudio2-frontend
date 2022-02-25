import React, { FC, useState } from "react";
import { Calendar, Alert, Modal, Card, Button } from "antd";

import "./EventCalendar.css";
import EventForm from "../EventForm";
import { useDispatch, useSelector } from "react-redux";
import { selectMasterItems } from "../../store/ducks/master/selectors";
import { User } from "../../store/ducks/user/contracts/state";
import moment from "moment";
import { Appointment } from "../../store/ducks/events/contracts/state";
import { selectAppointmentsItems, selectIsAppointmentsLoaded } from "../../store/ducks/events/selectors";
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
	const isLoaded: boolean = useSelector(selectIsAppointmentsLoaded);

	console.log(isLoaded)
		
		const eventState = new Date(state.selectedValue);

	let arrEvents = [];

	for (let i = 0; i < events.length; i++) {
		if(new Date(events[i].appointmentDate).toDateString() === eventState.toDateString()) {
			arrEvents.push(new Date(events[i].appointmentDate).getHours())
		}
	}

	const addNewEvent = () => {
		setModalVisible(!modalVisible);
	}

	const selectDay = () => {
			setModalVisible(!modalVisible)
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
		setState({
			selectedValue: addAppointmentDate,
		});
		setConfirmAppoint(!confirmAppoint);
	}
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

	return (
		<>
			<Alert
						message={`Выбранная дата: ${selectedFullDate}`}
			/>
			<Calendar	onSelect={onSelect}/>
			<Modal
				title={isLoaded && `Дата посещения: ${selectedFullDate} к мастеру ${master?.username}`}
				visible={modalVisible}
				footer={null}
				onCancel={() => {
					setModalVisible(!modalVisible);
					setConfirmAppoint(!confirmAppoint);
				}}
      >
				{isLoaded && !confirmAppoint &&
				<EventForm
						arrEvents={arrEvents}
						addHour={addHour}
				/>}
				{confirmAppoint && 
				<Card className="modalCard">
					<p>Дата Вашего посещения: {selectedFullDate}</p>
					<p>Время Вашего посещения: {selectedHour}:00</p>
					<p>К мастеру: {master?.username}</p>
					<Button onClick={addAppointment}>Записаться</Button>
					<Button className="modalCard__button" onClick={backToTime}>Поменять время</Button>				
				</Card>}
      </Modal>
		</>
	);
};

export default EventCalendar;
