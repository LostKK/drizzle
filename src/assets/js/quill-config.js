// toolbar工具栏的工具选项（默认展示全部）
const toolOptions = [
  ["bold", "italic", "underline", "strike"], // 切换按钮
  [{ list: "ordered" }, { list: "bullet" }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ["image", "video"], //上传图片、上传视频
  ["clean"],
  ["saveBtn"]
];
const handlers = {
  shadeBox: null,
  saveBtn: function() {
    //添加工具方法
    alert("我新添加的工具方法");
  },
  image: function(value) {
    if (value) {
      document.getElementById("upload").click();
    } else {
      this.quill.format("image", false);
    }
  }
};

export default {
  placeholder: "",
  theme: "snow", // 主题
  modules: {
    toolbar: {
      container: toolOptions, // 工具栏选项
      handlers: handlers // 事件重写
    }
  },
  initButton: function() {
    //在使用的页面中初始化按钮样式
    const sourceEditorButton = document.querySelector(".ql-saveBtn");
    sourceEditorButton.style.cssText =
      "width:80px; border:1px solid #ccc; border-radius:5px;";
    sourceEditorButton.innerText = "保存";
  }
};
