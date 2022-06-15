import { useState, useEffect } from "react";
import "./App.scss";
import CardContainer from "./components/CardContainer/CardContainer";
import RadioButtons from "./components/RadioButtons/RadioButtons";
import RangeInput from "./components/RangeInput/RangeInput";

const App = () => {
  const [users, setUsers] = useState([]);
  const [numberOfUsers, setNumberOfUsers] = useState(7);
  const [userGender, setUserGender] = useState("all");

  const getUsers = async (userNumber, gender) => {
    let url = "https://randomuser.me/api";
    if (userNumber) {
      url += `?results=${userNumber}&gender=${gender}`;
    }
    const res = await fetch(url);
    const data = await res.json();
    setUsers(data.results);
  };

  // [] APP IS LOADED -> MOUNTING
  // [DEPENDENCY] -> WHEN YOU WANT THE FUNCTION TO RUN

  useEffect(() => {
    getUsers(numberOfUsers, userGender);
  }, [numberOfUsers, userGender]);

  const handleRangeChange = (e) => {
    console.log(e);
    setNumberOfUsers(e.target.value);
  };

  const handleGender = (e) => {
    setUserGender(e.target.value);
  };

  ////////////////////////////////////////

  return (
    <div className="app">
      <h1>Random User Generator</h1>
      <RangeInput
        label={"Number of users : " + numberOfUsers}
        id="user-range"
        value={numberOfUsers}
        onChange={handleRangeChange}
      />

      <RadioButtons
        onChange={handleGender}
        selected={userGender}
        options={["all", "male", "female"]}
        // label={label}
      />
      <CardContainer cards={users} />
    </div>
  );
};

export default App;

// onChange, selected, options, label
