import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from "antd";
import { rules } from "../utils/rules";
import { fetchSignUp } from "../store/ducks/user/actionCreators";
import { selectUserStatus } from '../store/ducks/user/selectors';
import { LoadingStatus } from '../store/types';

export interface RegisterFormProps {
  fullname: string;
  username: string;
  email: string;
  password: string;
  password2: string;
}

const RegisterForm: React.FC = () => {
	const dispatch = useDispatch();
	const openNotificationRef = React.useRef<(text: string, type: any) => void>(() => {});
  const loadingStatus = useSelector(selectUserStatus);


  const onSubmit = async (data: RegisterFormProps) => {
		console.log('Registry')
    dispatch(fetchSignUp(data));
  };

	React.useEffect(() => {
    if (loadingStatus === LoadingStatus.SUCCESS) {
      openNotificationRef.current('Регистрация успешна!', 'success');
    } else if (loadingStatus === LoadingStatus.ERROR) {
      openNotificationRef.current('Ошибка при регистрации!', 'error');
    }
  }, [loadingStatus]);
  
	return (
		<Form
      onFinish={onSubmit}
    >
			<Form.Item
				label="Fullname"
				name="fullname"
				rules={[rules.required("Please input your fullname!")]}
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
				label="Email"
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
			<Form.Item
				label="Password2"
				name="password2"
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

export default RegisterForm;
