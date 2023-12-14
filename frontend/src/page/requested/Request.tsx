import React, { useEffect, useState  } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Image } from 'antd';
import { Upload,Progress,Form,Button,Input } from 'antd';
import { Slidebar } from "../../components/slideBar/slidebar";
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

interface DataType {
    gender?: string;
    name: {
      title?: string;
      first?: string;
      last?: string;
    };
    email?: string;
    picture: {
      large?: string;
      medium?: string;
      thumbnail?: string;
    };
    nat?: string;
    loading: boolean;
  }
  
    const count = 15;
    const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
    const ContainerHeight = 600;

export const Requested = (): JSX.Element => {
    const [data, setData] = useState<DataType[]>([]);

  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
        message.success(`${body.results.length} more items loaded!`);
      });
  };

  useEffect(() => {
    appendData();
  }, []);

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
      appendData();
    }
  };


    return (
        <div className="element2">
            <div style={siderStyle} className="l">
                <Slidebar></Slidebar>
            </div>
            <div style={MainStyle} className="maincontent">
                
                <div className="Cblock">
                    <List>
                        <VirtualList
                            data={data}
                            height={ContainerHeight}
                            itemHeight={47}
                            itemKey="email"
                            onScroll={onScroll}
                        >
                            {(item: DataType) => (
                            <List.Item key={item.email} actions={[<a key="list-loadmore-edit" >edit</a>, <a key="list-loadmore-more">more</a>]}>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.picture.large} />}
                                    title={<a href="https://ant.design">{item.name.last}</a>}
                                    description={item.email}
                                />
                                <div>Content</div>
                            </List.Item>
                            )}
                        </VirtualList>
                    </List>
                </div>
                <div className="text" id="positiontext11">คำขอหนังสือใหม่จาก สมาชิก </div>
            </div>

            
        </div>
        
    
    );
  };
  export default Requested;