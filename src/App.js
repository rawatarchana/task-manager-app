import './App.css';

import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { useEffect, useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState('');
  const [username, setUser] = useState('');
  const [placeholder, setPlaceholder] = useState('Enter your name');

  const addValue = (e) => {
    setValue(e.target.value);
  }

  useEffect(()=>{
    const savedTask = JSON.parse(localStorage.getItem('tasks')) || [];
    if(savedTask.length>0){
      setTasks(savedTask);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks]);

  const addTask = () => {
    const newTask = {
      id: new Date().getTime(),
      task: value,
      completed: false
    }
    if (value.length < 3) {
      alert("Enter valid task");
    } else {
      setTasks([...tasks, newTask])
      setValue('');
    }
  }

  const handleCompleteTask = (taskId) => {
    const completedTask = tasks.map((item) => item.id === taskId ? {...item, completed: true} : item);
    setTasks(completedTask);
  }

  const handleDeteteTask = (taskId) => {
    const deletedTask = tasks.filter((item) => item.id !== taskId);
    setTasks(deletedTask);
  }

  const addUser = () => {
    const characters = /^[a-zA-Z]+$/;
    if (value.length > 10) {
      setUser(value);
      setValue('');
      setPlaceholder("Enter task here");
    } else if (!characters.test(value)) {
      alert("Enter a valid name");
    } else if (value.length < 2) {
      alert("Enter a valid name");
    } else if (value.toLowerCase() === "edfrax") {
      setUser(" sir/ma'am, kindly choose a different name!");
      setValue('');
      setPlaceholder("Enter task here");
    } else {
      setUser(value);
      setValue('');
      setPlaceholder("Enter task here");
    }
  }

  useEffect(()=>{
    const savedUser = JSON.parse(localStorage.getItem('username')) || [];
    if(savedUser.length > 0){
      setUser(savedUser);
      setPlaceholder("Enter task here");
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem("username", JSON.stringify(username))
  },[username]);

  return (
    <>
      <Header
        username={username}
      />
      <Main
        tasks={tasks}
        value={value}
        username={username}
        placeholder={placeholder}
        addValue={addValue}
        addTask={addTask}
        addUser={addUser}
        handleCompleteTask={handleCompleteTask}
        handleDeteteTask={handleDeteteTask}
      />
      <Footer/>
    </>
  );
}

export default App;
