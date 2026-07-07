// 测试文件：验证文件树组件的各项功能
import { vi } from "vitest";
// @ts-nocheck
/* eslint-disable */
import App from './App';
import {render, cleanup, fireEvent, RenderResult} from '@testing-library/react';

// 渲染 App 组件的辅助函数
const renderApp = () => render(<App/>);

// 每个测试结束后清理 DOM
afterEach(() => {
    cleanup()
});

// 测试中使用的 data-testid 常量
const TEST_IDS = {
    files: "files",
    inputBox: "input-box"
}

let files: HTMLElement;
let getByTestId: RenderResult["getByTestId"];
let inputBox: HTMLInputElement;

// 每个测试前渲染组件并获取关键元素
beforeEach(() => {
    const app = renderApp();
    getByTestId = app.getByTestId;
    files = getByTestId(TEST_IDS.files);
    inputBox = getByTestId(TEST_IDS.inputBox) as HTMLInputElement;
});

// 测试：初始渲染应显示 initialData 对应的文件树结构，且每个文件夹有 + 号
it("initially should display the file folder structure according to the given initialData along with one + sign", () => {
    expect(files.children[0].children).toHaveLength(5);
    expect(files.children[0].children[0].children[0]).toHaveTextContent("node_modules");
    expect(files.children[0].children[1].children[0]).toHaveTextContent("public");
    expect(files.children[0].children[1].children[0].children[0]).toHaveTextContent("[+]");
    expect(files.children[0].children[1].children).toHaveLength(1);
    expect(files.children[0].children[2].children[0]).toHaveTextContent("src");
    expect(files.children[0].children[2].children[0].children[0]).toHaveTextContent("[-]");
    expect(files.children[0].children[2].children).toHaveLength(2);
    expect(files.children[0].children[2].children[1].children).toHaveLength(3);
    expect(files.children[0].children[2].children[1].children[0].children[0]).toHaveTextContent("App.tsx");
    expect(files.children[0].children[2].children[1].children[1].children[0]).toHaveTextContent("components");
    expect(files.children[0].children[2].children[1].children[1].children[0].children[0]).toHaveTextContent("[+]");
    expect(files.children[0].children[2].children[1].children[1].children).toHaveLength(1);
    expect(files.children[0].children[3].children).toHaveLength(1);
    expect(files.children[0].children[3].children[0]).toHaveTextContent("Git");
    expect(files.children[0].children[3].children[0].children[0]).toHaveTextContent("[+]");
})

// 测试：每个文件夹末尾应显示 + 按钮
it("should display a + button in the end of every folder", () => {
    fireEvent.doubleClick(files.children[0].children[0].children[0]);
    expect(files.children[0].children[0].children[0]).toHaveTextContent("node_modules");
    expect(files.children[0].children[0].children[0].children[0]).toHaveTextContent("[+]");
    fireEvent.click(files.children[0].children[0].children[0]);
    expect(files.children[0].children[0].children[0].children[0]).toHaveTextContent("[-]");
    expect(files.children[0].children[0].children[1].children[0].children[0]).toHaveTextContent("+");
    expect(files.children[0].children[2].children[1].children[2].children[0]).toHaveTextContent("+");
    expect(files.children[0].children[3].children[0].children[0]).toHaveTextContent("[+]");
    expect(files.children[0].children[4].children[0]).toHaveTextContent("+");
})

// 测试：点击没有子项的文件/文件夹时不应有任何变化
it('should do nothing on clicking the item if it has no sub files/folders', () => {
    fireEvent.click(files.children[0].children[0].children[0]);
    expect(files.children[0].children[0].children[0]).toHaveTextContent("node_modules");
    expect(files.children[0].children[0].children).toHaveLength(1);
    expect(files.children[0].children[0].children.length).toBe(1);
})

// 测试：双击文件应将其变为文件夹
it('should make an item a folder on double clicking it', () => {
    fireEvent.doubleClick(files.children[0].children[0].children[0]);
    expect(files.children[0].children[0].children[0]).toHaveTextContent("node_modules");
    expect(files.children[0].children[0].children[0].children[0]).toHaveTextContent("[+]");
    fireEvent.click(files.children[0].children[0].children[0]);
    expect(files.children[0].children[0].children[0].children[0]).toHaveTextContent("[-]");
    expect(files.children[0].children[0].children[1].children[0].children[0]).toHaveTextContent("+");
})

// 测试：点击文件夹应切换展开/折叠，+ 和 - 符号随之变化
it('should toggle the expansion of a file on clicking + or - sign of item', () => {
    expect(files.children[0].children[2].children[0]).toHaveTextContent("src");
    expect(files.children[0].children[2].children[0].children[0]).toHaveTextContent("[-]");
    expect(files.children[0].children[2].children).toHaveLength(2);
    expect(files.children[0].children[2].children[1].children).toHaveLength(3);
    fireEvent.click(files.children[0].children[2].children[0]);
    expect(files.children[0].children[2].children[0].children[0]).toHaveTextContent("[+]");
    expect(files.children[0].children[2].children).toHaveLength(1);
})

// 测试：点击 + 按钮应从输入框读取文件名并添加到列表
it('should add the file by taking filename from input box on clicking the + button', () => {
    fireEvent.change(inputBox, {target: {value: "NewFile"}});
    fireEvent.click(files.children[0].children[4].children[0]);
    expect(files.children[0].children[4].children[0]).toHaveTextContent("NewFile");
    expect(files.children[0].children).toHaveLength(6);
});

// 测试：添加新文件后应清空输入框
it("should clear the input box on adding a new file", () => {
    fireEvent.change(inputBox, {target: {value: "NewFile"}});
    fireEvent.click(files.children[0].children[4].children[0]);
    expect(files.children[0].children[4].children[0]).toHaveTextContent("NewFile");
    expect(files.children[0].children).toHaveLength(6);
    expect(inputBox).toHaveValue("");
})

// 测试：输入框为空时点击 + 按钮应弹出提示
it("should display an alert on clicking + button is input box is empty", () => {
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => undefined);
    fireEvent.change(inputBox, {target: {value: ""}});
    fireEvent.click(files.children[0].children[4].children[0]);
    expect(alertMock).toHaveBeenCalledWith(
        "Please enter a file name in the input box"
    );
})
