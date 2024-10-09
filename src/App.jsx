import "./App.css";
import Profile from "./Components/Profile";
import profilesData from "../profiles.json/";
import Section from "./components/Section";

function App() {
  console.log("profilesData:", profilesData);

  return (
    <div>
      <h1>Hello world</h1>

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
