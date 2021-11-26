import React, { FC } from "react";
import { Form, Input, Button } from "antd";
import { rules } from "../utils/rules";
import { LoginModalProps } from "./LoginForm";

const RegisterForm: FC<LoginModalProps> = () => {

  const submit = () => {
    console.log('submit')
  }
  
	return (
		<Form
      onFinish={submit}
    >
			<Form.Item
				label="Username"
				name="username"
				rules={[rules.required("Please input your username!")]}
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
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
		</Form>
	);
};

export default RegisterForm;
