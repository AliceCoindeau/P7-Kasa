import React from 'react';
import "./Main.css";

function Main(props) {
    const {children} = props;
  
    return <div className="Main">{children}</div>; 
    }
    
    export default Main;