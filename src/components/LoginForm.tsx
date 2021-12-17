import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";
import { rules } from "../utils/rules";
import { fetchLogIn } from "../store/ducks/user/actionCreators";

export interface LoginFormProps {
	email: string;
  password: string;
}

const LoginForm: FC = () => {
	const dispatch = useDispatch();

  const onSubmit = async (data: LoginFormProps) => {
    dispatch(fetchLogIn(data))
  }
  
	return (
		<Form
      onFinish={onSubmit}
    >
			<Form.Item
				label="email"
				name="email"
				rules={[rules.required("Please input your email!")]}
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
			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
		</Form>
	);
};

export default LoginForm;
