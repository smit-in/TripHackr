async function getCallbackRequests(){
    return await fetch('https://trip--hackr.herokuapp.com/callback-requests')
          .then((res) => res.json())
          .then((data) => data);
  }


//Deleting request by clicking remove button (X)
 let requestsBlock = document.querySelector('#v-pills-callback');

//event delegation
requestsBlock.addEventListener('click', function(e){
    if(e.target.classList.contains('btn-remove')){
        let id = e.target.parentNode.parentNode.querySelector('.id').value; //request.id
        fetch('https://trip--hackr.herokuapp.com/callback-requests/'+id,{
            method:'DELETE'
        }).then((res) => res.text())
        .then(() => window.history.go());

    }
})