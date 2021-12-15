import { useState } from "react";
import "./App.css";
import React from "react";


export default function App() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [fruit, setFruit] = useState("");
  const [location, setLocation] = useState("");
  return (
    <div className="App">
      <form onSubmit={((event) => {
        event.preventDefault();
        const toSubmit = { username, email, rememberMe, fruit, location };
        console.log("submitted ");
        console.log(toSubmit);
        setUserName("");
        setRememberMe(true);
      })} style={{ display: "flex", flexDirection: "column" }} >
        <label>
          Username <input value={username}
            onChange={((event) => {
              setUserName(event.target.value);
            })} />
        </label>
        <label>
          Email
          <input
            // value={username} 
            type="email" value={email}
            onChange={((event) => {
              setEmail(event.target.value);
            })} />
        </label>
        <label>Remember Me
          <input type="checkbox" checked={rememberMe}
            onChange={((event) => {
              setRememberMe(!rememberMe);
            })} />
        </label>
        <label>Fav Fruit:- Apple
          <input type="radio" name="fav-fruit" value="apple"
            onChange={((event) => {
              setFruit(event.target.value);
            })} />Orange Juice <input type="radio"
              value="orange" name="fav-fruit"
              onChange={((event) => {
                setFruit(event.target.value);
              })} />
          Mango <input type="radio"
            value="mango" name="fav-fruit"
            onChange={((event) => {
              setFruit(event.target.value);
            })} />
        </label>
        <select onChange={((event) => {
          setLocation(event.target.value);
        })}>
          <option>-----</option>
          <option value="india">Asia</option>
          <option value="norway">Europe</option>
          <option value="Wisconsin">North America</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

