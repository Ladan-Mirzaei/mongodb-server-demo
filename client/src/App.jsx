import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState({});
  const API_LINK = import.meta.env.VITE_API_LINK;

  async function fetchUsers() {
    const response = await fetch(`${API_LINK}/users`);
    if (!response.ok) {
      console.warn("Response is not OK!");
    }
    const data = await response.json();
    console.log(data);
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  async function handleUserOnClick() {
    const response = await fetch(`${API_LINK}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: inputValue.name }),
    });
    if (!response.ok) {
      console.warn("Response is not OK!");
    }
    fetchUsers();
    console.debug("Good!");
  }
  //   useEffect(() => {
  //     fetchUsers();
  //     if (name && age) {
  //       handleOnSubmit(name, age);
  //     }
  //   }, [name, age]);
  async function handleDeleteOnClick() {
    const response = await fetch(`${API_LINK}/users`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
    if (!response.ok) {
      console.warn("Response is not OK!");
    }
    fetchUsers();
    console.debug("Good!");
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    handleUserOnClick();
  };
  return (
    <div>
      <div className="login">
        <form onSubmit={handleSubmit} className="login-form">
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              value={inputValue.name}
              onChange={(e) =>
                setInputValue({ ...inputValue, name: e.target.value })
              }
            />
          </div>
          <div className="button-row">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
      {/* <button onClick={handleUserOnClick}>add user</button> */}
      <div>
        {users.map(({ _id, name }) => (
          <div key={_id}>
            {name}
            <button onClick={() => handleDeleteOnClick(_id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
