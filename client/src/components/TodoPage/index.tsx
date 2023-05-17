import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import OneTodo from './OneTodo';
import TodoForm from './TodoForm';

export default function TodoPage(): JSX.Element {
  const todos = useAppSelector((store) => store.todos);

  return (
    <div className="mx-10 my-6">
      <TodoForm />
      <div className="bg-white divide-y divide-gray-200">
        {todos.map((todo, ind) => (
          <OneTodo key={todo.id} todo={todo} ind={ind} />
        ))}
      </div>
    </div>
  );
}
