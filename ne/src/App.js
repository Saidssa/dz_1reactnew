import React from "react";

// function App() {
//   return (
//     <div className="App">
//       <h1>NE HEllO WORLD!!!</h1>
//     </div>
//   );
// }

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { second: 0 };
  }

  tick() {
    this.setState((state) => ({
      seconds: state.second + 1,
    }));
  }

  componentDidMount() {
    this.interval(() => this.tick(), 18);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return <h1>Second: {this.state.second}</h1>;
  }
}

// export default App;

export default Timer;
