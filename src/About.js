import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <>
      <main className="p-4">
        <h1 className="p-2">About Us Page</h1>
        <h2 className="p-2">This is React Series</h2>
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
