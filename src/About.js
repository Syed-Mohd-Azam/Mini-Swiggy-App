import UserClass from "./UserClass";
import React from "react";
import UserContext from "./constants/UserContext";
class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("About Constructor ");
  }
  componentDidMount() {
    // console.log("About Component Did Mount");
  }
  render() {
    // console.log("About Render");
    return (
      <>
        <main className="p-4">
          <div className="p-4">
            LoggedInUser :
            <UserContext.Consumer>
              {({ loggedInUser }) => (
                <span className="font-bold "> {loggedInUser} </span>
              )}
            </UserContext.Consumer>
          </div>
          <UserClass name="First (Class)" location="India " />
          {/* <UserClass name="Second (Class)" location="United States" />
          <UserClass name="Third (Class)" location="Japan" /> */}
        </main>
      </>
    );
  }
}

export default About;

// Life Cycle of Class Component
