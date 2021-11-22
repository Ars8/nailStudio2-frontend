import React, { FC } from "react";
import { Layout, Row, Menu } from "antd";
import { useHistory } from "react-router";
import { RouteNames } from "../router";
import { useTypedSelector } from "../hooks/useTypedSelector";

const NavBar: FC = () => {
	const router = useHistory();
	const {isAuth} = useTypedSelector(state => state.authReducer)
	return (
		<Layout.Header>
			<Row justify="end">
				{isAuth ? (
					<>
						<div style={{ color: "white" }}>Name</div>
						<Menu theme="dark" mode="horizontal" selectable={false}>
							<Menu.Item onClick={() => console.log("")} key={1}>
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
