import React, { FC } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Layout, Row, Menu } from "antd";
import { selectIsAuth, selectUserData } from '../store/ducks/user/selectors';
import { signOut } from "../store/ducks/user/actionCreators";
import { useHistory } from "react-router-dom";

const NavBar: FC = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const isAuth = useSelector(selectIsAuth);
	const userData = useSelector(selectUserData);
	const handleSignOut = () => {
    window.localStorage.removeItem('token');
    dispatch(signOut());
  };
	const handleGoAppointment = (): void => {
    history.push('/nailsmasters');
  }
	const handleGoAboutUs = (): void => {
    history.push('/home');
  }
	const handleGoPortfolio = (): void => {
    history.push('/portfolio');
  }
	return (
		<Layout.Header>
			<Row justify="end">
				{isAuth ? (
					<>
						<div style={{ color: "white" }}>{userData ? userData.username : 'User'}</div>
						<Menu theme="dark" mode="horizontal" selectable={false}>
							<Menu.Item onClick={handleSignOut} key={1}>
								Logout
							</Menu.Item>
						</Menu>
					</>
				) 
				:
				(
					<>
						<Menu theme="dark" mode="horizontal" selectable={false} forceSubMenuRender={false}>
							<Menu.Item onClick={handleGoAboutUs}  key="1">
								О нас
							</Menu.Item>
							<Menu.Item onClick={handleGoAppointment} key="2">
								Запись
							</Menu.Item>
							<Menu.Item onClick={handleGoPortfolio} key="3">
								Работы мастеров
							</Menu.Item>
						</Menu>
					</>
				
				)}
			</Row>
		</Layout.Header>
	);
};

export default NavBar;
