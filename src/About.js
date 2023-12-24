import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <>
      <main>
        <h1>About Us Page</h1>
        <h2>This is React Series</h2>
        <User
          name="Syed Mohd Azam (function)"
          location="Aligarh (function)"
          contact="smazamamu@gmail.com (function)"
        />
        <UserClass
          name="Syed Mohd Azam (Class)"
          location="Dehradun (Class) "
          contact="smazamamu@gmail.com (Class)"
        />
      </main>
    </>
  );
};
export default About;
