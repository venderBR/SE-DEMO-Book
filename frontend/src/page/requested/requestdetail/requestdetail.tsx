import React, { useEffect, useState  } from "react";
import "./requestdetailS.css";
import { Link,useNavigate } from "react-router-dom";
import { Image } from 'antd';
import { Upload,Progress,Form,Button,Input } from 'antd';
import { Slidebar } from "../../../components/slideBar/slidebar";
import VirtualList from 'rc-virtual-list';
import { Avatar, List, message } from 'antd';

const siderStyle: React.CSSProperties = {
    flex: '0 0 18%',
    width: '18%',
    minWidth: '18%',
    maxWidth: '18%',
};
const MainStyle: React.CSSProperties = {
    flex: '0 22% 100%',
    width: '80%%',
    minWidth: '80%',
    maxWidth: '80%',
};



export const RequestedDetail = (): JSX.Element => {
    const navigate = useNavigate(); 
    const handleGoBack = () => {
        navigate(-1); 
      };
    
    return (
        <div className="element5">
            <div style={siderStyle} className="l">
                <Slidebar></Slidebar>
            </div>
            <div style={MainStyle} className="maincontent">
                
                <div className="Cblock">
                    <div className="text" id="position">ชื่อหนังสือ :  </div> 
                    <div className="text" id="position1">ชื่อผู้เขียน :  </div>
                    <div className="text" id="position2">ชื่อสำนักพิมพ์ :  </div>
                    <div className="text" id="position3">แสดงเหตุผล :  </div>
                    <Button onClick={handleGoBack} type="primary" htmlType="submit"  className="button1" >กลับ</Button>
                </div>
                <div className="text" id="positiontext11">รายละเอียดคำขอหนังสือ</div>
            </div>

            
        </div>
        
    
    );
  };
  export default RequestedDetail;