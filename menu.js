function openside() {
    if (document.getElementById("menuclose").style.display = "block") {
        document.getElementById("menu").style.display = "block";
        document.getElementById("menuopen").style.display = "none";
    }
};

function closeside() {
   if (document.getElementById("menuopen").style.display = "block") {
        document.getElementById("menu").style.display = "none";
        document.getElementById("menuclose").style.display = "none"; 
   } 
};