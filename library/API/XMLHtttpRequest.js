/**
 * # XMLHttpRequest
 *
 * @class XMLHttpRequest
 *
 * @description  objects to interact with servers without refreshing the page( it' doesn't disturb what the user is doing).
 */
const xhr = new XMLHttpRequest();

//Set listeners
xhr.onload = (event) => {
  console.log(event);
};

//Set Request Methods & URL parameters
xhr.open("GET", url);
