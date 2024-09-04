import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { getUserApi } from "../util/api";

const UserPage = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUserApi();
      if (res) {
        console.log(res);
        setDataSource(res);
      }
    };
    fetchUser();
  }, []);
  // const dataSource = [
  //   {
  //     _id: "66d1715277337cd6a7fa8c79",
  //     name: "khai",
  //     email: "khai02@gmail.com",
  //     role: "user",
  //     __v: 0,
  //   },
  //   {
  //     _id: "66d7d991ab7351299908d9e3",
  //     name: "khai",
  //     email: "khai@gmail.com",
  //     role: "user",
  //     __v: 0,
  //   },
  // ];

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
  ];
  return (
    <div style={{ padding: 30 }}>
      <Table dataSource={dataSource} columns={columns} rowKey={"_id"} />;
    </div>
  );
};

export default UserPage;
