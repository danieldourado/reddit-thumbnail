import React, { Component } from "react";
import Konva from "konva";
import { render } from "react-dom";
import { Stage, Layer, Rect, Text, Image } from "react-konva";

const width = 1280 / 5;
const height = 720 / 5;

const MainText = props => (
  <Text
    x={width / 80}
    y={width / 10}
    width={width / 1.2}
    text={props.text}
    fontSize={width / 12}
    fill={"white"}
  />
);
const Subreddit = props => (
  <Text
    x={width / 10}
    y={width / 100}
    text={props.text}
    fontSize={width / 20}
    fill={"white"}
  />
);
const Logo = props => (
  <Image
    x={width / 100}
    y={width / 100}
    width={width / 20}
    height={width / 20}
    fill={"green"}
  />
);

const Background = props => (
  <Image x={0} y={0} width={width} height={height} fill={"black"} />
);

class App extends Component {
  render() {
    return (
      <Stage width={width} height={height}>
        <Layer>
          <Background />
          <Logo />
          <Subreddit text="/r/AskReddit" />
          <MainText text="Describe how your country colapsed for the world" />
        </Layer>
      </Stage>
    );
  }
}

render(<App />, document.getElementById("root"));
