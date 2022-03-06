const text = ['a Web Developer','a Programmer'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
    if(count == text.length){
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index)

    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type,400)

}())

VanillaTilt.init(document.querySelectorAll('.tilt'),{
    max : 30
})
// var darkmode = document.getElementById('darkmode')
// darkmode.addEventListener('click',()=>{
//     var element = document.body;
//     element.classList.toggle("light");
    
// })
// function changeIcon(x){
//     x.class.toggle("bi bi-moon h4")
// }
