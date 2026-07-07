// 文件/文件夹节点的类型定义
interface FileNode {
  name: string;        // 名称
  isOpen?: boolean;    // 是否展开（仅文件夹有效）
  files?: FileNode[];  // 子文件/子文件夹（有此项则为文件夹）
}

// 初始文件树数据
const initialData: FileNode[] = [
  {
    name: "node_modules" // 普通文件（无子项）
  },
  {
    name: "public",
    isOpen: false, // 折叠状态
    files: [
      {
        name: "index.html",
        isOpen: false
      }
    ]
  },
  {
    name: "src",
    isOpen: true, // 展开状态
    files: [
      {
        name: "App.tsx"
      },
      {
        name: "components",
        isOpen: false,
        files: [{ name: "File.tsx" }]
      }
    ]
  },
  {
    name: "Git",
    isOpen: false,
    files: [
      {
        name: ".gitignore"
      },
      {
        name: "Commits",
        isOpen: false,
        files: [{ name: "First commit" }]
      }
    ]
  }
];

export default initialData;
export type { FileNode };
