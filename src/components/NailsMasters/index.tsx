import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsTweetsLoading, selectTweetsItems } from "../../store/ducks/events/selectors";
import { fetchTweets } from "../../store/ducks/events/actionCreators";
import NailMaster from "../NailMaster";

import "./NailsMasters.css";

const NailsMasters: React.FC = () => {
	const dispatch = useDispatch();
	const masters = useSelector(selectTweetsItems);
	const IsLoading = useSelector(selectIsTweetsLoading);

	React.useEffect(() => {
		dispatch(fetchTweets());
	}, [dispatch]);
	

	return (
		<div className="container">
			<div className="content__items">
				{IsLoading ? (
          <div>
            Loading...
          </div>
        ) : (
					masters.map((master) => (
						<NailMaster key={master._id} images={master.images} {master}/>
					))
				)}
			</div>
		</div>
	);
};

export default NailsMasters;
