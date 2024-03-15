import $ from 'jquery';
import _ from 'lodash';
import '../modules/body/body.css';

let count = 0;
$('body').append('<button>Click me</button>');
$('body').append('<p>You have clicked the button 0 times</p>');

$('button').on('click', function() {
  count = _.add(count, 1);
  $('p').text(`You have clicked the button ${count} times`);
});