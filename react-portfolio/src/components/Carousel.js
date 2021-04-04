import React from "react";
import betting from "../Assets/images/betting.png";
import burger from "../Assets/images/burger.JPG";
import job from "../Assets/images/job.JPG";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "../components/Card";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Betting App",
          subTitle: "Live Score Betting...",
          imgSrc: betting,
          link: "",
          selected: false,
        },
        {
          id: 1,
          title: "DEV Jobs App",
          subTitle: "Tech Job Portal...",
          imgSrc: job,
          link: "",
          selected: false,
        },
        {
          id: 2,
          title: "Eat-Da-Burger",
          subTitle: "Restaurant Management...",
          imgSrc: burger,
          link: "",
          selected: false,
        },
      ],
    };
  }

  HandleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((items) => {
      if (items.id !== id) {
        items.selected = false;
      }
    });
    this.setState({ items });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.HandleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
