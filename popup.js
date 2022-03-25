$(document).ready(function () {
  // Dashboards
  generateLinkButtons(dashboard_links, "dashboard-buttons", "btn-primary");

  // Logs
  generateLinkButtons(log_links, "logs-buttons", "btn-success");

  // AWS
  generateLinkButtons(aws_links, "aws-buttons", "btn-danger");
});

function generateLinkButtons(links, insertDiv, buttonClass) {
  $.each(links, function (key, value) {
    var $input = $(
      `<div class="row m-2"><a href="${value}" class="btn ${buttonClass} btn-sm" role="button" target="_blank">${key}</a></div>`
    );
    $input.appendTo($("#" + insertDiv));
  });
}
