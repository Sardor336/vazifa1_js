const btnPlusOrMinus = [...document.querySelectorAll('.main__btn')],
    picture = [...document.querySelectorAll('.main__btn-img_pic')],
    img = [...document.querySelectorAll('.group__img')],
    foods = document.querySelector('.box__item'),
    boxBg = [...document.querySelectorAll('.box__bg')],    
    color = ['rgb(59, 163, 163)', 'blue', 'green', 'yellow', 'red', 'orange', 'aqua', 'aquamarine', 'blueviolet', 'chocolate'],
   //  color = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    boxImg = ['', '', '', '', '', '', '', '', '', '']

var n =  0
var c = 0


btnPlusOrMinus.forEach(function(a) {
    a.addEventListener('click', function() {
        const data = a.getAttribute('data-target')     
        

        if(data == '-') {
            c--
            c = c < 0 ? 9 : c
            n--;
            for (let i = 0; i < picture.length; i++) {
                picture[i].classList.remove('active');
                picture[c].classList.add('active');
                boxBg[i].style.background = color[c];
                boxBg[i].classList.remove('active');
                boxBg[c].classList.add('active');
            }

            foods.style.transform = `rotate(${n * 36}deg)`
        }else if(data == '+') {
            c++
            c = c > 9 ? 0 : c
            n++
            for (let i = 0; i < picture.length; i++) {
                picture[i].classList.remove('active');
                picture[c].classList.add('active');
					 boxBg[i].style.background = color[c];
                boxBg[i].classList.remove('active');
                boxBg[c].classList.add('active');
            }
            foods.style.transform = `rotate(${n * 36}deg)`
        }            
    })
})


