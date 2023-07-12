import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./home";

function App() {
  const [users, setUser] = useState([]);

  async function runQuotes() {
    const options = {
      method: "GET",
    };

    try {
      //  await fetch("https://jsonplaceholder.typicode.com/users")
      await fetch("https://api.quotable.io/quotes/random")
        .then((res) => res.json())
        .then((result) => setUser(result));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    runQuotes();
  }, []);

  const handleClick = () => {
    runQuotes();
  };

  console.log(users);
  return (
    <>
      {users.map((user) => (
        <Home handleClick={handleClick} quotename={user.content} />
      ))}
    </>
  );
}

export default App;
