const words = document.querySelectorAll('h2');
words.forEach(word => {
    word.addEventListener('mouseover', (e)=>{
        word.style.color = "red";
        word.style.fontSize = "2em";
    })
    word.addEventListener('mouseleave', (e)=>{
        word.style.color = "aqua";
        word.style.fontSize = "1em";
    })
})