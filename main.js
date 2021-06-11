const show = () =>{
    
    const x = document.getElementById('on__');
    if (x.className === 'botton__'){
       alert("Not available..");
    }
    else{
        x.className+='botton__';
    }

}
const nav_menu_all = document.getElementsByClassName('list__');
const Div_list = document.querySelector('.list_div');
const bodyTag = document.getElementsByClassName('row')[0];
const bodyTag1 = document.getElementsByClassName('footer_')[0];
const hamburgar_menu = document.querySelector('.icon');
const nav_menuAll  = document.querySelector('.nav_menu');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');

hamburgar_menu.addEventListener('click',()=>{
    
    if(nav_menuAll.classList.contains('isopen')){
        hamburgar_menu.classList.remove('dropdownMenu');
        nav_menuAll.classList.remove('isopen');
        line1.classList.remove('line1_after');
        line2.classList.remove('line2_after');
        line3.classList.remove('line3_after');
        bodyTag.classList.remove('bodyTag_after');
        bodyTag1.classList.remove('bodyTag_after1');
        Div_list.classList.remove('div__list');
        for(let i=0;i<nav_menu_all.length;i++){
            nav_menu_all[i].classList.remove('show__');
        }
    }else{
        hamburgar_menu.classList.add('dropdownMenu');
        nav_menuAll.classList.add('isopen');
        line1.classList.add('line1_after');
        line2.classList.add('line2_after');
        line3.classList.add('line3_after');
        bodyTag.classList.add('bodyTag_after');
        bodyTag1.classList.add('bodyTag_after1');
        Div_list.classList.add('div__list');
        for(let i=0;i<nav_menu_all.length;i++){
            nav_menu_all[i].classList.add('show__');
        }

    }
    
    
});
const layout_divAfter = document.querySelector('.layout_row');
const row_after = document.querySelector('.row');
const btn_dark = document.querySelector('.button');
const nav_menuA = document.getElementsByClassName('list__');
const nav_menuBar = document.querySelector('.nav_bar');
const body_after = document.getElementsByTagName('body')[0];
const dark_mode = document.querySelector('#darkmode');
const moon = document.querySelector('.fa-moon');
const sun = document.querySelector('.fa-sun');
const footer_after = document.querySelector('.below_div');
const footer1_after = document.querySelector('.text_below');

dark_mode.addEventListener('click',()=>{
    if(dark_mode.classList.contains('isOpen')){
        nav_menuBar.classList.remove('darkmode_after');
        body_after.classList.remove('darkmode_after');
        footer_after.classList.remove('darkmode_after');
        footer1_after.classList.remove('darkmode_after');
        for(let i=0;i<nav_menuA.length;i++){
            nav_menuA[i].classList.remove('darkmode_after1');
        }
        moon.classList.remove('moonlight');
        sun.classList.remove('daylight');
        line1.classList.remove('darkmode_after2');
        line2.classList.remove('darkmode_after2');
        line3.classList.remove('darkmode_after2');
        btn_dark.classList.remove('Btn_dark');
        row_after.classList.remove('Row_DarkMode');
        layout_divAfter.classList.remove('First_Div');
        dark_mode.classList.remove('isOpen');
    }else{
        nav_menuBar.classList.add('darkmode_after');
        body_after.classList.add('darkmode_after');
        footer_after.classList.add('darkmode_after');
        footer1_after.classList.add('darkmode_after');
        for(let i=0;i<nav_menuA.length;i++){
            nav_menuA[i].classList.add('darkmode_after1');
        }
        moon.classList.add('moonlight');
        sun.classList.add('daylight');
        line1.classList.add('darkmode_after2');
        line2.classList.add('darkmode_after2');
        line3.classList.add('darkmode_after2');
        btn_dark.classList.add('Btn_dark');
        row_after.classList.add('Row_DarkMode');
        layout_divAfter.classList.add('First_Div');
        dark_mode.classList.add('isOpen');

    }
});