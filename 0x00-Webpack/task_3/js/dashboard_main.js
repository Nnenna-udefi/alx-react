import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

$(document).ready(function() {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');


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
})




