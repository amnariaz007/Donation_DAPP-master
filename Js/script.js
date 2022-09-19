async function connect(){
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
            // Acccounts now exposed
            // web3.eth.sendTransaction({/* ... */});
          
     accounts = await window.web3.eth.getAccounts();
     document.getElementById("btnn").innerHTML=  accounts[0].slice(0,4) + "..." + accounts[0].slice(-2) ;
    // this.setState({ account: accounts[0] });
    console.log("Sender :  " + accounts[0]);
            console.log('1111');
            //call function to connect contract
             ConnectToContract();

        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        // web3.eth.sendTransaction({/* ... */});
    }
    // Non-dapp browsers...
    else {
      alert("please install metamask")
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
}



function clicked(x) {
    if(x.id == "box1")
    { 
        x = window.location.href = "../pages/arts.html"
    }
    else if(x.id == "box2") {
        x = window.location.href = "../pages/education.html";
    }
    else if(x.id == "box3") {
        x = window.location.href = "../pages/environment.html";
    }
    else if(x.id == "box4") {
        x = window.location.href = "../pages/animals.html";
    }
    else if(x.id == "box5") {
        x = window.location.href = "../pages/disaster.html";
    }
    else if(x.id == "box6") {
        x = window.location.href = "../pages/health.html";
    }
    else if(x.id == "box7") {
        x = window.location.href = "../pages/army.html";
    }
    else if(x.id == "box8") {
        x = window.location.href = "../pages/humans.html";
    }

    else {
        x = window.location.href = "index.html#donations";
        alert("Invalid Selection");
    }
}