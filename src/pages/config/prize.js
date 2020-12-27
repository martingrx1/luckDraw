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

import PicturesWall from "./component/PicturesWall";

function DrawConfig(props) {
  const { state, dispatch } = useContext(context);
  const [name, setName] = useState("");
  const [type, setType] = useState("1stPrize");
  const [count, setCount] = useState(0);

  // const onFormLayoutChange = ({ size }) => {
  //   setComponentSize(size);
  // };

  function finish(e) {
    // console.log(e, context.state.imgUrl);
    axios
      .post("http://localhost:8000/api/postPrize", {
        ...e,
        imgUrl: state.imgUrl,
      })
      .then((res) => {
        console.log("res", res);
      });
  }
  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={finish}
        initialValues={{ name, type, count }}
        // onValuesChange={onFormLayoutChange}
        // size={componentSize}
      >
        <Form.Item
          label="叫啥"
          name="name"
          rules={[{ required: true, message: "请输入叫啥" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="几等奖"
          name="type"
          rules={[{ required: true, message: "请选择几等奖" }]}
        >
          <Select>
            <Select.Option value="1stPrize">一等奖</Select.Option>
            <Select.Option value="2ndPrize">二等奖</Select.Option>
            <Select.Option value="3rdPrize">三等奖</Select.Option>
            <Select.Option value="4thPrize">安慰奖</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="有几份"
          name="count"
          rules={[{ min: 1, type: "number", message: "请输入有几份" }]}
        >
          <InputNumber />
        </Form.Item>
        {/* <Form.Item label="Switch">
          <Switch />
        </Form.Item> */}
        <Form.Item name="imgUrl" label="奖品图">
          <PicturesWall></PicturesWall>
        </Form.Item>
        <Form.Item label="提交">
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default DrawConfig;
