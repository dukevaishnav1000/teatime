import React from 'react';
import './styles.css';

let randomImage=()=>{
  let arr=["rabbitImage_alt.webp","puppiesImage_alt.jpg","deerImage_alt.png","cuteRabbitImage_alt.jpg"]
  
  return `url(${arr[Math.floor(Math.random(0,1)*4)]})`;
  
}

class NewsCard extends React.Component{


// handleImage=function(){
//   console.log(" Hi "+this.state.urlToImage);
//   return this.state.urlToImage;
  
// }
constructor(props){
super(props);
this.state={image_url:this.props.urlToImage};
console.log("News Card constructor called"+" image :"+this.state.image_url);
}



    render() {
        // return (
        //     <div className="card bg-dark text-white ">
        //         <img src= className="card-img-top" alt="no img available"/>
        //         <div className="card-body">   
        //             <h5 className="card-title"></h5>
                    
        //         </div>
        //     </div>
        // </div> )
  

        return (<div className="col col-md-4 col-sm-6 col-12 m-0 mt-3 p-2">
        <div className="card">
        <img src={this.state.image_url} className="card-img-top" alt="" style={{backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundImage:randomImage()}}/>
        <div className="card-body">
          <h4 className="card-title"><a href={this.props.urlToArticle} target="_blank">{this.props.title}</a></h4>
          <p className="card-text">last updated 5 mins. ago</p>
        </div>
      </div>
      </div>);
}
}


export default NewsCard;

