<template>
  <div class="inner b1">
    <div class="in_box">
      <div class="in_find">
        <em>*</em>手机：
      </div>
      <input type="text" placeholder="输入账号绑定的手机号" v-model="user_phone" maxlength="11" />
    </div>
    <div class="in_box activers">
      <div class="in_find">
        <em>*</em>手机验证码：
      </div>
      <input class="action" type="text" placeholder="请输入手机验证码" v-model="user_code" />
      <span class="ac_text" v-show="show" @click="getCode()">获取验证码</span>
      <span v-show="!show" class="count">{{count}}</span>
    </div>
    <div class="goback">
      <div class="goback_ok s1" @click="onrouter()">返回登录</div>
      <div class="goback_ok on_border" @click="next_step()">下一步</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      user_phone: "",
      user_code: "",
      count: "",
      timer: null,
      code: null
    };
  },
  methods: {
    next_step() {
      if (this.user_code != this.code && this.code == null) {
        this.$message.error("验证码错误！");
        return;
      } else {
        this.$router.push({ name: "FindStep2" });
      }
      let obj = {};
      console.log("2222", obj);
      obj.user_phone = this.user_phone;
      obj.user_code = this.user_code;
      // var json = JSON.stringify(obj);
    },
    getCode() {
      console.log("aaa", this.getCode);
      var reg = /^1[34578]\d{9}$/;
      if (reg.test(this.user_phone) == false) {
        this.$message.error("手机号格式不正确！");
        return;
      }
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.code = 123456; // 验证码
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    onrouter() {
      this.$router.push({ name: "LandingPage" });
    },
    onrouters() {
      this.$router.push({ name: "LandingPage" });
    }
  }
};
</script>

<style scoped lang="scss">
.in_box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 17px;
  padding-left: 10px;

  .in_find {
    text-align: right;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #666;
  }
  input {
    width: 300px;
    height: 32px;
    line-height: 32px;
    padding-left: 10px;
    font-size: 14px;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    color: #333;
    background-color: #fff;
    color: #333;
    cursor: text;
    outline: none;
    margin-left: 10px;
    &::-webkit-input-placeholder {
      color: #EBEBEB;
    }
    &:focus {
      border-color: #ea5513;
      outline: 0;
      box-shadow: 0 0 0 2px rgba(234, 85, 19, 0.2);
    }
  }

  .action {
    width: 180px;
    height: 32px;
  }
  .ac_text {
    border: 1px solid #ebebeb;
    width: 110px;
    line-height: 32px;
    text-align: center;
    border-radius: 4px;
    margin-left: 10px;
    font-size: 14px;
    color: #666;
  }
  .count {
    border: 1px solid #ebebeb;
    width: 110px;
    line-height: 32px;
    text-align: center;
    border-radius: 4px;
    margin-left: 10px;
    font-size: 14px;
    color: #666;
  }
  .ac_text:hover {
    border: 1px solid #ea5513;
    color: #ea5513;
    cursor: pointer;
  }
  em {
    color: red;
    margin-right: 5px;
  }
}
.activers {
  position: relative;
  right: 21px;
}
.goback {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  .goback_ok {
    font-size: 14px;
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 5px;
    margin-left: 20px;
    border: 1px solid #ebebeb;
    background-color: #fff;
    color: #5a5a5a;
    cursor: pointer;
    &.s1 {
      &:hover {
        border-color: #ea5513;
        color: #ea5513;
      }
    }
    &.on_border {
      &:hover {
        color: #fff;
        background: #fe881f;
      }
    }
  }
  .on_border {
    background: #feac63;
    color: #fff;
  }
}
</style>