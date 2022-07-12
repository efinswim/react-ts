import axios from 'axios';
import React, { FC } from 'react'
import { useParams } from 'react-router-dom';
import { ITodo } from '../types/types';

interface TodoItemPageParams {
  id: string
}

const TodoItemPage: FC = () => {
  const [todo, setTodo] = React.useState<ITodo | null>(null);
  const params = useParams<TodoItemPageParams>()

  React.useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<ITodo>('https://jsonplaceholder.typicode.com/todos/' + params.id);
      setTodo(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <h1>{todo?.id} это айди</h1>
      <h2>{todo?.title} это тайтл</h2>
      <h3>{todo?.userId} какой юзер</h3>
      <h4>{todo?.completed} готов ли</h4>
    </div>
  )
}

export default TodoItemPage