import { GITHUB_API } from "./constants/constants";
// import { CORS_PROXY_URL } from "./constants/constants";
import React from "react";
import Image from "./Image";
class UserClass extends React.Component {
  constructor(props) {
    // console.log(props.name + " Constructor ");
    super(props);
    // console.log(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
        avatar_url: null,
      },
    };
  }
  async componentDidMount() {
    // console.log(this.props.name + " Component Did Mount");
    const response = await fetch(GITHUB_API);
    const json = await response.json();
    console.log(json);
    this.setState({ userInfo: json });
  }
  render() {
    // console.log(this.props.name + " Render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <main className="border-2 border-black m-2 p-2 rounded-md">
        {avatar_url === null ? (
          <Image />
        ) : (
          <img
            src={avatar_url}
            alt="Github Profile Photo"
            className="w-28 h-28"
          />
        )}
        <h2>
          Name: <b> {name}</b>{" "}
        </h2>
        <h3>
          Location: <b> {location}</b>
        </h3>
        <h4>
          Contact: <b> smazamamu@gmail.com</b>
        </h4>
      </main>
    );
  }
}
export default UserClass;
