$(function () {
  const requestPath = "/stt-sandbox-demosite/frametest.html";

  // オリジナルホストのURLを作成する
  const alternateJa = $("link[rel='alternate'][hreflang='ja']");
  const requestUrl = alternateJa
    ? new URL(requestPath, alternateJa.attr("href"))
    : new URL(requestPath, new URL(location.href));

  console.log("requestURL %o", requestUrl);

  $.ajax({
    type: "GET",
    url: requestUrl.href,
  })
    .done(function () {})
    .fail(function () {})
    .always(function (result) {
      console.log("結果 %o", result);
    });
});
