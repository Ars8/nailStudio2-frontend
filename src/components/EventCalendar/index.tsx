import React, { FC } from "react";
import { Calendar, Badge } from "antd";

import "./EventCalendar.css";
import { Appointment } from "../../store/ducks/events/contracts/state";

interface EventCalendarProps {
	events: Appointment[];
}

const EventCalendar: FC<EventCalendarProps> = ({ events }) => {

	console.log(events)

  /* const now = events[1]?.appointmentDate; */
/* 	let dateA = events.forEach(function(item) {
			const date = Math.floor((Date.parse(item.appointmentDate))/1000/60/60/24);
			return date;
		});
		console.log(dateA) */
		  

	function getListData(value: any) {
		/* const date = 19020; */
    const now = value.unix();
    const nowDate = Math.floor(now/60/60/24);
		console.log(nowDate)                           //...19063
		let listData;
		listData = events.forEach((item) => (
			console.log({type: item.appointmentDate, content: item.appointmentTime})
		));

		console.log(listData)




		/* switch (nowDate) {
			case 19020:
				listData = events.map((event: any) => (
					{type: "success", content: event.appointmentTime}
				));
				break;
			case 19019:
			listData = events.map((event: any) => (
				{type: "success", content: event.appointmentTime}
			));
			break;
			default:
		} */
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
		<Calendar
			dateCellRender={dateCellRender}
			monthCellRender={monthCellRender}
		/>
	);
};

export default EventCalendar;
