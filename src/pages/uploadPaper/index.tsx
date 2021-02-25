import React, { useState, useEffect, useContext } from "react";
import { context } from "../../store";
import axios from "axios";
import Uploader from "../../component/uploader";
import {
  Form,
  Input,
  Button,
  Radio,
  Checkbox,
  InputNumber,
  message,
  Select,
} from "antd";
import { collegelist, majorlist } from "../../config/school";
import { formattedGqlInputParams } from "../../utils/graphql";

function UploadPaper(props) {
  const { Option } = Select;
  const [filePath, setFilePath] = useState("");
  const [isUploaded, setIsuploaded] = useState(false);
  const { state, dispatch } = useContext(context);

  const options = [
    { label: "Apple", value: "Apple" },
    { label: "Pear", value: "Pear" },
    { label: "Orange", value: "Orange" },
  ];

  function finish(e) {
    if (!isUploaded) {
      message.info("未上传试卷");
      return;
    }
    axios
      .post(
        "http://localhost:4000/graphql",
        {},
        {
          params: {
            query: `mutation{
              uploadPaper(input:{${formattedGqlInputParams({
                ...e,
                filePath,
              })}}){
                id
              }
            }`,
          },
        }
      )
      .then(console.log);
  }
  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={finish}
        initialValues={{}}
        // onValuesChange={onFormLayoutChange}
      >
        <Form.Item
          label="试卷名"
          name="name"
          rules={[{ required: true, message: "请输入试卷名" }]}
        >
          <Input />
        </Form.Item>
        {/* <Form.Item label="所属学院" name="college" rules={[{required: true, message: '选择学院'}]}>
          <Select
            showSearch
            style={{width: 200}}
            placeholder={''}
            optionFilterProp="children"
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            {collegelist.map((v) => {
              return (
                <Option value={v.value} key={v.value}>
                  {v.title}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item label="所属专业" name="major" rules={[{required: true, message: '选择专业'}]}>
          <Select
            showSearch
            style={{width: 200}}
            placeholder={''}
            optionFilterProp="children"
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            {majorlist.map((v) => {
              return (
                <Option value={v.value} key={v.value}>
                  {v.title}
                </Option>
              );
            })}
          </Select>
        </Form.Item> */}

        <Form.Item
          label="试卷类型"
          name="type"
          rules={[{ required: true, message: "选择试卷类型" }]}
        >
          <Checkbox.Group
            options={options}
            defaultValue={["Apple"]}
            // onChange={onChange}
          />
        </Form.Item>

        <Form.Item
          label="答案"
          name="hasAnswer"
          rules={[{ required: true, message: "选择是否有答案" }]}
        >
          <Radio.Group>
            <Radio.Button value={true}>是</Radio.Button>
            <Radio.Button value={false}>否</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="售价"
          name="price"
          rules={[
            { required: true, message: "请输入价格" },
            { min: 1, type: "number", message: "价格最少为1" },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item label="上传文件">
          <Uploader
            uploaded={(filePath) => {
              setFilePath(filePath);
              setIsuploaded(true);
            }}
          ></Uploader>
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
