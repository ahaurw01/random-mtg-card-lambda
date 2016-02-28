'use strict';

var allCards = require('./all-cards');

exports.handler = function (event, context) {
  var cardKeys = Object.keys(allCards);
  var numCards = cardKeys.length;
  var randomIndex = Math.floor(Math.random() * numCards);
  var cardKey = cardKeys[randomIndex];
  var card = allCards[cardKey];
  console.log(card);
  context.done(null, card);
};
