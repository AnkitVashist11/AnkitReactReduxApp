import React , {Component} from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import BreadCrumb from './breadCrumb';
import EquipmentDetail from './equipmentDetails';
import {bindActionCreators} from 'redux';
import {selectedEquimentfn} from '../redux/action';
import {connect} from 'react-redux';

class Main extends Component{
  constructor(props){
    super(props);

    this.state={
      isVisible : false,
    }
  }
    onVisibleToggle= ()=>{
      this.setState({
        isVisible : !this.state.isVisible
      })
    };

  render(){
    console.log("All data");
    console.log(this.props.device);

    const {isVisible} = this.state;
    const {data,selectedEquiment} = this.props.device;
    // const {selectedEquiment} = this.props
    // console.log("this.props ");
    // console.log(this.props);

    return(
      <div>
        <Navbar/>
        <div class="container-fluid">
            <div className="row">
                <div className="col-lg-1 Sidenav">
                    <Sidebar/>
                </div>
                <div className="col-lg-11">
                  <div className="row">
                    <BreadCrumb equipmentName={isVisible ? selectedEquiment.Equipment : ''}/>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <EquipmentDetail
                      onVisibleToggle ={()=>{this.onVisibleToggle()}}
                      isVisible = {isVisible}
                      selectedEquimentfn={(el) => {this.props.selectedEquimentfn(el)}}
                      data={data}
                      selectedEquiment={isVisible ? selectedEquiment : ''}

                      />
                    </div>
                  </div>
                </div>

            </div>
        </div>
      </div>
    );
  }

}
const mapStateToProps = (state)=> {
  return{
    devicename: state.data.Equipment,
    device : state
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({selectedEquimentfn},dispatch)

}
export default connect(mapStateToProps,mapDispatchToProps)(Main);
