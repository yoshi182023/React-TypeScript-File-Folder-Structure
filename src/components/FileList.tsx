// FileList 组件：渲染文件/文件夹列表
import React, { useState } from "react";
import initialData, { FileNode } from "../utils/initialData";
// initialData：默认导出，是一个数组
// FileNode：类型，描述每个节点的结构
// FileData：展示单个文件或文件夹项

const FileData: React.FC = () => {
  return (
    <>
      {/* public 文件夹 */}
      <li>
        <button>
          public<span>[+]</span> {/* [+] 表示当前为折叠状态 */}
        </button>
      </li>
      {/* node_modules 文件夹 */}
      <li>
        <button>
          node_modules<span>[+]</span>
        </button>
      </li>
      {/* src 文件夹 */}
      <li>
        <button>
          src<span>[+]</span>
        </button>
      </li>
      {/* Git 文件夹 */}
      <li>
        <button>
          Git<span>[+]</span>
        </button>
      </li>
    </>
  );
};

// FileList：列表外层 ul，内部渲染 FileData
const FileList: React.FC = () => {
  return (
    <ul>
      <FileData />
    </ul>
  );
};

export default FileList;
