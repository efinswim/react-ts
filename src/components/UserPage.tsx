import axios from 'axios';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { IUser } from '../types/types';
import List from './List';
import UserItem from './UserItem';

const UserPage: FC = () => {
  const [users, setUsers] = React.useState<IUser[]>([]);
  const history = useHistory()

  React.useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return <div>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    <List items={users} renderItem={(user: IUser) => <UserItem onClick={(user) => history.push('/users/' + user.id)} user={user} key={user.id} />} />
  </div>;
};

export default UserPage;
