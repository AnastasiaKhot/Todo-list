import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { deleteTodo, editTodo } from '../../redux/slices/todoslice';
import type { TodoType } from '../../types/TodoTypes';

type OneTodoProps = {
  todo: TodoType;
  ind: number;
};

export default function OneTodo({ todo, ind }: OneTodoProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [input, setInput] = useState<TodoType>({
    id: todo.id,
    title: todo.title,
    status: todo.status,
  });

  const [show, setShow] = useState(false);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const deleteHandler = (): void => {
    dispatch(deleteTodo(todo.id));
  };

  const saveHandler = (): void => {
    dispatch(editTodo(input));
    setShow(false);
  };

  const editCheckboxHandler = (): void => {
    setInput((prev) => ({ ...prev, status: !prev.status }));
    dispatch(
      editTodo({
        ...input,
        status: !input.status,
      }),
    );
  };

  return (
    <div className="bg-white p-4 mb-3 rounded shadow flex flex-col">
      <div className="flex items-center justify-between">
        <div className="w-3/5 ">
          <h5 className={todo.status ? 'line-through mr-2' : 'mr-2'}>
            {ind + 1}. {todo.title}
          </h5>
        </div>
        <div className="mr-2 flex items-center">
          <input
            id={`${todo.id}`}
            className="mr-2"
            name="status"
            type="checkbox"
            checked={todo.status}
            onChange={editCheckboxHandler}
          />
          <label htmlFor={`${todo.id}`}>Статус</label>
        </div>
        <div className="flex items-center justify-end mt-2">
          <button
            type="button"
            className="mr-2 py-1 px-3 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setShow((prev) => !prev)}
          >
            Редактировать
          </button>
          <button
            type="button"
            className="py-1 px-3 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={deleteHandler}
          >
            Удалить
          </button>
        </div>
      </div>
      {show && (
        <div className="flex flex-col mt-2">
          <input
            className="mb-2 py-1 px-3 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            name="title"
            placeholder="title"
            value={input.title}
            onChange={changeHandler}
          />
          <button
            type="button"
            className="py-1 px-3 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={saveHandler}
          >
            Сохранить
          </button>
        </div>
      )}
    </div>
  );
}
