import React, { FC } from "react";
import { useDispatch } from 'react-redux';
import { Form, Input, Button } from "antd";
import { rules } from "../utils/rules";
import { LoginModalProps } from "./LoginForm";
import { fetchSignUp } from "../store/ducks/user/actionCreators";

export interface RegisterFormProps {
  fullname: string;
  username: string;
  email: string;
  password: string;
  password2: string;
}

const RegisterForm: FC<LoginModalProps> = () => {
	const dispatch = useDispatch()

  const onSubmit = async (data: RegisterFormProps) => {
    dispatch(fetchSignUp(data));
  };
  
	return (
		<Form
      onFinish={onSubmit}
    >
			<Form.Item
				label="Email"
				name="email"
				rules={[rules.required("Please input your email!")]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Username"
				name="username"
				rules={[rules.required("Please input your username!")]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Fullname"
				name="fullname"
				rules={[rules.required("Please input your fullname!")]}
			>
				<Input />
			</Form.Item>
      <Form.Item
				label="Password"
				name="password"
				rules={[rules.required("Please input your password!")]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Password2"
				name="password2"
				rules={[rules.required("Please input your password!")]}
			>
				<Input />
			</Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
		</Form>
	);
};

export default RegisterForm;
