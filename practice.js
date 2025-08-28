<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Call History</title>
  <style>   
    body {
  font-family: sans-serif;
  background: #f5fff5;
  padding: 20px;
}
.card, .history {
  background: #fff;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
button {
  background: green;
  color: #fff;
  border: none;
  padding: 8px 15px;
  border-radius: 8px;
  cursor: pointer;
}
.history-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.log-entry {
  background: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
}
.log-left {
  font-size: 14px;
}
.log-time {
  font-size: 12px;
  color: gray;
}

  </style>
</head>
<body>

  <!-- Fire Service -->
  <div class="card">
    <h3>Fire Service</h3>
    <p>999</p>
    <button class="call-btn" data-name="Fire Service Number" data-number="999">Call</button>
  </div>

  <!-- Anti-Corruption -->
  <div class="card">
    <h3>Anti-Corruption</h3>
    <p>106</p>
    <button class="call-btn" data-name="Anti-Corruption Helpline" data-number="106">Call</button>
  </div>

  <!-- Call History -->
  <div class="history">
    <div class="history-header">
      <strong>📞 Call History</strong>
      <button id="clear-btn">Clear</button>
    </div>
    <div id="call-log">
      <p style="color:gray;">No calls yet...</p>
    </div>
  </div>

  <script>
    function addCall(name, number) {
  const time = new Date().toLocaleTimeString();

  // Create the main container
  const entry = document.createElement("div");
  entry.className = "log-entry";

  // Left side (name + number)
  const left = document.createElement("div");
  left.className = "log-left";

  const nameText = document.createElement("b"); // instead of <strong>
  nameText.innerText = name;

  const br = document.createElement("br");
  const numberText = document.createTextNode(number);

  left.appendChild(nameText);
  left.appendChild(br);
  left.appendChild(numberText);

  // Right side (time)
  const timeDiv = document.createElement("div");
  timeDiv.className = "log-time";
  timeDiv.innerText = time;

  // Put left + right into entry
  entry.appendChild(left);
  entry.appendChild(timeDiv);

  // Remove "No calls yet..." if it's there
  if (callLog.children[0] && callLog.children[0].tagName === "P") {
    callLog.innerHTML = "";
  }

  // Add new entry at top
  callLog.prepend(entry);
}

  </script>
</body>
</html>
