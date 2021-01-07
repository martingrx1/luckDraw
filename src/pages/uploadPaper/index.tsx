import React, { useState, useEffect, useContext } from "react";
import { context } from "../../store";
import axios from "axios";
import FileUploader from "./component/fileUploader";

import { Form, Input, Button, Radio, Checkbox, InputNumber } from "antd";

function UploadPaper(props) {
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [major, setMajor] = useState("");
  const [type, setType] = useState("");
  const [hasAnswper, setHasAnswer] = useState(true);
  const [price, setPrice] = useState(0);

  const { state, dispatch } = useContext(context);

  const options = [
    { label: "Apple", value: "Apple" },
    { label: "Pear", value: "Pear" },
    { label: "Orange", value: "Orange" },
  ];

  function finish(e) {
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
      {name}
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={finish}
        initialValues={{}}
        // onValuesChange={onFormLayoutChange}
        // size={componentSize}
      >
        <Form.Item
          label="试卷名"
          name="name"
          rules={[{ required: true, message: "请输入叫啥" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="所属学院"
          name="type"
          rules={[{ required: true, message: "请选择几等奖" }]}
        >
          <Checkbox.Group
            options={options}
            defaultValue={["Apple"]}
            // onChange={onChange}
          />
        </Form.Item>
        <Form.Item
          label="所属专业"
          name="type"
          rules={[{ required: true, message: "请选择几等奖" }]}
        >
          <Checkbox.Group
            options={options}
            defaultValue={["Apple"]}
            // onChange={onChange}
          />
        </Form.Item>

        <Form.Item
          label="试卷类型"
          name="type"
          rules={[{ required: true, message: "请选择几等奖" }]}
        >
          <Checkbox.Group
            options={options}
            defaultValue={["Apple"]}
            // onChange={onChange}
          />
        </Form.Item>

        <Form.Item
          label="是否有答案"
          name="havaAnswer"
          rules={[{ required: true, message: "请选择几等奖" }]}
        >
          <Radio.Group defaultValue="haveAnswer">
            <Radio.Button value="haveAnswer">是</Radio.Button>
            <Radio.Button value="notAnswer">否</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="售价"
          name="count"
          rules={[{ min: 1, type: "number", message: "请输入有几份" }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name="imgUrl" label="上传文件">
          <FileUploader></FileUploader>
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

export default UploadPaper;
