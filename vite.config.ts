// Vite 构建工具配置
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()], // 启用 React 支持
  test: {
    environment: "jsdom", // 测试环境使用 jsdom 模拟浏览器
    globals: true,      // 全局可用 describe/it/expect 等
  },
});
