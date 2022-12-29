function open(event){
    editedPlayer = +event.target.dataset.playerid;
    playerConfigOverlayElement.style.display='block';
    backdropElement.style.display='block';
}

function close(){
    playerConfigOverlayElement.style.display='none';
    backdropElement.style.display='none';
    formElement.firstElementChild.classList.remove('error');
    errorOutputElement.textContent ='';
    formElement.firstElementChild.lastChild.value='';
}

function save(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername').trim();
    
    if(!enteredPlayername){
        event.target.firstElementChild.classList.add('error');
        errorOutputElement.textContent = '이름 좀 써 제발!';
        return;
    }

    const updatedPlayerDataElement = document.getElementById('player'+editedPlayer+'Data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;
    players[editedPlayer-1].name=enteredPlayername;
    close();
}