$(function () {
  $.ajax({
    type: "GET",
    url: "https://s-matsuda-ea.github.io/stt-sandbox-demosite/%E6%97%A5%E6%9C%AC%E8%AA%9E.html",
  })
    .done(function () {})
    .fail(function () {})
    .always(function (result) {
      window.alert("結果 %o", result);
    });
});
