import React from "react";
import { Card, Avatar } from "antd";
import Gallary from "../Gallary";

import "./NailsMasters.css";

const { Meta } = Card;

const NailsMasters: React.FC = () => {
	return (
		<div className="container">
			<div className="content__items">
				<Card style={{ width: 250, margin: "0 auto" }} cover={<Gallary />}>
					<Meta
						avatar={
							<Avatar src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80" />
						}
						title="Анастасия Петрова"
						description="This is the description"
					/>
				</Card>
				<Card style={{ width: 250, margin: "0 auto" }} cover={<Gallary />}>
					<Meta
						avatar={
							<Avatar src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80" />
						}
						title="Анастасия Петрова"
						description="This is the description"
					/>
				</Card>
				<Card style={{ width: 250, margin: "0 auto" }} cover={<Gallary />}>
					<Meta
						avatar={
							<Avatar src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80" />
						}
						title="Анастасия Петрова"
						description="This is the description"
					/>
				</Card>
				<Card style={{ width: 250, margin: "0 auto" }} cover={<Gallary />}>
					<Meta
						avatar={
							<Avatar src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80" />
						}
						title="Анастасия Петрова"
						description="This is the description"
					/>
				</Card>
				<Card style={{ width: 250, margin: "0 auto" }} cover={<Gallary />}>
					<Meta
						avatar={
							<Avatar src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80" />
						}
						title="Анастасия Петрова"
						description="This is the description"
					/>
				</Card>
				<Card style={{ width: 250, margin: "0 auto" }} cover={<Gallary />}>
					<Meta
						avatar={
							<Avatar src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80" />
						}
						title="Анастасия Петрова"
						description="This is the description"
					/>
				</Card>
				<Card style={{ width: 250, margin: "0 auto" }} cover={<Gallary />}>
					<Meta
						avatar={
							<Avatar src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80" />
						}
						title="Анастасия Петрова"
						description="This is the description"
					/>
				</Card>
				<Card style={{ width: 250, margin: "0 auto" }} cover={<Gallary />}>
					<Meta
						avatar={
							<Avatar src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80" />
						}
						title="Анастасия Петрова"
						description="This is the description"
					/>
				</Card>
			</div>
		</div>
	);
};

export default NailsMasters;
