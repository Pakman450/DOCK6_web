
console.log('start')




//this is where it gets complicated
//if hover, shows the relevant steps to get a docking goign
//planning to show Prepare Files then Let's Dock!
function toLetsDock(){

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

const navButtons = document.querySelectorAll('#button-menu a')
var list_Button = Array.from(navButtons)

list_Button.forEach(btn => btn.addEventListener('click',e=> toDownloadDock(e)))






console.log('end')
