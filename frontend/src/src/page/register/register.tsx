import React from "react";
import "./regisstyle.css";
import { Link } from "react-router-dom";
import { Image } from 'antd';
import { Upload,Progress,Form,message,Button,Input } from 'antd';
import Logo from '../../components/logo/logoBook';
import Logofront from '../../components/logoF/logofront';

const siderStyle: React.CSSProperties = {
    flex: '0 0 30%',
    width: '30%',
    minWidth: '30%',
    maxWidth: '30%',
};
const MainStyle: React.CSSProperties = {
    flex: '0 35% 100%',
    width: '65%%',
    minWidth: '65%',
    maxWidth: '65%',
};
export const Register = (): JSX.Element => {
   
    return (
        <div className="element4">
            <div style={siderStyle} className="blockright">
            <div className="logo1">
                    <Logo></Logo>
                </div>
                <div className="textlogo" id="positionlogo">
                    <Logofront></Logofront>
                </div>
                <div className="textright" id="positiontext1">Welcome Beck!!! </div>
                <div className="textright" id="positiontext2">................................<br/>................................<br/>................................ </div>
                <Button className="button1" > Sign in</Button>
            </div>
            <div style={MainStyle} className="maincontent">
                <div className="Cblock">

                </div>
            </div>
        </div>
    );
  };
  export default Register;