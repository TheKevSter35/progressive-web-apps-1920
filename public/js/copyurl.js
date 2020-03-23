let copyUrl = document.getElementById('copyurl')
copyUrl.addEventListener("click", getURL);

function getURL () {
    let copyText = document.getElementById("copyurl").value;

  document.execCommand("copy");
  alert("Copied the text: " + copyText)
   

}



