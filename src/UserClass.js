import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const { name, location, contact } = this.props;
    return (
      <main>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:{contact}</h4>
      </main>
    );
  }
}
export default UserClass;
