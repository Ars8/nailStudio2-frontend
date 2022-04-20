import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth, selectUserData } from "../../store/ducks/user/selectors";
import { signOut } from "../../store/ducks/user/actionCreators";
import { useHistory } from "react-router-dom";

import './navbar.css';

const NavBar: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const userData = useSelector(selectUserData);
  const handleSignOut = () => {
    window.localStorage.removeItem("token");
    dispatch(signOut());
  };
  const handleGoTo = (path: string): void => {
    history.push(`${path}`);
  };
  return (
    <div>
      {isAuth ? (
        <>
          <div style={{ color: "white" }}>
            {userData ? userData.username : "User"}
          </div>
          <div>
            <div onClick={handleSignOut} key={1}>
              Logout
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="navbar__block">
            <div className="navbar__item" onClick={() => handleGoTo("/aboutus")} key="1">
              О нас
            </div>
            <div className="navbar__item" onClick={() => handleGoTo("/ourteam")} key="2">
              Наша команда
            </div>
            <div className="navbar__item" onClick={() => handleGoTo("/review")} key="3">
              Отзывы
            </div>
            <div className="navbar__item" onClick={() => handleGoTo("/vacancy")} key="4">
              Вакансии
            </div>
            <div className="navbar__item" onClick={() => handleGoTo("/price")} key="5">
              Цены
            </div>
            <div className="navbar__item" onClick={() => handleGoTo("/sales")} key="6">
              Акции
            </div>
            <div className="navbar__item" onClick={() => handleGoTo("/nailsmasters")} key="7">
              Запись
            </div>
            <div className="navbar__item" onClick={() => handleGoTo("/portfolio")} key="8">
              Работы мастеров
            </div>
            <div className="navbar__item" onClick={() => handleGoTo("/contact")} key="9">
              Контакты
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
