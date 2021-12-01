import React, { FC } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Layout, Row, Menu } from "antd";
import { useHistory } from "react-router";
import { selectIsAuth, selectUserData } from '../store/ducks/user/selectors';
import { RouteNames } from "../router";
import { signOut } from "../store/ducks/user/actionCreators";

const NavBar: FC = () => {
	const dispatch = useDispatch();
	const router = useHistory();
	const isAuth = useSelector(selectIsAuth);
	const userData = useSelector(selectUserData);
	const handleSignOut = () => {
    window.localStorage.removeItem('token');
    dispatch(signOut());
  };
	return (
		<Layout.Header>
			<Row justify="end">
				{isAuth ? (
					<>
						<div style={{ color: "white" }}>{userData ? userData.username : null}</div>
						<Menu theme="dark" mode="horizontal" selectable={false}>
							<Menu.Item onClick={handleSignOut} key={1}>
								Logout
							</Menu.Item>
						</Menu>
					</>
				) : (
					<Menu theme="dark" mode="horizontal" selectable={false}>
						<Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key={1}>
							Login
						</Menu.Item>
					</Menu>
				)}
			</Row>
		</Layout.Header>
	);
};

export default NavBar;
