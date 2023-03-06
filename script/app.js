// selecting the DOM content
const menubar = document.querySelector('.mobile i')
const sidebar = document.querySelector('.sidebar')
const removeSidebar = document.querySelector('.sidebar .container:not(.details)')



menubar.addEventListener('click',()=>{
sidebar.style.display='block'

})
removeSidebar.addEventListener('click',()=>{
    sidebar.style.display=''
})