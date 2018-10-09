var load; 
    function loadNow(opacity) {
        if(opacity <= 0) {
            displayContent();
        }
        else {
            load.style.opacity = opacity;
            window.setTimeout(function() {
                loadNow(opacity - 0.01)
            }, 100);
            console.log(load);
        }
    }


function displayContent(){
    load.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    load = document.getElementById('load');
    loadNow(1);
});