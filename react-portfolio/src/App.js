import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "David Shonn",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Be Relentless",
        subTitle: "Projects that make a difference",
        text: "Checkout my projects...",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Lets Talk",
      },
    };
  }
  render() {
    return <div>Hello</div>;
  }
}

export default App;
