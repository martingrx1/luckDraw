import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Button } from "antd";
import Prize from "./prize";

const StartBtn = styled.button`
  width: 50px;
  height: 50px;
`;

const OperateArea = styled.div`
  position: absolute;
  display: flex;
  top: 300px;
  left: 175px;
  width: 500px;
  height: 100px;
  border: 3px solid red;
`;

const FlexItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Container = styled.div`
  position: relative;
  top: 100px;
`;
function Draw(props) {
  let [activeIndex, setActiveIndex] = useState(-1);
  let [count, setCount] = useState(105);
  const [prize, setPrize] = useState([]);
  const [timer, setTimer] = useState(null);
  let index = 0;
  let curPosX = 0;
  let curPosY = 0;
  const createdCorona = () => {
    let setting = [
      {
        direction: "right",
        num: "5",
        rightStep: 140,
        topStep: 0,
      },
      {
        direction: "down",
        num: "3",
        rightStep: 0,
        topStep: 170,
      },
      {
        direction: "left",
        num: "5",
        rightStep: -140,
        topStep: 0,
      },
      {
        direction: "up",
        num: "3",
        rightStep: 0,
        topStep: -170,
      },
    ];

    let res = setting.map((v) => {
      return createdPrize(v);
    });
    return res;
  };

  const createdPrize = (setting) => {
    let prizes = [];
    for (let i = 0; i < setting.num; i++) {
      index++;
      curPosX += setting.rightStep;
      curPosY += setting.topStep;
      prizes.push(
        <Prize
          active={activeIndex}
          index={index}
          prize={prize[index]}
          left={curPosX}
          key={index}
          top={curPosY}
        ></Prize>
      );
    }
    return prizes;
  };

  useEffect(() => {
    if (count <= 0) clearTimeout(timer);
  });

  useEffect(() => {
    axios.get("http://localhost:8000/api/getPrize").then((r) => {
      setPrize(r.data);
      console.log(r);
    });
  }, []);

  function start() {
    let timer = setTimeout(() => {
      setCount((count) => count - 1);
      setActiveIndex((activeIndex) => {
        if (activeIndex + 1 > 16) activeIndex = 0;
        return activeIndex + 1;
      });
      start();
    }, 100);
    setTimer(timer);
  }

  return (
    <>
      <Container>
        {prize.length > 0 && createdCorona()}
        <OperateArea>
          <FlexItem>
            {" "}
            <Button shape="round" size="large" type="primary">
              Primary Button
            </Button>
          </FlexItem>

          <FlexItem>
            <Button shape="round" size="large" type="primary">
              Primary Button
            </Button>
          </FlexItem>
        </OperateArea>
      </Container>
    </>
  );
}

export default Draw;
