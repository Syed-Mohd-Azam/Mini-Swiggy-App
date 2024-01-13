import { GITHUB_API } from "./constants/constants";
import LinkedIn from "./Images/LinkedIn.jpeg";
import GitHub from "./Images/Github.png";
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
      <main className=" m-6 p-10 rounded-xl bg-purple-50 w-4/5 mx-auto flex justify-between">
        <section>
          {avatar_url === null ? (
            <Image />
          ) : (
            <img
              src={avatar_url}
              alt="Github Profile Photo"
              className="w-40 h-40  rounded-t-full"
            />
          )}
        </section>
        <section>
          <h2 className="font-semibold text-lg mb-2">Name: Syed Mohd Azam</h2>
          <h3 className="text-lg font-semibold flex gap-1 mb-3">
            <span>LinkedIn : </span>
            <span>
              <a
                href="https://www.linkedin.com/in/syed-mohd-azam/"
                target="_blank"
              >
                <img src={LinkedIn} alt="LinkedIn" width="30" height="30" />
              </a>
            </span>
          </h3>
          <h3 className="font-semibold text-lg flex gap-2 mb-3">
            <span>Github : </span>
            <span>
              <a href="https://github.com/Syed-Mohd-Azam" target="_blank">
                <img src={GitHub} alt="Github" width="30" height="30" />
              </a>
            </span>
          </h3>
          <h3 className="text-lg font-semibold">Email: smazamamu@gmail.com</h3>
        </section>
      </main>
    );
  }
}
export default UserClass;
