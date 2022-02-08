import React, { FC, useState } from "react";
import { Calendar, Badge, Alert, Modal } from "antd";

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

	function getListData(value: any) {
		const date = 19020;
    const now = value.unix();
    const nowDate = Math.floor(now/60/60/24);
		console.log(nowDate)                           //...19063
		let listData;
		listData = events.forEach((item) => (
			console.log({type: item.appointmentDate, content: item.appointmentTime})
		));

		console.log(listData)

		switch (nowDate) {
			case date:
				listData = events.map((event: any) => (
					{type: "success", content: event.appointmentTime}
				));
				break;
			default:
		}
		return listData || [];
	}

	function dateCellRender(value: any) {
		const listData = getListData(value);
		console.log(listData)
		return (
			<ul className="events">
				{listData.map((item, index) => (
					<li key={index}>
						<Badge status={"success"} text={item.content} />
					</li>
				))}
			</ul>
		);
	}

	function getMonthData(value: any) {
		if (value.month() === 8) {
			return 1394;
		}
	}

	function monthCellRender(value: any) {
		const num = getMonthData(value);
		return num ? (
			<div className="notes-month">
				<section>{num}</section>
				<span>Backlog number</span>
			</div>
		) : null;
	}

	return (
		<>
			<Alert
						message={`You selected date: ${state.selectedValue}`}
			/>
			<Calendar
				dateCellRender={dateCellRender}
				monthCellRender={monthCellRender}
				onSelect={onSelect}
			/>
			<Modal
				title={`Дата посещения: ${state.selectedValue}`}
				visible={modalVisible}
				footer={null}
				onCancel={() => setModalVisible(false)}
      >
				<EventForm
						masters={masters}
						submit={addNewEvent}
				/>
      </Modal>
		</>
	);
};

export default EventCalendar;
