// 根组件：组合页面头部和文件树主体
import React from 'react';
import './App.css';
import { AppHeader } from "./components/AppHeader";
import File from "./components/File";

const title: string = "File Folder Structure"; // 页面标题

const App: React.FC = () => {
    return (
        <div className="App">
            <AppHeader title={title} />
            <File />
        </div>
    );
}

export default App;
