import React, { useState } from "react";
import { Main, AddButton, Editor } from "./styled";

const initalNote = {
  text: "",
  hidden: false,
};

const localNotes = (function () {
  let info = JSON.parse(localStorage.getItem("notes"));
  if (!!info) {
    return info;
  } else {
    const tmp = JSON.parse(JSON.stringify(initalNote));
    return [tmp];
  }
})();

function NotesApp() {
  const [noteData, setNoteData] = useState([...localNotes]);

  // 添加 Note
  const handleAdd = () => {
    let arr = [...noteData];
     const tmp = JSON.parse(JSON.stringify(initalNote));
    arr.push(tmp);
    setNoteData(arr);
    localStorage.setItem("notes", JSON.stringify(arr));
  };

  // 编辑还是显示
  const handleHidden = (index) => {
    let arr = [...noteData];
    arr[index].hidden = !arr[index].hidden;
    setNoteData(arr);
  };

  // 删除某个note
  const handleDelete = (index) => {
    let arr = [...noteData];
    arr.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(arr));
    setNoteData(arr);
  };

  // 处理输入
  const handleInput = (e, index) => {
    let arr = [...noteData];
    arr[index].text = e.target.value;
    localStorage.setItem("notes", JSON.stringify(arr));
  };

  return (
    <Main>
      {noteData.map((item, index) => {
        return (
          <Editor key={index}>
            <div className="header">
              <button onClick={() => handleHidden(index)}>edit/show</button>
              <button onClick={() => handleDelete(index)}>delete</button>
            </div>
            <div
              className={item.hidden ? "" : "hidden"}
              style={{ width: "100%", height: "100%" }}
              dangerouslySetInnerHTML={{ __html: item.text }}
            ></div>
            <textarea
              onInput={(e) => handleInput(e, index)}
              className={item.hidden ? "hidden" : ""}
              defaultValue=""
              value={item.value}
            />
          </Editor>
        );
      })}
      <AddButton onClick={handleAdd}>+Add Edit</AddButton>
    </Main>
  );
}

export default NotesApp;
