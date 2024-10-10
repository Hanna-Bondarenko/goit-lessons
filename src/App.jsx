import "./App.css";
import { FaApple } from "react-icons/fa";
import Profile from "./components/profile/Profile";
import Section from "./components/section/Section";
import Button from "./components/button/Button";
import profilesData from "../profiles.json/";

function App() {
  console.log("profilesData:", profilesData);

  return (
    <div>
      <h1>Hello world</h1>
      <div>
        <FaApple size={48} color="red" />
      </div>

      <Button>Click me</Button>
      <Button success>Click me</Button>
      <Button outline>Click me</Button>

      <Section title="Test">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          unde.
        </p>
        <button type="button">Click to increase your money</button>
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
