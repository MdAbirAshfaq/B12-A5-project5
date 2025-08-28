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
