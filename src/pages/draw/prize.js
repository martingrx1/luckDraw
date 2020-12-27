import React from "react";
import styled from "styled-components";

const Cube = styled.div`
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  width: 140px;
  padding: 20px;
  background-color: skyblue;

  &.active {
    background-color: pink;
  }
`;

const Title = styled.div`
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
`;

const ImageContainer = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

function Prize(props) {
  // console.log(props.prize, "props");
  return (
    <>
      <Cube
        className={props.active === props.index ? "active" : ""}
        left={props.left + "px"}
        top={props.top + "px"}
      >
        <Title>{props.prize.name || 1}</Title>
        <ImageContainer>
          <Image src={props.prize.imgUrl}></Image>
        </ImageContainer>
      </Cube>
    </>
  );
}

export default Prize;
