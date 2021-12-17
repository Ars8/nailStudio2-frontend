import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import ruRu from 'antd/lib/locale/ru_RU';
import moment from "moment";
import 'moment/locale/ru';
import App from "./App";
import { store } from "./store/store";

moment.locale('ru');

ReactDOM.render(
		<Provider store={store}>
			<BrowserRouter>
				<ConfigProvider locale={ruRu}>
					<App />		
				</ConfigProvider>
			</BrowserRouter>
		</Provider>
	,
	document.getElementById("root")
);
