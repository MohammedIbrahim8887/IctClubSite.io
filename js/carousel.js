currentSlideID = 1;

silderElement = document.getElementById('slider');
totalSlides = silderElement.childElementCount;
console.log(totalSlides);

function next(){
    if(totalSlides > currentSlideID){
        currentSlideID++;
        showSlider();
    }
    else{
        currentSlideID = 1;
        showSlider();
    }    
}

function prev(){
    if(1 < currentSlideID){
        currentSlideID--;
        showSlider();
    }
    else{
        currentSlideID = totalSlides;
        showSlider();
    }
}
function showSlider(){
    sildes = document.getElementById('slider').getElementsByTagName('li');
    for(let index = 0; index < totalSlides; index++){
        const element = sildes[index];
        if(currentSlideID === index + 1){
            element.classList.remove('hidden');
        }
        else{
            element.classList.add('hidden');
        }
    }
}