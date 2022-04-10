import React from "react";
import { Layout, Row } from "antd";

const Home: React.FC = () => {
	
	return (
		<Layout.Content
			className="site-layout"
			style={{ padding: "0 50px", marginTop: 64 }}
		>
			<Row justify="center" align="middle" className="h100">
				<div
					className="site-layout-background"
					style={{ padding: 24, minHeight: 380 }}
				>
					Content
				</div>
			</Row>
		</Layout.Content>
	);
};

export default Home;
