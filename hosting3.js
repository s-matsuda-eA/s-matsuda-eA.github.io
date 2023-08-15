$(function () {
  // url生成
  const originalUrl = $("link[rel='alternate'][hreflang='ja']");
  console.log(originalUrl.attr("href"));
  let requestUrl = "";

  // $.ajax({
  //   type: "GET",
  //   url: requestUrl,
  // })
  //   .done(function () {})
  //   .fail(function () {})
  //   .always(function (result) {
  //     console.log("結果 %o", result);
  //   });
});
