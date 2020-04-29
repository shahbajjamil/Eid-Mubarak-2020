    window.onload = function() {
        var loader= document.querySelector(".preloader");
        loader.className +=" active";
        playeid();
    }
    window.onclick = function() {
        playeid();
    }
    function playeid() {
        document.getElementById("eidid").play();
    }