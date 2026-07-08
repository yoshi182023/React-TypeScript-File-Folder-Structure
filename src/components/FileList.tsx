// FileList 组件：渲染文件/文件夹列表
import React from "react";
import initialData, { FileNode } from "../utils/initialData";

interface FileListProps {
  files: FileNode[];
  setFiles: React.Dispatch<React.SetStateAction<FileNode[]>>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}
// FileData：渲染单个文件/文件夹节点
// node 是当前这一项的数据，类型为 FileNode
const FileData: React.FC<{ node: FileNode }> = ({ node }) => {
  return (
    <li>
      {/* 点击区域：显示名称，文件夹额外显示 [+] 或 [-] */}
      <button>
        {node.name}
        {/* 有 files 属性说明是文件夹，才显示展开/折叠符号 */}
        {node.files && (
          <span>[{node.isOpen ? "-" : "+"}]</span>
        )}
      </button>
      {/* 文件夹且处于展开状态时，渲染子列表 */}
      {node.files && node.isOpen && (
        <ul>
          {/* 递归：每个子项再交给 FileData 渲染 */}
          {node.files.map((child) => (
            <FileData key={child.name} node={child} />
          ))}
          {/* 题目要求：每个文件夹末尾都有一个 + 按钮 */}
          <li><button>+</button></li>
        </ul>
      )}
    </li>
  );
};
//定义 FileListProps → 接收 props → files.map 替代 initialData.map
// FileList：列表外层容器，只在这里遍历第一层数据
// 注意：initialData.map 只写在这一层，
// 因为 FileData 会递归渲染，如果写在 FileData 里，
// 会导致每个节点都重复渲染，效率低下
// 不要写在 FileData 里，否则会重复渲染
const FileList: React.FC<FileListProps> = ({ files, setFiles, inputValue, setInputValue }) => {
  return (
    <ul>
      {files.map((file) => (
        <FileData key={file.name} node={file} />
      ))}
    </ul>
  );
};

export default FileList;

// File.tsx（父）
//   files, setFiles, inputValue, setInputValue
//         ↓ 通过 props 传递
// FileList.tsx（子）
//   用 files 渲染列表
//   后面交互时还会用 setFiles、inputValue 等
