const serviceName = document.getElementById("service-name").innerText
const serviceNumber = document.getElementById("service-number").innerText
let coinNumber = parseInt(document.getElementById('coin').textContent)
const heartBtns = document.querySelectorAll(".heart-btn")
let historyData = [];
// function for heart count
document.getElementById("heart")
    .addEventListener('click', function(){
        const heartNumber = document.getElementById("heart-count")
        let count = 0;
        count++ 
        heartNumber.innerText = count;
    })

// function for call number
document.getElementById("call-number")
    .addEventListener('click', function(){
        alert(serviceName+ "\n" +serviceNumber);
        if (coinNumber >= 20) {
        coinNumber -= 20;
        document.getElementById('coin').textContent = coinNumber;

      const data = {
        name: serviceName,
        number: serviceNumber,
        time: new Date().toLocaleTimeString([], { 
          hour: '2-digit', 
          minute: '2-digit', 
          second: '2-digit' 
        })
      };

      historyData.push(data);
      addHistory();

    } else {
      alert("Not enough coins!");
      return; 
    }
    })

    // crate div 
function addHistory() {
    const parent = document.getElementById("call-log");
    parent.innerHTML = "";
    for (let data of historyData) {
        const div = document.createElement("div");
        div.className = "flex justify-between items-center p-2 bg-gray-200 rounded-xl mt-3";
        div.innerHTML = `
            <div>
                <h1>${data.name}</h1>
                <span>${data.number}</span>
            </div>
            <div>
                <span>${data.time}</span>
            </div>
        `;
        parent.appendChild(div);
    }
}


//function for copy number
document.getElementById("copy-number")
    .addEventListener('click', function(){
        const number = serviceNumber; 
        navigator.clipboard.writeText(number)
        .then(() => {
          alert(" The number is copied:" + "\n" + serviceNumber);
        })
        const copyCount = document.getElementById("copy-count")
        let count = 0;
        count++ 
        copyCount.innerText = count;
    }
)



// delete all history
document.getElementById("clear-history-btn")
    .addEventListener("click", function () {
        document.getElementById("call-log").innerHTML = "";
        historyData = [];
        addHistory();
    })


 