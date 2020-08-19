<template>
  <div>
    <div class="in_box">
      <div class="in_find">
        <em>*</em>请设置密码:
      </div>
      <input type="text" placeholder="请输入6~20位数字+字谜密码" v-model="getData.password" maxlength="20" />
    </div>
    <div class="in_box">
      <div class="in_find">
        <em>*</em>请确认密码:
      </div>
      <input
        class="s2"
        type="text"
        placeholder="请再次输入新密码"
        v-model="getData.on_password"
        maxlength="20"
      />
    </div>
    <div class="goback">
      <div class="goback_ok s1" @click="to_up">返回上一步</div>
      <div class="goback_ok on_border" @click="Submit">提交</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getData: {
        password: "",
        on_password: ""
      }
    };
  },
  methods: {
    to_up() {
      {
        this.$router.push({ name: "FindStep1" });
      }
    },
    Submit() {
      console.log("0000", this.getData);
    }
  }
};
</script>

<style scoped lang="scss">
.in_box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
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
      color: #ebebeb;
    }
    &:focus {
      border-color: #ea5513;
      outline: 0;
      box-shadow: 0 0 0 2px rgba(234, 85, 19, 0.2);
    }
  }
  .s2 {
    margin-top: 10px;
  }
  input:hover {
    border-color: #ea5513;
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
  padding-top: 50px;
  .goback_ok {
    font-size: 14px;
    width: 120px;
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
      margin-left: 0;
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