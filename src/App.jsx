import React from 'react';
import CSSBaseline from '@mui/material/CSSBaseline';
import './App.css'
import TodoList from './TodoList';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <CSSBaseline /> 
      <Navbar/>
      <TodoList />
    </>
  )
}

export default App
