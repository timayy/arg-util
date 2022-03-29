window.addEventListener('DOMContentLoaded', () => {

  // Wrap in async tab query.
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    
    var pageType = getPageType(tabs);

    // Display page based on URL.
    displayDetails(pageType);

    console.log(tabs[0])

    // chrome.scripting.executeScript(
    //   {
    //     target: {tabId: tabs[0].id, allFrames: true},
    //     func: getTitle,
    //   },
    //   (injectionResults) => {
    //     for (const frameResult of injectionResults)
    //       console.log('Frame Title: ' + frameResult.result);
    //   });

    // chrome.tabs.sendMessage(tabs[0].id, {command: 'getDom'}, response => {
    //   console.log('Received the following DOM content:\n' + response);
    // });


    // var startDateTime = getDateTimeOfLabelsSibling('Start time:');
    // var rampUpTime = parseInt(getDateTimeOfLabelsSibling('Ramp up time:'));
    // var steadyStateTime = parseInt(getDateTimeOfLabelsSibling('Steady state time:'));

    // /* Convert times. */
    // startDateTime = Date.parse(startDateTime);
    // var endDateTime = startDateTime + ((rampUpTime + steadyStateTime) * 1000);



    // Dashboards.
    generateLinkButtons(dashboard_links, "dashboard-buttons", "btn-primary");

    // Logs.
    generateLinkButtons(log_links, "logs-buttons", "btn-success");

    // AWS.
    generateLinkButtons(aws_links, "aws-buttons", "btn-danger");
  });
});

function getTitle() {
  return document.title;
}

function generateLinkButtons(links, insertDiv, buttonClass) {
  $.each(links, function (key, value) {
    var $input = $(
      `<div class="row m-2"><a href="${value}&startTimeUTC=startDateTime&endTimeUTC=endDateTime" class="btn ${buttonClass} btn-sm" role="button" target="_blank">${key}</a></div>`
    );
    $input.appendTo($("#" + insertDiv));
  });
}

function getPageType(tabs) {
  let currentUrl = String(tabs[0].url);

  if (currentUrl.includes("product-fabric.atlassian.net") > -1 && currentUrl.includes("Standard")) {
    return "arg";
  }

  else if (currentUrl.includes("perfview.prod.atl-paas.net") && currentUrl.includes("test-metrics")) {
    return "perf";
  }

  return "none"
}

function displayDetails(pageType) {
  if (pageType == "arg") {
    $("#test-details-not-found").css("display", "none");
  }

  else if (pageType == "perf") {
    $("#test-details-not-found").css("display", "none");
  }

  else {
    $("#test-details").css("display", "none");
    $("#test-details-not-found").css("display", "block");
  }
}

function getDateTimeOfLabelsSibling(labelText) {
  var xpath = `//strong[contains(text(), '${labelText}')]`;
  var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

  return matchingElement.nextSibling.innerText;;
}
