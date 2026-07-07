// 应用入口文件：将 React 应用挂载到 HTML 的 #root 节点
import { createRoot } from "react-dom/client";
import '../styles/app-ui.css'; // 全局 UI 样式
import App from './App';

// 获取页面根节点
const rootElement = document.getElementById('root');

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />); // 渲染根组件
}
