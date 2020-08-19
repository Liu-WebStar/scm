<template>
  <div class="home_box">
    <div class="home_header">
      <div class="w">
        <img class="home_img" src="../assets/images/logo2.png" alt />
        <span class="home_text">供应链管理系统</span>
        <a class="home_right">还没入驻？立即前往申请</a>
        <img class="home_zs" src="../assets/images/new_wps.png" alt />
      </div>
    </div>
    <div class="home_body">
      <div class="w">
        <div class="login_sign">
          <div class="login_title">账号密码登录</div>
          <div class="login_item">
            <input
              size="large"
              type="text"
              placeholder="手机号/用户名"
              name="username"
              v-model="formData.user_name"
            />
            <img class="p_r1" src="../assets/images/user_name.png" alt />
          </div>
          <div class="login_item">
            <input
              size="large"
              ref="pw"
              type="password"
              name="password"
              placeholder="密码"
              v-model="formData.password"
            />
            <img class="p_r1 s2" src="../assets/images/new_user.png" alt />
          </div>
          <div class="tips" :class="{hide:show_tips==false}">
            帐号或密码错误，请重新输入或者
            <span @click="onlink">找回密码</span>
          </div>
          <div class="remember">
            <div class="r1"></div>
            <template class="reg_checked">
              <el-checkbox v-model="checked">记住用户名</el-checkbox>
            </template>
            <!-- <router-link class="r2" to="/find/step1" target="_blank">忘记密码？</router-link> -->
            <div class="r2" @click="goback">忘记密码？</div>
          </div>
          <div class="goback" @click="saveRemember">登录</div>
        </div>
      </div>
    </div>
    <component-footer></component-footer>
  </div>
</template>

<script>
import ComponentFooter from "../components/user/ComponentFooter";
import $ from "jquery";

export default {
  data() {
    return {
      checked: false,
      remember_user: false,
      formData: {
        user_name: "",
        password: "",
    
      },
      show_tips:false
    };
  },
  methods: {
    saveRemember() {
      console.log(this.formData);
    },
    onlink() {
      this.$router.push({ name: "FindStep1" });
    },
    goback() {
      this.$router.push({ name: "FindStep1" });
    }
  },
  components: {
    ComponentFooter
  }
};
</script>
<style lang="scss" scoped>
.home_box {
  display: flex;
  flex-direction: column;
  .home_header {
    height: 100px;

    .w {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      // min-height: 500px;
      flex-shrink: 0;

      .home_img {
      }
      .home_text {
        width: 223px;
        height: 31px;
        border-left: 2px solid #f2f2f2;
        /* text-align: center; */
        line-height: 31px;
        font-weight: 650;
        font-size: 26px;
        color: #525150;
        margin-left: 14px;
        padding-left: 14px;
        flex-grow: 1;
      }
      .home_right {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        line-height: 31px;
        margin: 34px 0;

        font-weight: 650;
        color: #02a7f0;
        text-align: right;
        cursor: pointer;
      }
      .home_zs {
        display: flex;
        align-items: center;
        margin-right: 30px;
        margin-left: 10px;
      }
    }
  }
  .home_body {
    flex: 1;
    background: url("../assets/images/new_login.png");
    background-size: 100% 100%;
    display: flex;
    .w {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      min-height: 500px;
      flex-shrink: 0;
      .login_sign {
        min-height: 380px;
        background: rgba(255, 255, 255, 1);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        color: #727272;
        .login_title {
          margin-top: 40px;
          margin-bottom: 40px;
          font-weight: 800;
          line-height: 28px;
          text-align: center;
          color: rgba(52, 52, 52, 1);
          font-size: 24px;
        }
        .login_item {
          position: relative;
          input {
            height: 50px;
            width: 300px;
            border: 1px solid #f4f4f4;
            background: #f9f9f9;
            font-size: 14px;
            margin: 0px 16px;
            outline: none;
            padding-left: 37px;
            &::-webkit-input-placeholder {
              color: #cccccc;
            }
            &:hover{
              border: 1px solid #E11A1A;
            }
          }

          .p_r1 {
            left: 25px;
            width: 18px;
            height: 20px;
            position: absolute;
            top: 50%;
            margin-top: -10px;
            &.s2 {
              width: 16px;
            }
          }
          & + .login_item {
            margin-top: 30px;
          }
        }
        .tips {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-size: 14px;
          color: rgba(225, 26, 26, 1);
          line-height: 14px;
          margin-top: 10px;
          margin-left: 16px;
          span {
            color: #1a85e1;
          }
          &.hide{
            opacity:0;
          }
        }
        .remember {
          margin-top: 16px;
          user-select: none;
          // margin-top: 10px;
          line-height: 14px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          color: #878787;

          .r1 {
            cursor: pointer;
            position: relative;
            top: -5px;
            input,
            label {
              vertical-align: middle;
            }
          }
          .el-checkbox {
            margin-left: -50px;
          }
          .r2 {
            font-size: 14px;
            color: #bbbbbb;
            &:hover {
              color: #fe881f;
            }
            margin-left: 100px;
          }
        }
        .goback {
          width: 300px;
          height: 40px;
          background: #fd9e49;
          border-radius: 6px 6px 6px 6px;
          border: none;
          font-size: 18px;
          margin: 20px auto;
          box-shadow: 0px 0px 4px 0px rgba(255, 108, 0, 0.3);
          text-align: center;
          line-height: 40px;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
  .login_footer {
    height: 100px;
    border-top: 1px solid #000;
    // margin-top: 200px;
    .link {
      padding-top: 30px;
      font-size: 0;
      text-align: center;
      li {
        display: inline-block;
        font-size: 12px;
        color: #343434;
        padding: 0 12px;
        & + li {
          border-left: 1px solid rgba(0, 0, 0, 0.2);
        }
        a {
          font-weight: bold;
        }
      }
    }
    .copyright {
      font-size: 12px;
      color: #555;
      text-align: center;
      margin-top: 11px;
    }
  }
}
</style>
