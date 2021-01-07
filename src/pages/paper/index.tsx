import { Table, Input, Tooltip, Button, Tabs } from "antd";
import { ColumnProps } from "antd/lib/table";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
const { TabPane } = Tabs;

const FlexBox = styled.div`
  display: flex;
  padding: 10px 0;
`;
const FlexItem = styled.div`
  margin-right: 5px;
`;

type College = {
  name: string;
  value: string;
  major: Major[];
};

type Major = {
  name: string;
  value: string;
};

const Paper = () => {
  const inputStyle = {
    width: "200px",
    margin: "10px 0px",
  };

  const collegeList: College[] = [
    {
      name: "机械",
      value: "mechanical",
      major: [
        {
          name: "过程装备与控制工程",
          value: "mechanical-gczbykzgc",
        },
      ],
    },
    {
      name: "数计",
      value: "mechanical",
      major: [
        {
          name: "信息系统与信息管理",
          value: "mechanical-gczbykzgc",
        },
      ],
    },
    {
      name: "经管",
      value: "mechanical",
      major: [
        {
          name: "工商管理",
          value: "mechanical-gczbykzgc",
        },
      ],
    },
  ];
  type product = {
    title: string;
    width: number;
    dataIndex: string;
    key: string;
    fixed: string;
  };
  const columns: ColumnProps<product>[] = [
    {
      title: "Full Name",
      width: 100,
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
      title: "Age",
      width: 100,
      dataIndex: "age",
      key: "age",
      fixed: "left",
    },
    {
      title: "Column 1",
      dataIndex: "address",
      key: "1",
      width: 150,
    },
    {
      title: "Column 2",
      dataIndex: "address",
      key: "2",
      width: 150,
    },
    {
      title: "Column 5",
      dataIndex: "address",
      key: "3",
      width: 150,
    },
    {
      title: "Column 7",
      dataIndex: "address",
      key: "5",
      width: 150,
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: () => <a>action</a>,
    },
  ];

  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }
  // console.log(data);
  return (
    <>
      <Tabs type="card">
        {collegeList.map((v) => {
          return (
            <TabPane tab={v.name} key={v.name}>
              <FlexBox>
                {v.major.map((r) => {
                  return (
                    <FlexItem key={r.name}>
                      <Button type="primary">{r.name}</Button>
                    </FlexItem>
                  );
                })}
              </FlexBox>
            </TabPane>
          );
        })}
      </Tabs>

      <Input
        style={inputStyle}
        placeholder="Enter your username"
        prefix={<UserOutlined className="site-form-item-icon" />}
        suffix={
          <Tooltip title="Extra information">
            <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
          </Tooltip>
        }
      />
      <Table
        columns={columns}
        dataSource={data}
        // scroll={{ x: "100%", y: 300 }}
      />
    </>
  );
};

export default Paper;
