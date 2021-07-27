import Burger from "./Burger"
import styled from "styled-components";
import RightNav from "./RightNav";
import { Link } from "react-router-dom";
import khaleed from '../images/khaleed.png';


const NAV = styled.nav`
        padding-top: 30px;
        padding-bottom: 5px;
        display: flex;
        align-items: center;
        max-width: 85%;
        margin: 0 auto;
        border-bottom: 1px solid #f2f2f2;
        top: 0;
        position: sticky;
    
    p{
        color: #db1ab1;
        font-size: 25px;
        font-weight: 300;
        transition: all linear 0.3s;
    }
    p:hover{
        color: white;
    }
    a{
        text-decoration: none;
    }
    @media (max-width: 375px){
        #img{
            margin-left: 100px;
        }
    }
`

const Navbar = () => {
    return ( 
        <NAV className= "navbar">
            <Link to = "/"><img id = "img" src = {khaleed} width = "120" height = "18" alt = "khaleed"/></Link>
            <RightNav/>
            <Burger></Burger>
        </NAV>
    );
}
 
export default Navbar;