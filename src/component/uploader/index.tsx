import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const FileUploader = (props) => {
  const uploadConfig = {
    name: "file",
    action: "http://localhost:4000/api/upload",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
        props.uploaded(info.file.response.filePath);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <Upload {...uploadConfig}>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>
  );
};

export default FileUploader;
