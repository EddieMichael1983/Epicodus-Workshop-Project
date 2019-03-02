$(document).ready(function() {
  $("#goal-button").click(function() {
    $("#goal-list").append("<li class='list-item'>" + $("#new-goal").val() +"</li>");
    $("#new-goal").val("");
  })
})
