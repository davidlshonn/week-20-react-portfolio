import React from "react";
import betting from "../Assets/images/betting.png";
import burger from "../Assets/images/burger.JPG";
import job from "../Assets/images/job.JPG";
import weather from "../Assets/images/weather.jpg";
import notes from "../Assets/images/notes.JPG";
import planner from "../Assets/images/planner.png";
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
          link: "https://davidlshonn.github.io/fixture-and-betting-app/",
          gitHub: "https://github.com/davidlshonn/fixture-and-betting-app/",
          selected: false,
        },
        {
          id: 1,
          title: "DEV Jobs App",
          subTitle: "Tech Job Portal...",
          imgSrc: job,
          link: "https://protected-retreat-49639.herokuapp.com/",
          gitHub: "https://github.com/davidlshonn/SecondProject/",
          selected: false,
        },
        {
          id: 2,
          title: "Eat-Da-Burger",
          subTitle: "Restaurant Management...",
          imgSrc: burger,
          link: "https://glacial-woodland-94921.herokuapp.com/",
          gitHub: "https://github.com/davidlshonn/week-15-burger-logger/",
          selected: false,
        },
        {
          id: 3,
          title: "Weather App",
          subTitle: "Forecast Any Location...",
          imgSrc: weather,
          link: "https://davidlshonn.github.io/week-6-weather-dashboard/",
          gitHub: "https://github.com/davidlshonn/week-6-weather-dashboard/",
          selected: false,
        },
        {
          id: 4,
          title: "Note Taker",
          subTitle: "Note Taker...",
          imgSrc: notes,
          link: "https://limitless-stream-29500.herokuapp.com/",
          gitHub: "https://github.com/davidlshonn/week-13-note-taker/",
          selected: false,
        },
        {
          id: 5,
          title: "Planner App",
          subTitle: "Hourly Planner...",
          imgSrc: planner,
          link: "https://davidlshonn.github.io/week-5-day-planner/",
          gitHub: "https://github.com/davidlshonn/week-5-day-planner/",
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
