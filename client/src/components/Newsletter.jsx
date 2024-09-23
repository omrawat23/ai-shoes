import styled from "styled-components";
import { mobile } from "../responsive";
import { FaPaperPlane } from "react-icons/fa"; // Icon for the button

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  text-align: center; /* Center text for all screen sizes */
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  color: #333; /* Darker color for better readability */
  font-weight: bold; /* Bolder font weight */
`;

const Desc = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  color: #555; /* Slightly darker text */
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 5px; /* Rounded corners */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  font-size: 16px; /* Larger font size */
  &:focus {
    outline: none; /* Remove default outline */
  }
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  border-radius: 5px; /* Rounded corners */

  &:hover {
    background-color: #007a7a; /* Darker teal on hover */
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <FaPaperPlane /> {/* Add an icon to the button */}
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
