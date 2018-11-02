import React, {Component} from 'react';
// const style={
//   border: '1px solid grey'
// }
const style={
  height:'100%'
}
export default class Sidebar extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="d-flex flex-column" style={style}>
          <div className="p-2"><i className="fa fa-home"></i></div>
          <div className="p-2"><i className="fa fa-folder-open"></i></div>
      </div>
      );
  }
}
