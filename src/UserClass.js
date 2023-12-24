import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      countOne: 0,
      countTwo: 1,
    };
  }
  render() {
    const { name, location, contact } = this.props;
    const { countOne, countTwo } = this.state;
    return (
      <main className="border-2 border-black m-2 p-2 rounded-md">
        <h1>Count One: {countOne}</h1>
        <h1>Count Two: {countTwo}</h1>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:{contact}</h4>
      </main>
    );
  }
}
export default UserClass;
