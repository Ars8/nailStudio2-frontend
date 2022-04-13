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
  const handleGoTo = (path: string): void => {
    history.push(`${path}`);
  }
  const { Header } = Layout;
	return (
		<Layout>
			<Header>
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
							<Menu theme="dark" mode="horizontal" selectable={true} forceSubMenuRender={false}>
								<Menu.Item onClick={() => handleGoTo('/aboutus')}  key="1">
									О нас
								</Menu.Item>
								<Menu.Item onClick={() => handleGoTo('/ourteam')}  key="2">
									Наша команда
								</Menu.Item>
								<Menu.Item onClick={() => handleGoTo('/home')}  key="3">
									Отзывы
								</Menu.Item>
								<Menu.Item onClick={() => handleGoTo('/home')}  key="4">
									Вакансии
								</Menu.Item>
								<Menu.Item onClick={() => handleGoTo('/home')}  key="5">
									Цены
								</Menu.Item>
								<Menu.Item onClick={() => handleGoTo('/home')}  key="6">
									Акции
								</Menu.Item>
								<Menu.Item onClick={() => handleGoTo('/nailsmasters')} key="7">
									Запись
								</Menu.Item>
								<Menu.Item onClick={() => handleGoTo('/portfolio')} key="8">
									Работы мастеров
								</Menu.Item>
								<Menu.Item onClick={() => handleGoTo('/home')}  key="9">
									Контакты
								</Menu.Item>
							</Menu>
						</>
					)}
				</Row>
			</Header>
		</Layout>
	);
};

export default NavBar;
