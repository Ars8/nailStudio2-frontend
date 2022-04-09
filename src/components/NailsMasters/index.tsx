import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/ducks/users/actionCreators";
import { selectUsersItems } from "../../store/ducks/users/selectors";
import NailMaster from "../NailMaster";

import "./NailsMasters.css";

const NailsMasters: React.FC = () => {
	const dispatch = useDispatch();
	const masters = useSelector(selectUsersItems);
	console.log(masters)

	React.useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	return (
		<div className="container">
				{masters.map((master) => (
					<div style={{ maxWidth: "250px", margin: "25px" }}>
						<NailMaster key={master._id} fullname={master.fullname} id={master._id}/>
					</div>
				))}
		</div>
	);
};

export default NailsMasters;
