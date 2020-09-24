function odmien() {
    var input = document.getElementById("input").value
    //references to text input y^^^
    //references to table elements vvv
    var ob_ich = document.getElementById("_ich")
    var ob_du = document.getElementById("_du")
    var ob_ersiees = document.getElementById("_ersiees")
    var ob_wir = document.getElementById("_wir")
    var ob_ihr = document.getElementById("_ihr")
    var ob_sie = document.getElementById("_siesie")
    var obc

    //single segment
    obc = input.length
    obc = obc - 2
    ich = input.slice(0, obc);
    ob_ich.innerText = ich + "e";
    //single segment
    obc = input.length
    obc = obc - 2
    du = input.slice(0, obc);
    ob_du.innerText = du + "st";
    //single segment
    obc = input.length
    obc = obc - 2
    ersiees = input.slice(0, obc);
    ob_ersiees.innerText = ersiees + "t";
    //single segment
    obc = input.length
    obc = obc - 2
    wir = input.slice(0, obc);
    ob_wir.innerText = wir + "en";
    //single segment
    obc = input.length
    obc = obc - 2
    ihr = input.slice(0, obc);
    ob_ihr.innerText = ihr + "t";
    //single segment
    obc = input.length
    obc = obc - 2
    sie = input.slice(0, obc);
    ob_sie.innerText = sie + "en";
}