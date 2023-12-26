import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("About Constructor ");
  }
  componentDidMount() {
    console.log("About Component Did Mount");
  }
  render() {
    console.log("About Render");
    return (
      <>
        <main className="p-4">
          <h1 className="p-2">About Us Page</h1>
          <h2 className="p-2">This is React Series</h2>

          <UserClass name="First (Class)" location="India " />
          <UserClass name="Second (Class)" location="United States" />
        </main>
      </>
    );
  }
}

export default About;
