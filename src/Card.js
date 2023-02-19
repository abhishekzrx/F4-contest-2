import React,{useState} from 'react';
import './Card.css'
import Joker from './joker.jpg'
const Card=(props)=>{
    const [like,clicklike]=useState(0);
    let clickhandler=()=>{
        clicklike(like=>like+1)
    }
    console.log(like)
    return(
        <div className="card">  
            <img src={Joker} className="circle-img" />
             <div>
                <span>User Id :</span><span>{props.id}</span>
                <br/>
                <span>Title :</span><span>{props.title}</span>
                <br/>
                <span>Likes :</span><span>{like}</span>
            </div>
          <button onClick={clickhandler}> Like</button>
        </div>
    );
}
export default Card;