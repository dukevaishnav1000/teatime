import './style.css';
import Navbar from '../Component/Navbar/Navbar';
import React from 'react';
import NewsCard from '../Component/NewsCard/NewsCard';

let news_pointer=-1;
let news_articles=[];
let newsCardArray=[];


class HomePage extends React.Component{

    makeCards()
    {   
        
        if(news_pointer+20<news_articles.length){
            let temp=news_pointer;
            newsCardArray= news_articles.slice(temp+1,temp+21).map(article=>{
            console.log("first if called --- news_pointer ",++news_pointer);
            return <NewsCard title={article.title} urlToImage={article.urlToImage} urlToArticle={article.url} publishedAt={article.publishedAt} key={news_pointer}/>
        })    
        
        }
        else
        if(news_pointer<news_articles.length)
        {   let temp=news_pointer;
            
            newsCardArray.push(news_articles.slice(temp+1,news_articles.length).map(article=>{
            ++news_pointer;
            console.log("second if called --- news_pointer ",++news_pointer);
            return <NewsCard title={article.title} urlToImage={article.urlToImage} urlToArticle={article.url} publishedAt={article.publishedAt} key={news_pointer}/>
            }));
        }   
        
        console.log(newsCardArray);
        this.setState({loader:"none"});
        
    }
    
    constructor(props){
    super(props);
    this.state={loader:"block"};
    }

    render(){
        // this.loadImage.bind(this)();
        return(
        <div>
            <Navbar/>
            <div className="news-container container-fluid ">
                <div className="loaderHolder" id="loaderHolder" style={{display:this.state.loader}}><div className="loader"></div>
                </div>                
                <div className="row m-1">
                {   
                    newsCardArray
                }
                
                </div>  
                <p className="endOfResults">That's All Folks !!</p>
            </div>
        </div>
        )
    }

    componentDidMount(){
        console.log("ComponentDidMount called");
        this.fetchHomeData.bind(this)();     
    }

    fetchHomeData(){
        //new data will be fetched if 
        this.setState({loader:"block"});
        console.log("fetchHomeData called");
        if(news_pointer===-1)
        {   
            //us,in,uk,cn,ru,jp,au
            fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://newsapi.org/v2/top-headlines?country=us&pageSize=20&apiKey=ca7e73b85d284f8094f30683304ad991`)}`).then((res)=>{
            return res.json();             
           },rej=>{
               console.log("Error while feching: ",rej)
           }).then(data=>{
                    news_articles.push(...JSON.parse(data.contents).articles);
                        //console.log(news_articles);
                        
            })
            fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://newsapi.org/v2/top-headlines?country=in&pageSize=20&apiKey=ca7e73b85d284f8094f30683304ad991`)}`).then((res)=>{
            return res.json();             
           },rej=>{
               console.log("Error while feching: ",rej)
           }).then(data=>{
            news_articles.push(...JSON.parse(data.contents).articles);
                        //console.log(news_articles);
                        
            })
            fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://newsapi.org/v2/top-headlines?country=uk&pageSize=20&apiKey=ca7e73b85d284f8094f30683304ad991`)}`).then((res)=>{
            return res.json();             
           },rej=>{
               console.log("Error while feching: ",rej)
           }).then(data=>{
            news_articles.push(...JSON.parse(data.contents).articles);
                        //console.log(news_articles);
                        
            })
            fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://newsapi.org/v2/top-headlines?country=au&pageSize=20&apiKey=ca7e73b85d284f8094f30683304ad991`)}`).then((res)=>{
            return res.json();             
           },rej=>{
               console.log("Error while feching: ",rej)
           }).then(data=>{
            news_articles.push(...JSON.parse(data.contents).articles);
                        //console.log(news_articles);    
            }).then((data)=>{
             setTimeout(()=>{(this.makeCards.bind(this))();},2000);
            })
        }
        
    }
    
}

export default HomePage;