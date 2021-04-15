var userInput; 
document.addEventListener('submit', (event) => {
  event.preventDefault(); 
  userInput  = document.getElementById('search').value;
  //alert(userInput);
 
     
  fetch("https://api.github.com/search/users?q=" + userInput)
    .then(resp => resp.json())
    .then(json => {

      for (const user of json.items) {
        let newLi = document.createElement("li");
        newLi.innerHTML = user.login;
        document.getElementById("user-list").appendChild(newLi);
        let newLi2 = document.createElement("li");
        newLi2.innerHTML = user.avatar
        getElementById("repos-list").appendChild(newLi2);
      }
    })
}) 