import styled from "styled-components";
import { mobile } from "../responsive";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa"; // Icons

const Container = styled.div`
  display: flex;
  background-color: #e9e8e4;
  padding: 40px 20px;
  ${mobile({ flexDirection: "column", padding: "20px" })}
`;

const Left = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const Desc = styled.p`
  margin: 20px 0;
  color: #555;
  font-size: 16px;
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #${(props) => props.color + "AA"}; // Add transparency on hover
  }
`;

const Center = styled.div`
  flex: 0.5;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  color: #555;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #333;
  }
`;

const Right = styled.div`
  flex: 0.5;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: #555;

  /* Optional: Add icons for contact items */
  & svg {
    margin-right: 10px;
  }
`;

const Payment = styled.img`
  width: 30%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SnapFoot</Logo>
        <Desc>Your one-stop shop for stylish footwear and accessories.</Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <FaPinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          {/* Add icons for contact information */}
          <span>📍 622 Ashok Vihar, INDIA 122017</span>
        </ContactItem>
        <ContactItem>
          <span>📞 +91 9818326480</span>
        </ContactItem>
        <ContactItem>
          <span>✉️ contact@midnight.dev</span>
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
