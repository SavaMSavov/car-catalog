// import "./Footer.css";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background: #344649;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 65px;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: 0rem;
  color: white;
`;

const Footer = () => {
  return (
    <StyledFooter>
      2021 - BMW Photos Catalog - All rights reserved. &copy;
    </StyledFooter>
  );
};

export default Footer;
