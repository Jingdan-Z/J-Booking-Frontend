import React from "react";
import { Tabs } from "antd";
import UploadStay from "./UploadStay";
 
const { TabPane } = Tabs;
export class StayDetailInfoButton extends React.Component {
    render() {
      return <></>;
    }
  }
  
class HostHomePage extends React.Component {
  render() {
    return (
      <Tabs defaultActiveKey="1" destroyInactiveTabPane={true}>
        <TabPane tab="My Stays" key="1">
          <div>My Stays Content</div>
        </TabPane>
        <TabPane tab="Upload Stay" key="2">
          <div>Upload Stays</div>
        </TabPane>
      </Tabs>
    );
  }
}
 
export default HostHomePage;
