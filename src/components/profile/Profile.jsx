import styles from "./Profile.module.css";

const Profile = (props) => {
  const {
    name,
    phone,
    email,
    status,
    hasPhisicalAddress = false,
    onSayMyName,
  } = props;
  return (
    <div>
      <h2 className={styles.title}>My profile</h2>
      <h3>Name: {name}</h3>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Status: {status}</p>
      <p>Has phisical address: {hasPhisicalAddress ? "Yes" : "No"}</p>
      <button onClick={() => onSayMyName(name)}>Say my name!</button>
    </div>
  );
};

export default Profile;
