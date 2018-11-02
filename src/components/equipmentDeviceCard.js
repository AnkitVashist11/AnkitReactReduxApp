import React,{Component} from 'react';

const style={
  boxShadow :'1px',
  width: '98%',
  margin:'3px'
}

export default class EquipmentDeviceCard extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const data= this.props.data;
    return(
      <div className="card" style={style}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" onClick={()=>{this.props.selectedEquimentfn()}}>Equipment {this.props.data.Equipment}</li>
        </ul>
      </div>
    );
  }
}
