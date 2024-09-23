import { useState } from "react";
import styled, { css } from "styled-components";
import { sliderItems } from "../data";
import { Link } from "react-router-dom";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 400px) {
      ${props}
    }
  `;
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: #e9e8e4;
  ${mobile({ height: "60vh" })} 
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) => (props.direction === "left" ? "10px" : "auto")};
  right: ${(props) => (props.direction === "right" ? "10px" : "auto")};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  ${mobile({ width: "40px", height: "40px" })} 
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slide * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  ${mobile({ flexDirection: "column" })} 
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e9e8e4;
`;

const Image = styled.img`
  height: 80%;
  object-fit: cover; 
  ${mobile({ height: "60%", width: "100%" })} 
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  background-color: #e9e8e4;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: flex-start; // Align text to the start
  ${mobile({ padding: "20px", display: "flex" })} // Show text in mobile
`;

const Title = styled.h1`
  margin-top: 0; // Reset margin on mobile
  font-size: 60px;
  ${mobile({ fontSize: "30px" })} // Responsive font size for title
`;

const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${mobile({ fontSize: "16px", margin: "20px 0" })} 
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  ${mobile({ fontSize: "16px", padding: "8px" })} 
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <p>↩</p>
      </Arrow>
      <Wrapper slide={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Link to="/products/shoes">
                <Button>SHOW NOW</Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <p>↪</p>
      </Arrow>
    </Container>
  );
};

export default Slider;
