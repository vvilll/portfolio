function rotateImage(rotI){
    const images = ["images/huntingSeasonProj.jpg","images/assemblyProj.jpg","images/stegoProj.jpg"];
    if(rotI == 1){
        if(document.getElementById("projImage").src.includes(images[0])){
            document.getElementById("projImage").src = images[1];
            document.getElementsByClassName("controlButton left")[0].style.backgroundColor = '#e7e7e7';
            document.getElementsByClassName("controlButton center")[0].style.backgroundColor = '#252525';
        }else if(document.getElementById("projImage").src.includes(images[1])){
            document.getElementById("projImage").src = images[2];
            document.getElementsByClassName("controlButton center")[0].style.backgroundColor = '#e7e7e7';
            document.getElementsByClassName("controlButton right")[0].style.backgroundColor = '#252525';
        }else{
            document.getElementById("projImage").src = images[0];
            document.getElementsByClassName("controlButton right")[0].style.backgroundColor = '#e7e7e7';
            document.getElementsByClassName("controlButton left")[0].style.backgroundColor = '#252525';
        }
    }
    if(rotI == 0){
        if(document.getElementById("projImage").src.includes(images[0])){
            document.getElementById("projImage").src = images[2];
            document.getElementsByClassName("controlButton left")[0].style.backgroundColor = '#e7e7e7';
            document.getElementsByClassName("controlButton right")[0].style.backgroundColor = '#252525';
        }else if(document.getElementById("projImage").src.includes(images[1])){
            document.getElementById("projImage").src = images[0];
            document.getElementsByClassName("controlButton center")[0].style.backgroundColor = '#e7e7e7';
            document.getElementsByClassName("controlButton left")[0].style.backgroundColor = '#252525';
        }else{
            document.getElementById("projImage").src = images[1];
            document.getElementsByClassName("controlButton right")[0].style.backgroundColor = '#e7e7e7';
            document.getElementsByClassName("controlButton center")[0].style.backgroundColor = '#252525';
        }
    }
}

function changeImg(chng){
    if(chng == 0){
        document.getElementById("projImage").src = "images/huntingSeasonProj.jpg";
        document.getElementsByClassName("controlButton center")[0].style.backgroundColor = '#e7e7e7';
        document.getElementsByClassName("controlButton right")[0].style.backgroundColor = '#e7e7e7';
        document.getElementsByClassName("controlButton left")[0].style.backgroundColor = '#252525';
    }else if(chng == 1){
        document.getElementById("projImage").src = "images/assemblyProj.jpg";
        document.getElementsByClassName("controlButton left")[0].style.backgroundColor = '#e7e7e7';
        document.getElementsByClassName("controlButton right")[0].style.backgroundColor = '#e7e7e7';
        document.getElementsByClassName("controlButton center")[0].style.backgroundColor = '#252525';
    }else{
        document.getElementById("projImage").src = "images/stegoProj.jpg";
        document.getElementsByClassName("controlButton left")[0].style.backgroundColor = '#e7e7e7';
        document.getElementsByClassName("controlButton center")[0].style.backgroundColor = '#e7e7e7';
        document.getElementsByClassName("controlButton right")[0].style.backgroundColor = '#252525';   
    }
}

setInterval(() => {rotateImage(1)},10000);
