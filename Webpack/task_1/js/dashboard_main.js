import $ from 'jquery';
import _ from 'lodash';

function updateCounter() {
  let count = 0;
  return () => {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
  };
}

$(document).ready(function() {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  const debouncedUpdateCounter = _.debounce(updateCounter(), 500);
  $('button').on('click', debouncedUpdateCounter);
});
