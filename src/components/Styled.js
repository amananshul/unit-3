import { Link } from "react-router-dom";
import styled from "styled-components";

export const Grid = styled.div`
display:grid;
grid-template-columns:repeat(3,1fr)
`;

export const Select = styled.select``;

export const Flex = styled.div``;

export const NavbarLink = styled(Link)`
text-decoration: none;
margin: 24px;
color: wheat;
font-size: 26px;

`