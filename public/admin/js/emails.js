async function getEmails(){
    return await fetch('https://trip--hackr.herokuapp.com/emails')
          .then((res) => res.json())
          .then((data) => data);
  }

  //Deleting email by clicking remove button (X)
 let emailsBlock = document.querySelector('#v-pills-mails');

 //event delegation
 emailsBlock.addEventListener('click', function(e){
     if(e.target.classList.contains('btn-remove')){
         let id = e.target.parentNode.parentNode.querySelector('.id').value; //request.id
         fetch('https://trip--hackr.herokuapp.com/emails/'+id,{
             method:'DELETE'
         }).then((res) => res.text())
         .then(() => window.history.go());
 
     }
 })