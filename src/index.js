import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { BikeIndex } from './bike-index-api';

window.addEventListener("load", () => {
  BikeIndex.apiCall().then((response) => {
    console.log(response);
  });
  //document.querySelector("h2").innerHTML = 
});