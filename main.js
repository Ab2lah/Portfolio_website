function showTooltip(event, tooltipId) {
    event.preventDefault();
    var tooltip = document.getElementById(tooltipId);
    if (tooltip.style.display === "none" || tooltip.style.display === "") {
      tooltip.style.display = "inline-block";
      tooltip.addEventListener('click', function (e) {
        e.stopPropagation();
        copyToClipboard(tooltip.textContent);
        tooltip.style.display = "none"; // Hide tooltip after copying
      });
    } else {
      tooltip.style.display = "none";
    }
  }
  
  function copyToClipboard(text) {
    var tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Email copied to clipboard: " + text);
  }
  