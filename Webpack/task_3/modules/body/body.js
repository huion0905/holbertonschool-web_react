import $ from 'jquery';
import _ from 'lodash';
import './body.css';

function updateCounter() {
  let count = 0;
  return () => {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
  };
}

$(document).ready(function() {
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');

  const debouncedUpdateCounter = _.debounce(updateCounter(), 500);
  $('button').on('click', debouncedUpdateCounter);
});
