const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});


function call() {
    var receiver = document.querySelector("input[name=tel]").value;
    var amount = document.querySelector("input[name=number]").value;
    localStorage.setItem("receiver", receiver);
    localStorage.setItem("amount", amount);


    if (!receiver || !amount) {
        return;
    }
    localStorage.setItem("receiver", receiver);
    localStorage.setItem("amount", amount);

    var ussd = `*126*9*${receiver}*${amount}%23`;

    window.open(`tel:${ussd}`);
}



function initialize() {
    document.querySelector("#pay-btn").addEventListener("click", call);
    var storedAmount = localStorage.getItem("amount");
    document.getElementById("amount").value = storedAmount;

    var storedReceiver = localStorage.getItem("receiver");
    document.getElementById("receiver").value = storedReceiver;
}