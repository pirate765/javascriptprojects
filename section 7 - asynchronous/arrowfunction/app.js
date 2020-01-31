document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

//Get local text file data
function getText() {
  fetch('data.txt')
  .then(res => res.text())
  .then(data => {
    // console.log(data);
    document.getElementById('output').innerHTML = data;
  })
  .catch(err => console.log(err));
}

//Get local JSON Data
function getJson() {
  fetch('posts.json')
  .then(res => res.json())
  .then(data => {
     console.log(data);
    let output = '';
    data.forEach(function(post){
      output += `<li>${post.title}: ${post.body}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(err => console.log(err));
}

//Get from external API
function getExternal() {
  fetch('https://api.github.com/users')
  .then(res => res.json())
  .then(data => {
     console.log(data);
    let output = '';
    data.forEach(function(user){
      output += `<li>${user.login}: ${user.followers_url}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(err => console.log(err));
}