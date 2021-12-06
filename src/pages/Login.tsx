import React, { FC, Fragment, useState } from "react";
import { Layout, Row, Button, Card } from "antd";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const Login: FC = () => {
	const [visibleModal, setVisibleModal] = useState<"logIn" | "signUp">();

	const handleClickOpenLogIn = (): void => {
		setVisibleModal("logIn");
	};

	const handleClickOpenSignUp = (): void => {
		setVisibleModal("signUp");
	};
/* 
	const handleCloseModal = (): void => {
		setVisibleModal(undefined);
	};

	const onSubmitHandler = () => {};
 */
	console.log(visibleModal);

	return (
		<Layout>
			<Row justify="center" align="middle" className="h100">
					{ visibleModal === undefined ?
						<>
							<Button onClick={handleClickOpenLogIn} type="primary">
							Войти
						</Button>
						<Button onClick={handleClickOpenSignUp} type="primary">
							Зарегистрироваться
						</Button>
						</>
						:
						visibleModal === "logIn" ?
						<Card title="LogIn">
							<LoginForm />
						</Card>
						:
						<Card title="SignUp">
							<RegisterForm />
						</Card>	
					}
			</Row>
		</Layout>
	);
};

export default Login;
