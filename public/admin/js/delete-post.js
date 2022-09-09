let articlesBlock = document.querySelector('.articles');

//event delegation
articlesBlock.addEventListener('click', function(e){
    if(e.target.classList.contains('btn-remove')){
        let id = e.target.parentNode.parentNode.querySelector('.id').value; //post.id
        fetch('https://trip--hackr.herokuapp.com/posts/'+id,{
            method:'DELETE'
        }).then((res) => res.text())
        .then(() => window.history.go());

    }
})