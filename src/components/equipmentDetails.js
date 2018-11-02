import React,{Component} from 'react';
import EquipmentDeviceCard from './equipmentDeviceCard';

const {logo} = '../assets/logo.jpg';
const style={
  border: '1px solid grey'
}

export default class EquipmentDetail extends Component{
  constructor(props){
    super(props);
  }
  render(){

    const data = this.props.data;
    const {selectedEquiment} = this.props;

    console.log("data is "+data);
    return(
        <div className="d-flex">
          <div className="col-8" style={style}>
            <div className="row alert alert-secondary">
              Device Details
            </div>
            <div className="row">
              <div className="col">
                  <h3>Image</h3>
                  <img src={logo} width="100" height="50" alt="Image_Logo"/>
              </div>
              <div className="col">
                <form>
                  <div className="form-group">
                   <label htmlFor="value1">Equipment Name</label>
                   <input type="text" class="form-control" id="value1" value={selectedEquiment.Equipment}/>
                  </div>
                  <div className="form-group">
                   <label htmlFor="value2">Vendor</label>
                   <input type="text" class="form-control" id="value2" value={selectedEquiment.Vendor}/>
                  </div>
                  <div className="form-group">
                   <label htmlFor="value3">Location</label>
                   <input type="text" class="form-control" id="value3" value={selectedEquiment.Location}/>
                  </div>
                  <div className="form-group">
                   <label htmlFor="value3">Model</label>
                   <input type="text" class="form-control" id="value3" value={selectedEquiment.Model}/>
                  </div>
                  <div className="form-group">
                   <label htmlFor="value3">Serial#</label>
                   <input type="text" class="form-control" id="value3" value={selectedEquiment.Serial}/>
                  </div>
                  <div className="form-group">
                   <label htmlFor="value3">Description</label>
                   <input type="text" class="form-control" id="value3" value={selectedEquiment.Description}/>
                  </div>
                </form>

              </div>
            </div>

          </div>
          <div className="col-4">
            <div className="d-flex flex-column">
            <button type="button" className="btn btn-primary btn-sm btn-block">
                <strong>SYSTEMS</strong>
            </button>
            <button onClick={()=>{this.props.onVisibleToggle()}} type="button" className="btn btn-secondary btn-lg btn-block">
                Device Details
            </button>
               {this.props.isVisible && (
                 data.map((data, index) => <EquipmentDeviceCard key={index} data={data}
                   selectedEquimentfn={()=>{this.props.selectedEquimentfn(data)}}/> ))

                 }
            </div>
          </div>
        </div>
    );
  }
}
