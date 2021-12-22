import React from 'react';
import { Card, Avatar } from "antd";
import Gallary from "./Gallary";
import { User } from '../store/ducks/user/contracts/state';
import { useHistory } from 'react-router-dom';

const { Meta } = Card;

interface NailMasterProps {
  _id: string;
  images?: string[];
  user: Pick<User, '_id' | 'fullname' | 'username'>;
}

const NailMaster: React.FC<NailMasterProps> = ({_id, user, images}) => {

  const history = useHistory();

  const handleClickMaster = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    history.push(`/masters/${_id}`);
  }

  return (
    <a onClick={handleClickMaster} href={`/masters/${_id}`}>
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
    </a>
  )
}

export default NailMaster
