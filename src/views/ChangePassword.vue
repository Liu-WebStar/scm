<template>
  <div class="rieve_box">
    <div class="center">
      <div class="rieve_header">
        <img class="home_img" src="../assets/images/logo2.png" alt />
        <div class="rieve_text">【一线达通业务平台】</div>
      </div>
      <div class="rieve_boody">
        <div class="rieve_title">找回密码</div>
        <div class="find">
          <div class="number">1</div>
          <span class="find_text">验证手机号</span>
          <div class="find_trans"></div>
          <div class="number find_coor">2</div>
          <span class="find_text">重置密码</span>
        </div>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <component-footer></component-footer>
    </div>
  </div>
</template>
<script>
import ComponentFooter from "../components/user/ComponentFooter";
export default {
  data() {
    return {};
  },
  methods: {
    next_step() {
      if (this.user_code != this.code && this.code == null) {
        alert("验证码错误");
        return;
      } else {
        this.$router.push({ name: "ChangePassword" });
      }
      let obj = {};
      console.log("2222", obj);
      obj.user_phone = this.user_phone;
      obj.user_code = this.user_code;
      // var json = JSON.stringify(obj);
    }
  },
  components: {
    ComponentFooter
  }
};
</script>
<style lang="scss" scoped>
.rieve_box {
  display: flex;
  flex-direction: column;
  background: #f3f3f3;
  min-height: 100vh;
  background: url("../assets/images/user_background.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .center {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    min-height: 500px;
    flex-shrink: 0;
    padding-top: 100px;
    .rieve_header {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 788px;
      height: 60px;
      .home_img {
      }
      .rieve_text {
        line-height: 53px;
        // height: 53px;
        // margin-left: 40px;
        font-size: 24px;
        color: #999999;
      }
    }
    .rieve_boody {
      flex-shrink: 1;
      width: 900px;
      height: 500px;
      background: url("../assets/images/card_bj2.png");
      background-size: 100% 100%;
      margin-top: 30px;
      .rieve_title {
        width: 793px;
        height: 60px;
        background: #ffbe7f;
        line-height: 60px;
        text-align: center;
        color: white;
        font-size: 24px;
        margin: 0 auto;
        position: relative;
        left: 3px;
      }
      .find {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px 0px 50px;
        flex: 1;
        .number {
          width: 35px;
          height: 35px;
          border-radius: 20px;
          background: #fe881f;
          line-height: 35px;
          text-align: center;
          color: white;
          font-size: 18px;
        }
        .find_coor {
          border: 1px solid #cccccc;
          color: #cccccc;
          background: #fff;
        }
        .find_text {
          display: flex;
          align-items: center;
          font-size: 20px;
          margin-left: 10px;
          color: #999999;
        }

        .find_trans {
          width: 120px;
          height: 2px;
          background: #ebebeb;
          // margin-top: 20px;
          margin-right: 20px;
          margin-left: 20px;
        }
      }
    }

    .login_footer {
      height: 100px;
      // border-top: 1px solid #000;
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
}
</style>