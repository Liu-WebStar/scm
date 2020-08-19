<template>
      <div class="login_footer">
        <ul class="link">
          <li>
            <a href="http://www.city-office.com.cn/">一线达通商城</a>
          </li>
          <li>
            <a href="http://www.city-office.com.cn/fj_topic.php">解决方案</a>
          </li>
          <li>
            <a href="http://www.city-office.com.cn/qualified.php">荣誉资质</a>
          </li>
          <li>
            <a href="http://www.city-office.com.cn/about_us.php">关于我们</a>
          </li>
        </ul>
        <div class="copyright">
          <span>
            © 2005-2019 一线达通 版权所有，并保留所有权利
            ICP备案证书号：京120072789号-1
          </span>
          <span>北京市西城区莲花池东路3号天云五金大楼三层 Tel: 400-008-6826</span>
        </div>
      </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
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
</style>