import React from "react";
import { Layout, Row, Button, Card, Space } from "antd";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const Login: React.FC = () => {
	const [visibleModal, setVisibleModal] = React.useState<"logIn" | "signUp">();

	const handleClickOpenLogIn = (): void => {
		setVisibleModal("logIn");
	};

	const handleClickOpenSignUp = (): void => {
		setVisibleModal("signUp");
	};

	return (
		<Layout>
			<Row justify="center" align="middle" className="h100">
					{ visibleModal === undefined ?
						<Space direction="horizontal" style={{ alignItems: "center"}}>
							<Button onClick={handleClickOpenLogIn} type="primary">
							Войти
						</Button>
						<Button onClick={handleClickOpenSignUp} type="primary">
							Зарегистрироваться
						</Button>
						</Space>
						:
						visibleModal === "logIn" ?
						<Space direction="vertical" style={{ alignItems: "center"}}>
							<Button type="primary" onClick={handleClickOpenSignUp}>
								Зарегистрироваться
							</Button>
							<Card title="LogIn">							
								<LoginForm />
							</Card>
						</Space>
						:
						<Space direction="vertical" style={{ alignItems: "center"}}>
							<Button type="primary" onClick={handleClickOpenLogIn}>
									Войти
							</Button>
							<Card title="SignUp">
								<RegisterForm />
							</Card>
						</Space>
					}
			</Row>
		</Layout>
	);
};

export default Login;
