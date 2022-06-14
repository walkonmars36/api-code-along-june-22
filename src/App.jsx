import "./App.scss";
import { useState } from "react";

import Button from "./components/Button/Button";

import CardList from "./components/CardList/CardList";

const App = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const url = "https://randomuser.me/api/?results=500";
    const response = await fetch(url);
    const data = await response.json();

    setUsers(data.results);
    console.log(data);
  };

  return (
    <div className="app">
      <h1>Random User Generator</h1>
      <Button onClick={getUsers} label="Get Random User" />
      <CardList users={users} />
    </div>
  );
};

export default App;
