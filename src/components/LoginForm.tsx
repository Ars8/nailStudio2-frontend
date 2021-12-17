import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";
import { rules } from "../utils/rules";
import { fetchLogIn } from "../store/ducks/user/actionCreators";
import { useHistory } from "react-router-dom";

export interface LoginFormProps {
	email: string;
  password: string;
}

const LoginForm: FC = () => {
	const [form] = Form.useForm();
	const dispatch = useDispatch();
	const history = useHistory();

  const onSubmit = async (data: LoginFormProps) => {		
    dispatch(fetchLogIn(data));
		form.resetFields();
		history.push('/event')
  }
  
	return (
		<Form form={form} onFinish={onSubmit} >
			<Form.Item
				label="Email"
				name="email"
				rules={[rules.required("Please input your email!")]}
			>
				<Input allowClear={true} />
			</Form.Item>
      <Form.Item
				label="Password"
				name="password"
				rules={[rules.required("Please input your password!")]}
			>
				<Input type={"password"} allowClear={true} />
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
