import React from "react";
import { Layout, Row } from "antd";
import axios from "axios";

const Home: React.FC = () => {
	const handleSubmit = (e:any)=>{
		e.preventDefault();
		axios.get('./users.json')
		.then((res)=>{
		  console.log(res.data);
		}).catch((err)=>{
		  console.log(err);
		})
	}
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
					<button onClick={handleSubmit}>Click</button>
				</div>
			</Row>
		</Layout.Content>
	);
};

export default Home;
