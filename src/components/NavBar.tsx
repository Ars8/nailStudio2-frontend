import React, { FC } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Layout, Row, Menu } from "antd";
import { selectIsAuth, selectUserData } from '../store/ducks/user/selectors';
import { signOut } from "../store/ducks/user/actionCreators";

const NavBar: FC = () => {
	const dispatch = useDispatch();
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
						<div style={{ color: "white" }}>{userData ? userData.username : 'User'}</div>
						<Menu theme="dark" mode="horizontal" selectable={false}>
							<Menu.Item onClick={handleSignOut} key={1}>
								Logout
							</Menu.Item>
						</Menu>
					</>
				) : null}
			</Row>
		</Layout.Header>
	);
};

export default NavBar;
