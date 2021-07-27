import styled from 'styled-components';
import artist from '../images/artistPics/artist.jpg';
import one from '../images/artistPics/one.jpg';
import two from '../images/artistPics/two.jpg';
import three from '../images/artistPics/three.jpg';
import four from '../images/artistPics/four.jpg';
import five from '../images/artistPics/five.jpg';
import six from '../images/artistPics/six.jpg';
import seven from '../images/artistPics/seven.jpg';
import eight from '../images/artistPics/eight.jpg';
import nine from '../images/artistPics/nine.jpg';
import ten from '../images/artistPics/ten.jpg';
import eleven from '../images/artistPics/eleven.jpg';
import twelve from '../images/artistPics/twelve.jpg';
import thirteen from '../images/artistPics/thirteen.jpg';
import fourteen from '../images/artistPics/fourteen.jpg';
import fifteen from '../images/artistPics/fifteen.jpg';
import sixteen from '../images/artistPics/sixteen.jpg';
import seventeen from '../images/artistPics/seventeen.jpg';
import eighteen from '../images/artistPics/eighteen.jpg';
import nineteen from '../images/artistPics/nineteen.jpg';


const DIV = styled.div`
    /* ARTIST PICTURE */
        margin: 0 auto;
        margin-top: 90px;
        max-width: 80%;
        columns: 3;
        column-gap: 1px;
        text-align: center;
        transition: all linear 0.2s;

    #pic{
        max-width: 98%;
        transition: all linear 0.2s;
        margin-bottom: 5px;
        /* border: 1px solid white; */
    }
    @media(max-width: 700px){
        columns: 2;
        column-gap: 1px;
        text-align: center;
        transition: all linear 0.2s;

        #pic{
            margin-bottom: 2px;
            max-width: 98%;
            transition: all linear 0.2s;
        }
    }
    /* ARTIST PICTURE */

`
const Pics = () => {
    return (  
        <DIV className='pic-div'>
            <img id="pic" src={six} alt="artist" width="550px" />
            <img id="pic" src={artist} alt="artist" width="550px" />
            <img id="pic" src={one} alt="artist" width="550px" />
            <img id="pic" src={two} alt="artist" width="550px" />
            <img id="pic" src={three} alt="artist" width="550px" />
            <img id="pic" src={four} alt="artist" width="550px" />
            <img id="pic" src={fifteen} alt="artist" width="550px" />
            <img id="pic" src={five} alt="artist" width="550px" />
            <img id="pic" src={seven} alt="artist" width="550px" />
            <img id="pic" src={eight} alt="artist" width="550px" />
            <img id="pic" src={nine} alt="artist" width="550px" />
            <img id="pic" src={ten} alt="artist" width="550px" />
            <img id="pic" src={eleven} alt="artist" width="550px" />
            <img id="pic" src={twelve} alt="artist" width="550px" />
            <img id="pic" src={thirteen} alt="artist" width="550px" />
            <img id="pic" src={fourteen} alt="artist" width="550px" />
            <img id="pic" src={sixteen} alt="artist" width="550px" />
            <img id="pic" src={seventeen} alt="artist" width="550px" />
            <img id="pic" src={eighteen} alt="artist" width="550px" />
            <img id="pic" src={nineteen} alt="artist" width="550px" />
        </DIV>
    );
}
 
export default Pics;