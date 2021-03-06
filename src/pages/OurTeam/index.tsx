import React from "react";
import { useDispatch, useSelector } from "react-redux";
import OurTeamCard from "../../components/OurTeamCard";
import { fetchUsers } from "../../store/ducks/users/actionCreators";
import { selectUsersItems } from "../../store/ducks/users/selectors";

import "./ourTeam.css";

const OurTeam: React.FC = () => {
  const dispatch = useDispatch();
  const masters = useSelector(selectUsersItems);
  console.log(masters);

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container">
      {masters.map((master) => (
        <div className="ourteam__card">
          <OurTeamCard
            key={master._id}
            fullname={master.fullname}
            email={master.email}
            id={master._id}
            img={master.img}
            position={master.position}
          />
        </div>
      ))}
    </div>
  );
};

export default OurTeam;
