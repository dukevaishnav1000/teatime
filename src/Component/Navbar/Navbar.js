import React from 'react';
import './styles.css';


class Navbar extends React.Component{

    render(){
        return(<nav id="navbarcomp" className="navbar navbar-expand-lg navbar-light bg-light nav-fill">
            <div className="container-fluid ">
              <a className="navbar-brand " href="/"><h1 className="text-primary">Tea<span className="text-success">Time</span><img id="teaimg" src="https://www.freepnglogos.com/uploads/tea-png/tea-top-afternoon-teas-around-the-red-letter-days-blog-8.png"/></h1></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item mt-2">
                        <a className="nav-link" href="/Technology"><button type="button" className="btn btn-primary mr-2 ml-2">Technology</button></a>
                    </li>
                    <li className="nav-item mt-2">
                        <a className="nav-link" href="/Entertainment"><button type="button" className="btn btn-primary mr-2 ml-2">Entertainment</button></a>
                    </li>
                    <li className="nav-item mt-2">
                        <a className="nav-link" href="/Sports"><button type="button" className="btn btn-primary mr-2 ml-2">Sports</button></a>
                    </li>
                    <li className="nav-item mt-2">
                        <a className="nav-link" href="/Politics"><button type="button" className="btn btn-primary mr-2 ml-2">Politics</button></a>
                    </li>
                    <li className="nav-item mt-2">
                        <a className="nav-link" href="/Travel"><button type="button" className="btn btn-primary mr-2 ml-2">Travel</button></a>
                    </li>
                    <li className="nav-item mt-2">
                        <a className="nav-link" href="/Business"><button type="button" className="btn btn-primary mr-2 ml-2">Business</button></a>
                    </li>  
                    <li className="nav-item mt-2">
                        <a className="nav-link" href="/Food"><button type="button" className="btn btn-primary mr-2 ml-2">Food</button></a>
                    </li>  
                    <li className="nav-item mt-2">
                        <a className="nav-link" href="/Beauty"><button type="button" className="btn btn-primary mr-2 ml-2">Beauty</button></a>
                    </li>  
                </ul>
              </div>
            </div>
          </nav>);
    }
}

export default Navbar;

