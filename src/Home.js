import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from "react"
import { auth } from "./firebase"
import Pics from './Nav-links/Pics'

const DIV = styled.div`
    
    /*SIGNUP AND SIGNIN BUTTONS */
    .buttons{
        margin: 0 auto;
        max-width: 85%;
        /* border: 1px solid white; */
        margin-top: 30px;
        display: flex;
    }
    #auth-button{
        padding: 10px;
        border: 1px solid white;
        border-radius: 20px;
        margin-right: 5px;
        transition: all linear 0.2s;
        cursor: pointer;
    }
    #auth-button:hover{
        border: 1px solid white;
        background-color: white;
        color: black;
        font-weight: 550;
    }
    /*SIGNUP AND SIGNIN BUTTONS */

    /* LOGOUT BUTTON */
    .logout-buttons{
        margin: 0 auto;
        max-width: 85%;
        /* border: 1px solid white; */
        margin-top: 30px;
        display: flex;
    }
    .logout-buttons p{
        margin-top: 8px;
    }
    #logout-button{
        padding: 10px;
        border-radius: 20px;
        border: 1px solid white;
        transition: all linear 0.2s;
        cursor: pointer;
        margin-top: 10px;
    }
    #logout-button:hover{
        background: white;
        border: 1px solid white;
        color: black;
    }
    /* LOGOUT BUTTON */

   /* BOOKING */
    #booking{
        margin: 0 auto;
        text-align: right;
        /* border: 1px solid white; */
        margin-right: 5px;
        padding-top: 8px;
    }
    #booking:hover{  
        cursor: pointer;
        color: #db1ab1;
    }
    a:hover{
        color: #ffc4f2;
    }
    /* BOOKING */
`

const Home = () => {
    let user1 = auth.currentUser;
    const logout = e => {
        e.preventDefault();
        auth.signOut()
            .then((auth) => {
                window.location.reload();
                console.log('User Logged out')

            })
            .catch(error => alert(error.message));
    };
    if (user1) {
        return (
            <DIV className="home">
                <div className="logout-buttons">
                    <div>
                        <p>{user1.email}</p>
                        <button id = "logout-button" onClick={logout}>Log out</button>
                    </div>
                    <p id = "booking"><a href="mailto:bookings.Khaleed@gmail.com?subject=Bookings">Bookings</a></p>
                </div>
                <Pics></Pics>
                {/* <div className='artist-div'>
                    <img id="artist" src={artist} alt="artist" width="550px" />
                </div> */}
            </DIV>
        );
    } else {
        return (
            <DIV className="home">
                <div className="buttons">
                    <Link to='/SignUp'><button id = "auth-button">Sign Up</button></Link>
                    <Link to='/LogIn'><button id = "auth-button">Log In</button></Link>
                    <p id = "booking"><a href="mailto:bookings.Khaleed@gmail.com?subject=Bookings">Bookings</a></p>
                </div>
                <Pics></Pics>
                {/* <div className='artist-div'>
                    <img id="artist" src={artist} alt="artist" width="550px" />
                </div> */}
            </DIV>
        );
    }
}
export default Home;
