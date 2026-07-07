# React-TypeScript-File-Folder-Structure

React（TypeScript）：文件文件夹结构

Complete the component as shown to pass all the test cases.
Certain core React functionalities are already implemented.
The application has 2 components:
File - contains input box and FileList component.
FileList - displays the list of files and folders and lets the user add more files.
FileList —— 展示文件与文件夹列表，并允许用户添加更多文件。

The initialData is in the form:
`initialData` 的数据格式如下：

```json
{
  "name": "src",
  "isOpen": true,
  "files": [
    {
      "name": "App.tsx"
    },
    {
      "name": "components",
      "isOpen": false,
      "files": [{ "name": "File.tsx" }]
    }
  ]
}
```
The component should have the following functionalities:
Initially, the component should display the file folder structure according to the given initial data.
There should be a "+" button at the end of every folder.
Clicking a folder should toggle its expansion and change the + sign to - sign on expansion and vice versa.
Clicking a file should do nothing if it does not contain a file or a folder.
Double-clicking a file should make it a folder.
Clicking the "+" button should take the file name from the input box, add it to the required folder, and reset the input box.
点击 "+" 按钮时，应读取输入框中的文件名，将其添加到对应文件夹，并重置输入框。

Clicking the "+" button should, if the input box is empty, display an alert saying, "Please enter a file name in the input box".
如果输入框为空，点击 "+" 按钮应弹出提示："Please enter a file name in the input box"。

Note: Each item in the list is a `<li>` tag with two items `<button>` which contains a `<span>` for displaying [+] or [-] and a `<ul>` for displaying its sub files/folders, if any.
注意：列表中的每一项都是一个 `<li>`，其中包含一个 `<button>`（其内有用于显示 [+] 或 [-] 的 `<span>`），以及一个用于展示子文件/子文件夹的 `<ul>`（如果有）。

The following data-testid attributes are required in the component for the tests to pass:
为使测试通过，组件中需要包含以下 `data-testid` 属性：

| Attribute | Component |
|-----------|-----------|
| files | List of files and folders |
| input-box | Input box for adding new files |

| 属性 | 组件 |
|------|------|
| files | 文件与文件夹列表 |
| input-box | 用于添加新文件的输入框 |



Components have data-testid attributes for test cases and certain classes and ids for rendering purposes.
组件包含用于测试的 `data-testid` 属性，以及用于渲染的特定 class 和 id。

They should not be changed.
The files that should be modified are src/components/File.tsx and src/components/FileList.tsx.
需要修改的文件是 `src/components/File.tsx` 和 `src/components/FileList.tsx`。

