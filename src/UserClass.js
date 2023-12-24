import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      countOne: 0,
    };
  }
  render() {
    const { name, location, contact } = this.props;
    const { countOne } = this.state;
    return (
      <main className="border-2 border-black m-2 p-2 rounded-md">
        <h1>Count One: {countOne}</h1>
        <button
          onClick={() => {
            this.setState({
              countOne: this.state.countOne + 1,
            });
          }}
          className="bg-yellow-300 text-black border-black border-0 px-2 py-1 rounded-md"
        >
          Count Increase
        </button>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:{contact}</h4>
      </main>
    );
  }
}
export default UserClass;
