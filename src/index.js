// const { list } = require("postcss")

console.log('start')




//this is where it gets complicated
//if hover, shows the relevant steps to get a docking goign
//planning to show Prepare Files then Let's Dock!
function toLetsDockSecNavBar(e){

    var secNavBar = document.getElementById('secNavBar')

    //if the secondary nav bar contains hidden properties
    //remove those propertie and add transition effect and show 
    //the bar, else hide them
    if (secNavBar.classList.contains('scale-95','opacity-0') ){
        secNavBar.classList.remove('opacity-0','scale-95','transition','ease-in')
        secNavBar.classList.add('transition','ease-out','duration-500','opacity-100','scale-100')
    

    }else if (secNavBar.classList.contains('opacity-100','scale-100') ) {
        secNavBar.classList.remove('opacity-100','scale-100','transition','ease-out','duration-500')
        secNavBar.classList.add('opacity-0','scale-95','transition','ease-in','duration-500')
   

    }

    

}


//this is where if you hover above the about button it will
//show..[INCOMPLETE]
function toAbout(){

}

//this is where if you click on it, you will go to the member's page
function toMembers(){

}

//if click, a page to show how to download dock6 with a link to the github repo
function toDownloadDock(e){
    
    // open a downloadDock.html without making a new window
    window.open('./downloadDock/downloadDock.html','_self')

}

function toDOCK() {
    DOCK = document.getElementById("DOCK!")
    if(DOCK.innerHTML === ''){
        DOCK.innerHTML = '<embed type="text/html" src="./letsDOCK/letsDOCKcopy.html" width="100%" height="800" >'
        document.getElementById("homePage").innerHTML = ""
    }

    console.log("lol")
   
  }

function ifButtonPress(e,btn){
    // console.log(btn.innerText)

    if (btn.innerText === "Download DOCK6"){
        toDownloadDock()
    } else if (btn.innerText === "Let's dock!"){
        toLetsDockSecNavBar()
    } else if (btn.innerText === "DOCK!"){
        toDOCK()
    } else if (btn.innerText === "DOCK6"){
        window.open('./index.html','_self')
    }

}


const navButtons = document.querySelectorAll('#button-menu a')
var list_Button = Array.from(navButtons)
list_Button.forEach(btn => btn.addEventListener('click',(e)=> ifButtonPress(e,btn)))

const secNavButtons = document.querySelectorAll('#secNavBar a')
var secList_Button = Array.from(secNavButtons)
secList_Button.forEach(btn => btn.addEventListener('click',(e)=> ifButtonPress(e,btn)))



console.log('end')
