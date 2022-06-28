const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";
paragraph.style.fontFamily = 'monospace'

// document.getElementById('page-title').innerText = 'Senhor dos Aneis!!!!!';

// document.getElementById('subtitle').innerText = 'Olha o DOM!';

// document.getElementById('second-paraghaph').innerText = paragraph.style.color = 'yellow';

const para = document.getElementsByClassName('paragrafo');
for (paras of para){
    para[0].innerText = 'ximboca';
    para[0].style.color = 'red';
    para[0].style.fontFamily = 'monospace'
    para[1].innerText = 'Ximira';
} 
para.style.color = "red"
