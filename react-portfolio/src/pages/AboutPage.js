import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <p>
          Currently studying part time at The University of Manchester Coding
          Bootcamp, David also works as Web Designer at ITPS an IT Hardware
          Reseller.
        </p>{" "}
        <p>
          His focus throughout his education has been user-centered design,
          studying Graphic Design at college and Transport Product Design at
          Aston University. Although now would like a more technical role in
          full stack development.
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
