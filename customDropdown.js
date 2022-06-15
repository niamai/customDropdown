$(".sel_head + ul li input").click(function ()
{
  var input_name = $(this).attr("name");
  // console.log(input_name);
  // console.log($("input[name=" + input_name + "]:checked + span").text());
  $(".sel_head[data-name=" + input_name + "] span").text($("input[name=" + input_name + "]:checked + span").text());
});