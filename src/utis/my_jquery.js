import $ from "jquery";

var mx = {};
// 获取表单数据
mx.getFormData = query => {
  var str = "";
  $(query)
    .find("[type=text],[type=password],[type=hidden]")
    .each((key, item) => {
      str += $(item).attr("name") + "=" + $(item).val() + "&";
    });
  $(query)
    .find("[type=checkbox]")
    .each((key, item) => {
      item.checked
        ? (str += $(item).attr("name") + "=" + $(item).val() + "&")
        : null;
    });
  return str.substr(0, str.length - 1);
};
// 抓取URL参数
mx.getQuery = variable => {
  var query = window.location.search0.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
};

export default mx;
