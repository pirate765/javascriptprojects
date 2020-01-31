document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  //Create an XHR Object
  
  const xhr = new XMLHttpRequest();
  console.log('READYSTATE', xhr.readyState);
  //Open
  xhr.open('GET', 'data.txt', true);

  console.log('READYSTATE', xhr.readyState);

  //Optional1 - Used for spinners/loaders
  xhr.onprogress = function() {
    // console.log('READYSTATE', xhr.readyState);
  }

  xhr.onload = function() {
    console.log('READYSTATE', xhr.readyState);
    if(this.status === 200){
      console.log(this.responseText);
      // document.getElementById('output').innerHTML = '<h1>' + this.responseText + '</h1>'
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    }
  }

  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE', xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4){
  //     console.log(this.responseText);
  //   }
  // }
  xhr.send();

  //readyState Values
  // 0: request not initialised
  // 1: server connection not established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  //HTTP STATUSES
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"

}