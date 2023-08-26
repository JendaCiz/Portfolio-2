const robot = document.querySelector('.robot');

setInterval(() => {
    robot.style.filter = 'drop-shadow(2px 2px 5px  #fa3f00)'; 

    setTimeout(() => {
        robot.style.filter = 'drop-shadow(2px 2px 2px  #fa3f00)'; 
    },900); 

}, 200); 






document.addEventListener('DOMContentLoaded', function() {
   
    let h1Element = document.querySelector('h1');

    
    setTimeout(function() {
        h1Element.style.transform = 'translateX(0)';
        h1Element.style.opacity = '1';  
    }, 500);  
});






document.addEventListener('DOMContentLoaded', function() {
   
    let vzdelaniElement = document.querySelector('.vzdelani');

   
    setTimeout(function() {
        vzdelaniElement.style.transform = 'translateX(0)';
        vzdelaniElement.style.opacity = '1';  
    }, 500);  
});




document.addEventListener('DOMContentLoaded', function() {
 
    let robotElement = document.querySelector('.robot');

    
    setTimeout(function() {
        robotElement.style.transform = 'translateY(0)';
        robotElement.style.opacity = '1'; 
    }, 500);  
});







document.addEventListener('DOMContentLoaded', function() {
    
    let infoElement = document.querySelector('.info');

   
    setTimeout(function() {
        infoElement.style.opacity = '1';
    }, 500);  
});



document.addEventListener('DOMContentLoaded', function() {
    
    let name2Element = document.querySelector('h2.name-2');

 
    setTimeout(function() {
        name2Element.style.opacity = '1';  
    }, 500); 
});



