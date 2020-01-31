function easyHTTP() {
  this.http = new XMLHttpRequest();
}

//Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);
  
  //Declare this as self variable
  let self = this;
  
  this.http.onload = function() {
    //since here this would have been limited to the function scope
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    }
    else {
      callback('Error: '+self.http.status);
    }
  }

  this.http.send();
}

//Make an HTTP POST Request
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  //After open, before send() we need to specify the header
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
      callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}


//Make an HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  //After open, before send() we need to specify the header
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
      callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}

//Make an HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);
  
  //Declare this as self variable
  let self = this;
  
  this.http.onload = function() {
    //since here this would have been limited to the function scope
    if(self.http.status === 200) {
      callback(null, 'POST DELETED!');
    }
    else {
      callback('Error: '+self.http.status);
    }
  }

  this.http.send();
}