import React from "react";
import { Carousel } from "antd";

import "./Gallary.css";

const Gallary = () => {
	return (
		<Carousel effect="fade" arrows={true} >
			<div>
				<h3 className="contentStyle">
					<img
						alt="nailsportfolio"
						src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
					/>
				</h3>
			</div>
			<div>
				<h3 className="contentStyle">
					<img
						alt="nailsportfolio"
						src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
					/>
				</h3>
			</div>
			<div>
				<h3 className="contentStyle">
					<img
						alt="nailsportfolio"
						src="https://images.unsplash.com/photo-1494919138911-02d403edd88d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
					/>
				</h3>
			</div>
			<div>
				<h3 className="contentStyle">
					<img
						alt="nailsportfolio"
						src="https://images.unsplash.com/photo-1585731601359-b5edfffbf629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
					/>
				</h3>
			</div>
		</Carousel>
	);
};

export default Gallary;
