function rotateImage(rotI){
    const images = ["images/huntingSeasonProj.jpg","images/assemblyProj.jpg","images/stegoProj.jpg"];
    var imgElem = document.getElementById("projImage")
    
    if(rotI == 1){
        //check for current elem
        if(imgElem.src.includes(images[0])){
            //change img to next and update buttons
            imgElem.src = images[1];
            document.getElementsByClassName("controlButton left")[0].style.backgroundColor = '#e7e7e7';
            document.getElementsByClassName("controlButton center")[0].style.backgroundColor = '#252525';
        }else if(imgElem.src.includes(images[1])){
            imgElem.src = images[2];
            document.getElementsByClassName("controlButton center")[0].style.backgroundColor = '#e7e7e7';
            document.getElementsByClassName("controlButton right")[0].style.backgroundColor = '#252525';
        }else{
            imgElem.src = images[0];
            document.getElementsByClassName("controlButton right")[0].style.backgroundColor = '#e7e7e7';
            document.getElementsByClassName("controlButton left")[0].style.backgroundColor = '#252525';
        }
    }
    if(rotI == 0){
        if(imgElem.src.includes(images[0])){
            imgElem.src = images[2];
            document.getElementsByClassName("controlButton left")[0].style.backgroundColor = '#e7e7e7';
            document.getElementsByClassName("controlButton right")[0].style.backgroundColor = '#252525';
        }else if(imgElem.src.includes(images[1])){
            imgElem.src = images[0];
            document.getElementsByClassName("controlButton center")[0].style.backgroundColor = '#e7e7e7';
            document.getElementsByClassName("controlButton left")[0].style.backgroundColor = '#252525';
        }else{
            imgElem.src = images[1];
            document.getElementsByClassName("controlButton right")[0].style.backgroundColor = '#e7e7e7';
            document.getElementsByClassName("controlButton center")[0].style.backgroundColor = '#252525';
        }
    }
}

function changeImg(chng){
    if(chng == 0){
        //move to next img and set color for buttons
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

function openSecretPop(){
    alert('Confidential Information Please Enter the Code.');
    document.getElementsByClassName("secretPopup")[0].style.display = 'inline';
}

function closeSecretPop(){
    alert('Access Denied');
    document.getElementsByClassName("secretPopup")[0].style.display = 'none';
} 
