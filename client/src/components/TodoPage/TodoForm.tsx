import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useAppDispatch } from '../../redux/hooks';
import { addTodo } from '../../redux/slices/todoslice';
import type { TodoType } from '../../types/TodoTypes';

export default function TodoForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const [input, setInput] = useState<TodoType>({ id: '', title: '', status: false });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addTodo({ ...input, id: nanoid() }));
    setInput((prev) => ({ ...prev, title: '' }));
  };

  return (
    <form onSubmit={submitHandler} className="mb-3 flex flex-col items-center ">
      <input
        className="mb-3 mr-10 px-4 py-2 w-3/4 block rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
        name="title"
        placeholder="запиши свою задачу..."
        value={input?.title}
        onChange={changeHandler}
      />
      <button
        className="mb-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        type="submit"
      >
        Добавить
      </button>
    </form>
  );
}
