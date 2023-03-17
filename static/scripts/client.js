
function openAbout() {
    document.getElementById('info').style.visibility = 'visible'
    document.getElementById('infoAbout').style.visibility = 'visible'

    document.getElementById('infoResume').style.visibility = 'hidden'
    document.getElementById('infoProjects').style.visibility = 'hidden'
    document.getElementById('meshFrame').style.visibility = 'hidden'
    document.getElementById('Title').style.visibility = 'hidden'
}

function openResume() {
    document.getElementById('info').style.visibility = 'visible'
    document.getElementById('infoResume').style.visibility = 'visible'

    document.getElementById('infoAbout').style.visibility = 'hidden'
    document.getElementById('infoProjects').style.visibility = 'hidden'
    document.getElementById('meshFrame').style.visibility = 'hidden'
    document.getElementById('Title').style.visibility = 'hidden'
}

function openProjects() {
    document.getElementById('info').style.visibility = 'visible'
    document.getElementById('infoProjects').style.visibility = 'visible'

    document.getElementById('infoResume').style.visibility = 'hidden'
    document.getElementById('infoAbout').style.visibility = 'hidden'
    document.getElementById('meshFrame').style.visibility = 'hidden'
    document.getElementById('Title').style.visibility = 'hidden'
}

function openHome() {
    let scale  = (Math.min(screen.width/5.1, screen.height/8) ).toString() + '%';
    console.log(screen.width/5, screen.height/5)
    document.getElementById('info').style.visibility = 'hidden'
    document.getElementById('infoResume').style.visibility = 'hidden'
    document.getElementById('infoProjects').style.visibility = 'hidden'
    document.getElementById('infoAbout').style.visibility = 'hidden'
    document.getElementById('meshFrame').style.visibility = 'visible'
    document.getElementById('Title').style.visibility = 'visible'

    /*document.getElementById('mesh').setAttribute('style','transform:translateX(50%); -webkit-transform: rotate(90deg)') //etc*/
    document.getElementById('meshFrame').style.WebkitTransform = " scale3d(" + scale + "," + scale + "," + scale + ")";
    document.getElementById('meshFrame').style.top = "55%"
    document.getElementById('meshFrame').style.left = "50%"
}

function toClipboard(text) {
  navigator.clipboard.writeText(text);

  alert("Copied the text: " + text);
} 
