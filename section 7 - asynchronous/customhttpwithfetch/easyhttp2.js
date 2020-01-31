/** 
 * EasyHTTP Library
 * Library for making HTTP Requests
 * 
 * @version 2.0.0
 * @author Tushar Gupta
 * @license MIT
 * 
 **/

 class EasyHTTP {
  // Make HTTP GET Request 
  get(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }
 }