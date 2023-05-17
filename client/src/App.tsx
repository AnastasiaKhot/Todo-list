import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import TodoPage from './components/TodoPage';

function App(): JSX.Element {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<TodoPage />} />
      </Routes>
    </>
  );
}

export default App;
