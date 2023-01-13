// import React from 'react';
// import NewsCard from '../Component/NewsCard/NewsCard';

// export default function makeCards(homepageobj,news_pointer,news_articles)
// {   
//     homepageobj.setState({scrolly:window.scrollY,loader:"block"})
//     document.body.style.overflow="hidden";
//     if(news_pointer+21<news_articles.length){
//         let temp=news_pointer
//         homepageobj.setState(prev=>{return {newsCardArray:[...prev.newsCardArray,...news_articles.slice(temp+1,temp+22).map(article=>{
//             console.log("first if called --- news_pointer ",++news_pointer)
//             return <NewsCard title={article.title} urlToImage={article.urlToImage} urlToArticle={article.url} publishedAt={article.publishedAt} key={news_pointer} news_pointer={news_pointer}/>
//         })]}})
//     //     newsCardArray.push(...news_articles.slice(temp+1,temp+22).map(article=>{
//     //     console.log("first if called --- news_pointer ",++news_pointer);
//     //     return <NewsCard title={article.title} urlToImage={article.urlToImage} urlToArticle={article.url} publishedAt={article.publishedAt} key={news_pointer} news_pointer={news_pointer}/>
//     // }))
//     }
//     else
//     if(news_pointer<news_articles.length)
//     {   let temp=news_pointer
//         var eodflag=1
//         homepageobj.setState(prev=>{
//            return {newsCardArray:[...prev.newsCardArray,...news_articles.slice(temp+1,news_articles.length).map(article=>{
//             console.log("second if called --- news_pointer ",++news_pointer)
//             return <NewsCard title={article.title} urlToImage={article.urlToImage} urlToArticle={article.url} publishedAt={article.publishedAt} key={news_pointer}/>
//             })]}
//         })
//         homepageobj.observer.unobserve(document.getElementsByClassName("endOfResults")[0])
//         // newsCardArray.push();
//     }   
    
//     console.log(homepageobj.state.newsCardArray)
//    setTimeout(()=>{
//     // document.getElementsByTagName("body").style.overflowY="scroll";
//     console.log("body is "+document.getElementsByTagName("body")[0])
//     homepageobj.setState({loader:"none"})
//     document.body.style.overflow="visible"
//     if(eodflag==1)
//     {
//     document.getElementsByClassName("endOfResults")[0].style.opacity="1" 
//     }
// },1700)

// return news_pointer
// }