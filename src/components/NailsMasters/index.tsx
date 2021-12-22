import React from "react";
import { useSelector } from "react-redux";
import { selectIsTweetsLoading, selectTweetsItems } from "../../store/ducks/events/selectors";
import NailMaster from "../NailMaster";

import "./NailsMasters.css";

const masters = useSelector(selectTweetsItems);
const IsLoading = useSelector(selectIsTweetsLoading);

const NailsMasters: React.FC = () => {
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
