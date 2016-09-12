var Product = require('../models/product.js');
var mongoose = require('mongoose');

mongoose.connect('127.0.0.1:27017/shopping');

var products = [
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Gothic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida condimentum urna vitae viverra. Phasellus eleifend nunc sit amet ipsum tristique posuere. Donec ullamcorper consectetur odio, aliquam imperdiet massa dictum ac. Praesent faucibus porttitor felis, quis feugiat urna iaculis vel. Duis a ipsum erat. In pretium velit at tellus faucibus vehicula. Morbi bibendum varius mauris, eu viverra leo accumsan at. ',
    price: 25
  }),
  new Product({
    imagePath: 'http://vignette3.wikia.nocookie.net/gtawiki/images/0/0c/OneTrueSlash.jpg/revision/latest?cb=20140116163503',
    title: 'Grant Theft Auto V',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida condimentum urna vitae viverra. Phasellus eleifend nunc sit amet ipsum tristique posuere. Donec ullamcorper consectetur odio, aliquam imperdiet massa dictum ac. Praesent faucibus porttitor felis, quis feugiat urna iaculis vel. Duis a ipsum erat. In pretium velit at tellus faucibus vehicula. Morbi bibendum varius mauris, eu viverra leo accumsan at. ',
    price: 20
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
    title: 'The Witcher 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida condimentum urna vitae viverra. Phasellus eleifend nunc sit amet ipsum tristique posuere. Donec ullamcorper consectetur odio, aliquam imperdiet massa dictum ac. Praesent faucibus porttitor felis, quis feugiat urna iaculis vel. Duis a ipsum erat. In pretium velit at tellus faucibus vehicula. Morbi bibendum varius mauris, eu viverra leo accumsan at. ',
    price: 10
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/2/20/StarCraft_II_-_Box_Art.jpg',
    title: 'StarCraft 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida condimentum urna vitae viverra. Phasellus eleifend nunc sit amet ipsum tristique posuere. Donec ullamcorper consectetur odio, aliquam imperdiet massa dictum ac. Praesent faucibus porttitor felis, quis feugiat urna iaculis vel. Duis a ipsum erat. In pretium velit at tellus faucibus vehicula. Morbi bibendum varius mauris, eu viverra leo accumsan at. ',
    price: 15
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/2/29/World_of_Warcraft_-_The_Burning_Crusade_coverart.jpg',
    title: 'World of Warcraft',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida condimentum urna vitae viverra. Phasellus eleifend nunc sit amet ipsum tristique posuere. Donec ullamcorper consectetur odio, aliquam imperdiet massa dictum ac. Praesent faucibus porttitor felis, quis feugiat urna iaculis vel. Duis a ipsum erat. In pretium velit at tellus faucibus vehicula. Morbi bibendum varius mauris, eu viverra leo accumsan at. ',
    price: 80
  }),
  new Product({
    imagePath: 'http://netdna.webdesignerdepot.com/uploads/2011/02/jurassicpark.jpg',
    title: 'Jurassic Park',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida condimentum urna vitae viverra. Phasellus eleifend nunc sit amet ipsum tristique posuere. Donec ullamcorper consectetur odio, aliquam imperdiet massa dictum ac. Praesent faucibus porttitor felis, quis feugiat urna iaculis vel. Duis a ipsum erat. In pretium velit at tellus faucibus vehicula. Morbi bibendum varius mauris, eu viverra leo accumsan at. ',
    price: 100
  })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
