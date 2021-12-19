import React from "react";
import { Card, Avatar, Row, Col } from "antd";
import Gallary from "./Gallary/Gallary";

const { Meta } = Card;

const NailsMasters: React.FC = () => {
	return (
		<>
			<Row align="middle" justify="end" gutter={[24, 24]}>
				<Col xs={{ span: 8}}>
					<Card style={{ width: 300 }} cover={<Gallary />}>
						<Meta
							avatar={<Avatar src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80" />}
							title="Анастасия Петрова"
							description="This is the description" />
					</Card>
				</Col>
				<Col xs={{ span: 8}}>
					<Card style={{ width: 300 }} cover={<Gallary />}>
						<Meta
							avatar={<Avatar src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80" />}
							title="Анастасия Петрова"
							description="This is the description" />
					</Card>
				</Col>
				<Col xs={{ span: 8}}>
					<Card style={{ width: 300 }} cover={<Gallary />}>
						<Meta
							avatar={<Avatar src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80" />}
							title="Анастасия Петрова"
							description="This is the description" />
					</Card>
				</Col>
			</Row >
		</>
	);
};

export default NailsMasters;
