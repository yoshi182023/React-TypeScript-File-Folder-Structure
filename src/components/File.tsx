// File 组件：包含文件列表和用于添加新文件的输入框
import FileList from "./FileList";
import initialData from "../utils/initialData";
import React, { useState } from "react";
// 还没做的（下一步）
// File.tsx：用 useState 管理数据，控制输入框
// FileData：加点击展开/折叠、双击变文件夹
// + 按钮：从输入框读文件名并添加
// 有哪个组件想深入看，可以直接说名字
const File: React.FC = () => {
    const [files, setFiles] = useState(initialData);
    const [inputValue, setInputValue] = useState("");
  return (
    <div className='layout-row justify-content-between'>
      {/* 文件/文件夹列表容器，data-testid 供测试使用 */}
      <ul data-testid="files">
        <FileList
          files={files} //把文件树数据传给子组件
          setFiles={setFiles} //把文件树数据传给子组件
          inputValue={inputValue} //把输入框数据传给子组件
          setInputValue={setInputValue} //把输入框数据传给子组件
          //左边是子组件接收的名字（prop 名），右边是父组件里的变量。
        />
      </ul>
      {/* 输入框：用于输入要添加的文件名，data-testid 供测试使用 */}
      <input data-testid="input-box" className='mt-15 mr-35 w-15' style={{ borderColor: "black" }} type="text" placeholder='Enter an item'
        value={inputValue} onChange={(e) => setInputValue(e.target.value)}
       />
    </div>
  )
};

export default File;
