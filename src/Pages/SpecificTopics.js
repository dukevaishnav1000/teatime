import './style.css';
import Navbar from '../Component/Navbar/Navbar';
import React from 'react';

class SpecificTopics extends React.Component{

randomImage=()=>{
    let arr=["images\\deerImage_alt.png","images\\rabbitImage_alt.webp","images\\puppiesImage_alt.jpg","images\\cuteRabbitImage_alt.jpg"]
    return arr[Math.floor(Math.random(0,1)*4)];

}

render(){
    return(<div>
        <Navbar/>
        <div className="news-container container-fluid ">
            <div className="loaderHolder"><div className="loader"></div></div>            
            <div className="row m-2">
                <div className="col col-md-4 col-sm-6 col-12 m-0 mt-3">
                    <div className="card bg-dark text-white ">
                        <img src="./tiger.jpg" className="card-img" alt="" onError={this.randomImage}/>
                        <div className="hider"></div>
                        <div className="card-img-overlay">   
                            <h4 className="card-title mt"><a href="" target="_blank"></a></h4>
                            <p className="card-text">Last updated 3 mins ago</p>
                        </div>
                    </div>
                </div>  
            </div>
            <p className="endOfResults">That's All Folks !!</p>
        </div>
    </div>)
}
    
}

export default SpecificTopics;