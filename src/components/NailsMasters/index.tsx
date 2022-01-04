import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/ducks/users/actionCreators";
import { selectUsersItems } from "../../store/ducks/users/selectors";

import "./NailsMasters.css";

const NailsMasters: React.FC = () => {
	const dispatch = useDispatch();
	const masters = useSelector(selectUsersItems);

	React.useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	console.log(masters);
	

	return (
		<div className="container">
			<div className="content__items">
				{
					masters.map(master => (
						<h1 key={master._id}>{master.fullname}</h1>
					))
				}
			</div>
		</div>
	);
};

export default NailsMasters;
