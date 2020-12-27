import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import React, { useState, useContext } from "react";
import { context } from "../../../store";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

function PicturesWall() {
  const [previewVisible, setpreviewVisible] = useState(false);
  const [previewImage, setpreviewImage] = useState("");
  const [previewTitle, setpreviewTitle] = useState("");
  const [fileList, setfileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);
  const { state, dispatch } = useContext(context);

  // state = {
  //   previewVisible: false,
  //   previewImage: "",
  //   previewTitle: "",
  //   fileList: [
  //     {
  //       uid: "-1",
  //       name: "image.png",
  //       status: "done",
  //       url:
  //         "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  //     },
  //   ],
  // };

  const handleCancel = () => {
    setpreviewVisible(false);
    // this.setState({ previewVisible: false });
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setpreviewImage(file.url || file.preview);
    setpreviewVisible(true);
    setpreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );

    // this.setState({
    //   previewImage: file.url || file.preview,
    //   previewVisible: true,
    //   previewTitle:
    //     file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    // });
  };

  const handleChange = ({ fileList }) => {
    console.log(fileList[0] && fileList[0].response);
    console.log(fileList);
    setfileList(...[fileList]);
    let path =
      fileList.length > 0 && fileList[0].response
        ? fileList[0].response.path
        : "";

    console.log(path);

    dispatch({
      type: "setImgUrl",
      payload: {
        imgUrl: path,
      },
    });
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <>
      <Upload
        action="http://localhost:8000/api/upload"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
}
export default PicturesWall;
