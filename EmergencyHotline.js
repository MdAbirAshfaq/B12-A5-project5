const serviceName1 = document.getElementById("service-name1").innerText
const serviceName2 = document.getElementById("service-name2").innerText
const serviceName3 = document.getElementById("service-name3").innerText
const serviceName4 = document.getElementById("service-name4").innerText
const serviceName5 = document.getElementById("service-name5").innerText
const serviceName6 = document.getElementById("service-name6").innerText
const serviceName7 = document.getElementById("service-name7").innerText
const serviceName8 = document.getElementById("service-name8").innerText
const serviceName9 = document.getElementById("service-name9").innerText

const serviceNumber1 = document.getElementById("service-number1").innerText
const serviceNumber2 = document.getElementById("service-number2").innerText
const serviceNumber3 = document.getElementById("service-number3").innerText
const serviceNumber4 = document.getElementById("service-number4").innerText
const serviceNumber5 = document.getElementById("service-number5").innerText
const serviceNumber6 = document.getElementById("service-number6").innerText
const serviceNumber7 = document.getElementById("service-number7").innerText
const serviceNumber8 = document.getElementById("service-number8").innerText
const serviceNumber9 = document.getElementById("service-number9").innerText


let coinNumber = parseInt(document.getElementById('coin').textContent)
const heartBtns = document.querySelectorAll(".heart-btn")
let historyData = [];


// function for heart count
let count = 0;

    function incrementCounter() {
      count += 1;
      document.getElementById("heart-count").textContent = count;
    }




// function for call number
// card-1
document.getElementById("call-number1")
    .addEventListener('click', function(){
        alert(serviceName1+ "\n" +serviceNumber1);
        if (coinNumber >= 20) {
        coinNumber -= 20;
        document.getElementById('coin').textContent = coinNumber;

      const data = {
        name: serviceName1,
        number: serviceNumber1,
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


// card-2
document.getElementById("call-number2")
    .addEventListener('click', function(){
        alert(serviceName2+ "\n" +serviceNumber2);
        if (coinNumber >= 20) {
        coinNumber -= 20;
        document.getElementById('coin').textContent = coinNumber;

      const data = {
        name: serviceName2,
        number: serviceNumber2,
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


// card-3
document.getElementById("call-number3")
    .addEventListener('click', function(){
        alert(serviceName3+ "\n" +serviceNumber3);
        if (coinNumber >= 20) {
        coinNumber -= 20;
        document.getElementById('coin').textContent = coinNumber;

      const data = {
        name: serviceName3,
        number: serviceNumber3,
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


// card-4
document.getElementById("call-number4")
    .addEventListener('click', function(){
        alert(serviceName4+ "\n" +serviceNumber4);
        if (coinNumber >= 20) {
        coinNumber -= 20;
        document.getElementById('coin').textContent = coinNumber;

      const data = {
        name: serviceName4,
        number: serviceNumber4,
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


// card-5
document.getElementById("call-number5")
    .addEventListener('click', function(){
        alert(serviceName5+ "\n" +serviceNumber5);
        if (coinNumber >= 20) {
        coinNumber -= 20;
        document.getElementById('coin').textContent = coinNumber;

      const data = {
        name: serviceName5,
        number: serviceNumber5,
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


// card-6
document.getElementById("call-number6")
    .addEventListener('click', function(){
        alert(serviceName6+ "\n" +serviceNumber6);
        if (coinNumber >= 20) {
        coinNumber -= 20;
        document.getElementById('coin').textContent = coinNumber;

      const data = {
        name: serviceName6,
        number: serviceNumber6,
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


// card-7
document.getElementById("call-number7")
    .addEventListener('click', function(){
        alert(serviceName7+ "\n" +serviceNumber7);
        if (coinNumber >= 20) {
        coinNumber -= 20;
        document.getElementById('coin').textContent = coinNumber;

      const data = {
        name: serviceName7,
        number: serviceNumber7,
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


// card-8
document.getElementById("call-number8")
    .addEventListener('click', function(){
        alert(serviceName8+ "\n" +serviceNumber8);
        if (coinNumber >= 20) {
        coinNumber -= 20;
        document.getElementById('coin').textContent = coinNumber;

      const data = {
        name: serviceName8,
        number: serviceNumber8,
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


// card-9
document.getElementById("call-number9")
    .addEventListener('click', function(){
        alert(serviceName9+ "\n" +serviceNumber9);
        if (coinNumber >= 20) {
        coinNumber -= 20;
        document.getElementById('coin').textContent = coinNumber;

      const data = {
        name: serviceName9,
        number: serviceNumber9,
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
// card-1
document.getElementById("copy-number1")
    .addEventListener('click', function(){
        const number = serviceNumber1; 
        navigator.clipboard.writeText(number)
        .then(() => {
          alert(" The number is copied:" + "\n" + serviceNumber1);
        })
    }
)


// card-2
document.getElementById("copy-number2")
    .addEventListener('click', function(){
        const number = serviceNumber2; 
        navigator.clipboard.writeText(number)
        .then(() => {
          alert(" The number is copied:" + "\n" + serviceNumber2);
        })
    }
)
// card-3
document.getElementById("copy-number3")
    .addEventListener('click', function(){
        const number = serviceNumber3; 
        navigator.clipboard.writeText(number)
        .then(() => {
          alert(" The number is copied:" + "\n" + serviceNumber3);
        })
    }
)
// card-4
document.getElementById("copy-number4")
    .addEventListener('click', function(){
        const number = serviceNumber4; 
        navigator.clipboard.writeText(number)
        .then(() => {
          alert(" The number is copied:" + "\n" + serviceNumber4);
        })
    }
)
// card-5
document.getElementById("copy-number5")
    .addEventListener('click', function(){
        const number = serviceNumber5; 
        navigator.clipboard.writeText(number)
        .then(() => {
          alert(" The number is copied:" + "\n" + serviceNumber5);
        })
    }
)
// card-6
document.getElementById("copy-number6")
    .addEventListener('click', function(){
        const number = serviceNumber6; 
        navigator.clipboard.writeText(number)
        .then(() => {
          alert(" The number is copied:" + "\n" + serviceNumber6);
        })
    }
)
// card-7
document.getElementById("copy-number7")
    .addEventListener('click', function(){
        const number = serviceNumber7; 
        navigator.clipboard.writeText(number)
        .then(() => {
          alert(" The number is copied:" + "\n" + serviceNumber7);
        })
    }
)
// card-8
document.getElementById("copy-number8")
    .addEventListener('click', function(){
        const number = serviceNumber8; 
        navigator.clipboard.writeText(number)
        .then(() => {
          alert(" The number is copied:" + "\n" + serviceNumber8);
        })
    }
)
// card-9
document.getElementById("copy-number9")
    .addEventListener('click', function(){
        const number = serviceNumber9; 
        navigator.clipboard.writeText(number)
        .then(() => {
          alert(" The number is copied:" + "\n" + serviceNumber9);
        })
    }
)

// ............................................
let countCopy = 0;

    function incrementCounterCopy() {
      countCopy += 1;
      document.getElementById("copy-count").textContent = countCopy;
    }
// .......................................................

// delete all history
document.getElementById("clear-history-btn")
    .addEventListener("click", function () {
        document.getElementById("call-log").innerHTML = "";
        historyData = [];
        addHistory();
    })


 