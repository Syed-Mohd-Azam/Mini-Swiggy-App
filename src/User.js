import { useState } from "react";
const User = ({ name, location, contact }) => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(1);
  return (
    <>
      <main className="border-black border-2 rounded-md m-1 p-4">
        <h1>Count One:{countOne}</h1>
        <h1>Count Two:{countTwo}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </main>
    </>
  );
};
export default User;
