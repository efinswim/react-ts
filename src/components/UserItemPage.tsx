import axios from 'axios';
import React, { FC } from 'react'
import { IUser } from '../types/types';
import { useParams, useHistory } from 'react-router-dom';

interface UserItemPageParams {
  id: string
}

const UserItemPage: FC = () => {
  const [user, setUser] = React.useState<IUser | null>(null);
  const params = useParams<UserItemPageParams>()
  const history = useHistory()

  React.useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
      setUser(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <button onClick={() => history.push('/users')}>Back</button>
      <h1>Страница пользователя {user?.name} его почта {user?.email}</h1>
      <p>Его адрес {user?.address.city} {user?.address.street}</p>
    </div>
  )
}

export default UserItemPage