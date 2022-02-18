import React, { FC } from "react";
import { Button, Form } from "antd";
import { User } from "../../store/ducks/user/contracts/state";
import { useSelector } from "react-redux";
import { selectMasterItems } from "../../store/ducks/master/selectors";
import "./EventForm.css";

interface EventFormProps {
	arrEvents: number[];
	addHour: (hour: number) => void;
}

const EventForm: FC<EventFormProps> = ({ arrEvents, addHour }) => {
	const master: User | undefined = useSelector(selectMasterItems);

	const workingHours = master?.workingHours;	

	return (
		<Form>
			{workingHours?.map((item) => (
				<Button
					key={item}
          onClick={() => addHour(item)}
					disabled={arrEvents.includes(item)}
					type="primary"
					className="hourItem"
					block
				>
					{item}:00
				</Button>
			))}
		</Form>
	);
};

export default EventForm;
