import { useState } from "react";
const User = ({ name, location, contact }) => {
  const [countOne, setCountOne] = useState(0);
  return (
    <>
      <main className="border-black border-2 rounded-md m-1 p-4">
        <h1>Count One:{countOne}</h1>
        <button
          className="bg-yellow-300 text-black border-black border-0 px-2 py-1 rounded-md"
          onClick={() => setCountOne(countOne + 1)}
        >
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </main>
    </>
  );
};
export default User;
