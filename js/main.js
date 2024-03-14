
function showDrop(id) {
    const menu = document.getElementById(id);
    menu.classList.add('dropdown-show');
}


window.onclick = function(event) {
    if (!event.target.classList.contains('dropdown-item')) {
        var sharedowns = document.getElementById("dropdown");

            if(sharedowns.classList.contains('dropdown-show')){ 
                sharedowns.classList.remove('dropdown-show');
            }
        
    }   
}

function showChat(){
   var  openChat = document.getElementById('opennChat');
   openChat.style.display = 'block';
}
function closeChat(){
    var  openChat = document.getElementById('opennChat');
    openChat.style.display = 'none';
}

function openMenu(){
     var  openmenu = document.getElementById('menuBox');    
     openmenu.classList.toggle('active');
 }