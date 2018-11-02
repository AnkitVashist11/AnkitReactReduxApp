import React from 'react';

const style={
  width:'200vh',
  boxShadow: '-1px 1px 1px -1px',

}

export default function BreadCrumb(props){
  return(
    <div>
    <nav className="navbar navbar-light bg-light"aria-label="breadcrumb" style={style}>
       <ol className="breadcrumb">
         <li className="breadcrumb-item"><a href="#">Home</a></li>
         <li className="breadcrumb-item"><a href="#">Device</a></li>
         <li className="breadcrumb-item active" aria-current="page">{props.equipmentName}</li>
       </ol>
      </nav>
    </div>
  )
}
