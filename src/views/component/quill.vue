<template>
  <div>
    <div class="editor">
      <quill-editor
        ref="text"
        v-model="context"
        class="myQuillEditor"
        :options="editorOption"
        style="height:100%;"
      />
    </div>

    <div style="display:none">
      <el-upload
        :action="uploadUrl"
        :on-success="handleSuccess"
        :file-list="fileList"
      >
        <el-button id="upload">点击上传</el-button>
      </el-upload>
    </div>

    <div style="display:none">
      <img src="" id="img" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
//quill图片可拖拽上传
import * as Quill from "quill"; //引入编辑器
import { ImageDrop } from "quill-image-drop-module";
import ImageResize from "quill-image-resize-module";

Quill.register("modules/imageDrop", ImageDrop);
Quill.register("modules/imageResize", ImageResize);

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // 切换按钮
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }], // 用户自定义按钮值
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // 上标/下标
  [{ indent: "-1" }, { indent: "+1" }], // 减少缩进/缩进
  [{ direction: "rtl" }], // 文本下划线

  [{ size: ["small", false, "large", "huge"] }], // 用户自定义下拉
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // 主题默认下拉，使用主题提供的值
  [{ font: [] }],
  [{ align: [] }],

  ["image", "video"], //上传图片、上传视频
  ["clean"]
];

export default {
  name: "quill",

  components: { quillEditor },

  watch: {
    context(newVal) {
      let quill = this.$refs.text.quill;
      if (quill) {
        if (newVal && newVal !== this.context) {
          // debugger;
          this.context = newVal;
          quill.clipboard.dangerouslyPasteHTML(newVal);
        } else if (!newVal) {
          quill.setText("");
        }
      }
    }
  },

  data() {
    return {
      uploadUrl: "https://test.mybox.lucky286.cn" + "/files/files",
      fileList: [],

      context: "<p></p>",

      editorOption: {
        modules: {
          toolbar: {
            container: toolbarOptions,
            handlers: {
              image: function(value) {
                if (value) {
                  document.getElementById("upload").click();
                } else {
                  this.quill.format("image", false);
                }
              }
            }
          },
          history: {
            delay: 1000,
            maxStack: 50,
            userOnly: false
          },
          imageDrop: true,
          imageResize: {
            imageResize: {
              //添加
              displayStyles: {
                //添加
                backgroundColor: "black",
                border: "none",
                color: "white"
              },
              modules: ["Resize", "DisplaySize", "Toolbar"] //添加
            }
          }
        }
      }
    };
  },

  mounted() {
    this.localPaste();
    this.textChange();
  },

  methods: {
    getQuill() {
      return this.context;
    },

    setQuill(val) {
      this.context = val;
    },

    clear() {
      this.context = "<p></p>";
    },

    handleSuccess(res) {
      //导入图片
      let quill = this.$refs.text.quill;
      if (res) {
        let length = quill.getSelection().index;
        quill.insertEmbed(length, "image", res.url);
        quill.setSelection(length + 1);
      } else {
        this.$message.error("图片上传失败");
      }
    },

    uploadToServer(file) {
      let quill = this.$refs.text.quill;
      //上传文件至服务器
      var url = Vue.axios.defaults.baseURL + "/files/files";
      var form = new FormData();
      form.append("file", file);
      axios({
        method: "post",
        url: url,
        data: form,
        headers: {
          "Content-Type": " multipart/form-data"
        }
      }).then(res => {
        let length = quill.getSelection().index;
        quill.insertEmbed(length, "image", res.data.url);
        quill.setSelection(length + 1);
      });
    },

    localPaste() {
      //自定义粘贴事件
      let quill = this.$refs.text.quill;

      quill.root.addEventListener(
        "paste",
        evt => {
          if (
            evt.clipboardData &&
            evt.clipboardData.files &&
            evt.clipboardData.files.length
          ) {
            evt.preventDefault();
            [].forEach.call(evt.clipboardData.files, file => {
              if (!file.type.match(/^image\/(gif|jpe?g|a?png|bmp)/i)) {
                return;
              }
              // console.log(evt.clipboardData.files[0]);
              this.uploadToServer(evt.clipboardData.files[0]);
            });
          }
        },
        false
      );
    },

    textChange() {
      var that = this;
      let quill = this.$refs.text.quill;
      quill.on("text-change", function(delta, oldDelta, source) {
        if (source === "user") {
          delta.ops.forEach(item => {
            if (item.insert && item.insert.image) {
              // this.uploadToServer(item.insert.image);

              const dataurl = item.insert.image;
              const file = that.dataURLtoBlob(dataurl);

              //上传文件至服务器
              var url = Vue.axios.defaults.baseURL + "/files/files";
              var form = new FormData();
              form.append("file", file);
              axios({
                method: "post",
                url: url,
                data: form,
                headers: {
                  "Content-Type": " multipart/form-data"
                }
              });
            }
          });
        }
      });
    },

    dataURLtoBlob(dataurl) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], {
        type: mime
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.editor {
  height: 100vh;
}
</style>
