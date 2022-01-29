import React, { FC } from "react";
import { Calendar, Badge } from "antd";

import "./EventCalendar.css";
import { Appointment } from "../../store/ducks/events/contracts/state";

interface EventCalendarProps {
	events: Appointment[];
}

const EventCalendar: FC<EventCalendarProps> = ({ events }) => {

	console.log(events)

  const now = events[1]?.appointmentDate;

  const nowP = Date.parse(now);

  const date = Math.floor(nowP/1000/60/60/24);

  

	function getListData(value: any) {
    const now = value.unix();
    const nowDate = Math.floor(now/60/60/24);
		let listData;
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
		return (
			<ul className="events">
				{listData.map((item) => (
					<li key={item.content}>
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
