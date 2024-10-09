// {
//     "name": "Іван Петров",
//     "phone": "+380501234567",
//     "email": "ivan.petrov@example.com",
//     "status": "online",
//     "avatar": "https://example.com/avatars/ivan.jpg",
//     "hasPhisicalAddress": false
//   }

const Profile = (props) => {
  const { name, phone, email, status, hasPhisicalAddress = false } = props;
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Status: {status}</p>
      <p>Has phisical address: {hasPhisicalAddress ? "Yes" : "No"}</p>
    </div>
  );
};

export default Profile;
