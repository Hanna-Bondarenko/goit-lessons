import { useState } from "react";
import "./App.css";
import Profile from "./components/profile/Profile";
import Section from "./components/section/Section";
import profilesData from "../profiles.json/";
import Pub from "./components/Pub";

function App() {
  const [count, setCount] = useState(0);
  const onSayMyName = (profileName) => {
    console.log("profileName:", profileName);
  };

  const onIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Hello world</h1>
      <Section title="My first Pub">
        <Pub />
      </Section>
      <Section title="Test state">
        <h3>Count: {count}</h3>
        {count > 5 && (
          <div>
            Congratulations!!! You$apos got a 30% OFF discount promo -{" "}
            <b>#1234ba</b>
          </div>
        )}
        <button onClick={onIncrement}>Increment count</button>
      </Section>

      <Section title="User list">
        {profilesData.map((profileItem) => {
          return (
            <Profile
              key={profileItem.email}
              name={profileItem.name}
              phone={profileItem.phone}
              email={profileItem.email}
              status={profileItem.status}
              hasPhisicalAddress={profileItem.hasPhisicalAddress}
              onSayMyName={onSayMyName}
            />
          );
        })}
      </Section>
      {/* <ul>
        {arrayOfNumbers.map((item) => {
          return (
            <li key={item.id}>
              <h3>{item.number}</h3>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
}

export default App;
