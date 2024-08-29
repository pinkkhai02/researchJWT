import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  HomeOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
const items = [
  {
    label: <Link to="/">Home Page</Link>,
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: <Link to="user">User</Link>,
    key: "user",
    icon: <UserAddOutlined />,
  },
  {
    label: "Submenu",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        label: <Link to="login">Dang nhap</Link>,
        key: "login",
      },
      {
        label: "Đăng xuất",
        key: "logout",
      },
    ],
  },
];
const Header = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    // console.log("click ", e);
    // setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Header;
