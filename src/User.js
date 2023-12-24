const User = ({ name, location, contact }) => {
  return (
    <>
      <main>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </main>
    </>
  );
};
export default User;
