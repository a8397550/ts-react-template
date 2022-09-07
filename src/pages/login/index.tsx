import * as React from 'react';
import "./index.less";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { 
  Tabs, 
  Input, 
  Checkbox, 
  Button, 
  message 
} from 'antd';
import "antd/lib/tabs/style/index.css"
import "antd/lib/input/style/index.css"
import "antd/lib/checkbox/style/index.css"
import "antd/lib/button/style/index.css"
import "antd/lib/message/style/index.css"
import {login} from "@/api/user/user"

export default function () {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [checked, setChecked] = React.useState(false);

  return <div className="boss-l-login">
    <div className="boss-l-login-header">
      Boss and Gateway System
    </div>
    <div className="boss-l-login-content">
      <Tabs
        defaultActiveKey="1"
        onChange={() => { }}
        centered={true}
      >
        <Tabs.TabPane tab="账号密码登录" key="1">
          <div className="form">
            <Input 
              className="form-item" 
              size="large" 
              placeholder="用户名"
              value={username}  
              prefix={<UserOutlined />} 
              onChange={(e) => {
                const value = e.target.value;
                setUsername(value);
              }}
            />
            <Input.Password 
              value={password}
              className="form-item" 
              size="large" 
              placeholder="密码" 
              prefix={<LockOutlined />} 
              onChange={(e) => {
                const value = e.target.value;
                setPassword(value);
              }}
            />
            <div className="form-item m1">
              <Checkbox onChange={(e) => { 
                console.log(e.target.checked)
                setChecked(e.target.checked)
              }}>自动登录</Checkbox>
              <div className="forget-pass" onClick={() => {
                message.warning('暂无功能，请联系管理员修改密码');
              }}>忘记密码?</div>
            </div>
            <Button onClick={() => {
              if (!username) {
                message.error('用户名不可以为空');
                return
              }
              if (!password) {
                message.error('密码不可以为空');
                return
              }

              login({
                username,
                password
              }).then(res => {

              }).catch(err => {
                
              })

            }} size="large" className="form-item m2" type="primary">登录</Button>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="手机号码登录" key="2">
          <div style={{height: 240}}>暂无功能</div>
        </Tabs.TabPane>
      </Tabs>
    </div>
    <div className="boss-l-login-footer">
      Copyright © 2018-2022 中国电信股份有限公司杭州分公司 All Rights Reserved.
    </div>
  </div>
}