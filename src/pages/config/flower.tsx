import React, { useState, useEffect, useContext } from "react";
import { context } from "../../store";
import axios from "axios";

import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";

function FloaweConfig(props) {
  const [account, setAccount] = useState(0);
  const [event, setEvent] = useState("");
  const [opValue, setOpValue] = useState(0);

  axios.get("http://localhost:8000/api/getFlower").then(({ data }) => {
    setAccount(data.account);
  });

  const submitEvent = (e): void => {
    let params = {
      ...e,
      account,
    };
    console.log(params);
    axios
      .post("http://localhost:8000/api/postFlowerEvent", {
        giao: 123,
      })
      .then((r) => {
        console.log(r);
      });
  };
  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ account, event, opValue }}
        onFinish={submitEvent}
      >
        <Form.Item label="余额" name="account">
          <div>{account}</div>
        </Form.Item>
        <Form.Item label="发生了啥" name="event">
          <Input />
        </Form.Item>
        <Form.Item label="花花变化数量" name="opValue">
          <InputNumber />
        </Form.Item>
        <Form.Item label="提交">
          <Button htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default FloaweConfig;
