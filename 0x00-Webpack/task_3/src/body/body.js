import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

let count = 0;
// select the button element
let $btn = $('button');
// select the count display paragraph
let $displayCount = $('#count');
// function that tracks the number of times the button element has been clicked.
const updateCounter = () => {
  count++;
  $displayCount.text(`${count} clicks on the button`);
}
// Use jQuery's .on() method to attach the event listener
$btn.on('click', _.debounce(updateCounter, 300,
  { leading: true, trailing: false }));