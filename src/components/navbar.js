import React, {Component} from 'react';

const style={
  marginRight:'60%'
}

export default class Navbar extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
        <div>
          <div>
            <nav className="navbar navbar-dark" style={{backgroundColor:'#001c8e'}}>
            <span className="navbar-brand mb-6 h1">LAB</span>
            <form className="form-inline search" style={style}>
                <input className="form-control mr-sm-9" type="search" placeholder="Search" aria-label="Search"/>
            </form>

            <span><i className="fa fa-user-circle"></i></span>
            <span><i className="fa fa-bell"></i></span>
            <span><i className="fa fa-question-circle"></i></span>
           </nav>

          </div>
        </div>
      );
  }
}
