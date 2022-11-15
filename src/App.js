import Category from "./components/Category";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import {BrowserRouter} from 'react-router-dom'
import { Link } from "react-router-dom";
import styled from "styled-components";
import {DiSwift} from "react-icons/di"
import Pogo from "./patternpad.svg"
function App() {
  return (
    <Pat className="App" bg={Pogo}>
      <BrowserRouter>
      <Nav>
        <DiSwift />
        <Logo to={"/"}>Deliciux</Logo>
      </Nav>
      <Search />
      <Category/>
      <Pages />
      </BrowserRouter>
    </Pat>
  );
}

const Logo = styled(Link)`
 text-decoration: none;
 font-size: 1.5rem;
 font-weight: 300;
 font-family: 'Lobster Two', cursive;
 `;

const Nav = styled.div`
 padding: 2rem 0rem;
 display: flex;
 justify-content: flex-start;
 align-items: center;

 svg{
  font-size: 3rem;
 }

`;
const Pat = styled.div`
background-image: url(${props => props.bg});
background-size: 'cover';
background-repeat: 'no-repeat';
`


export default App;
