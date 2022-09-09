async function getPosts(){
  return await fetch('https://trip--hackr.herokuapp.com/posts')
        .then((res) => res.json())
        .then((data) => data);
}