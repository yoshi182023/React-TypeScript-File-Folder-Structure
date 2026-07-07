// File 组件：包含文件列表和用于添加新文件的输入框
import React from "react";
import FileList from "./FileList";

const File: React.FC = () => {
  return (
    <div className='layout-row justify-content-between'>
      {/* 文件/文件夹列表容器，data-testid 供测试使用 */}
      <ul data-testid="files">
        <FileList />
      </ul>
      {/* 输入框：用于输入要添加的文件名，data-testid 供测试使用 */}
      <input data-testid="input-box" className='mt-15 mr-35 w-15' style={{ borderColor: "black" }} type="text" placeholder='Enter an item' value="Filename" readOnly />
    </div>
  )
};

export default File;
