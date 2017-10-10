// Heath explanation for programmatically building the below object

// var products = {};

// products[ "Regular Flavors" ] = [];
// products[ "Regular Flavors" ].push(
// 	{
// 		"name": "Chocolate",
//       	"description": "Loved by kids of all ages!",
//       	"price": "$2.00",
//       	"image": "images/chocolate.png"	
// 	}
// );

var products = {
  
  "Regular Flavors": [

    {
      "name": "Chocolate",
      "description": "Loved by kids of all ages!",
      "price": "$2.00",
      "image": "images/chocolate.png"
    },

    {
      "name": "Vanilla",
      "description": "Elegant and understated",
      "price": "$2.00",
      "image": "images/vanilla.png"
    },

    {
      "name": "Strawberry",
      "description": "A taste of summer...anytime!",
      "price": "$2.00",
      "image": "images/strawberry.png"
    }

  ],

  "Seasonal Flavors": [

    {
      "name": "Pumpkin Pie",
      "description": "Pumpkin ice cream with a graham cracker swirl",
      "price": "$3.00",
      "image": "images/pumpkin.png"
    },

    {
      "name": "Apple Pie",
      "description": "Made with local farm fresh apples",
      "price": "$3.00",
      "image": "images/apple.png"
    }

  ],

  "Serving Options": [

    {
      "name": "Waffle Cone",
      "description": "Delicious and our largest cone",
      "price": "$1.25",
      "image": "images/waffle-cone.png"
    },

    {
      "name": "Sugar Cone",
      "description": "Made fresh by hand in our store each day",
      "price": "$0.75",
      "image": "images/cone.png"
    },

    {
      "name": "Cup",
      "description": "Plenty of room for toppings",
      "price": "$0.00",
      "image": "images/spoon.png"
    }

  ],

  "Toppings": [

    {
      "name": "Hot Fudge",
      "description": "Rich and chocolatey and just sweet enough",
      "price": "$1.00",
      "image": "images/heart.png"
    },

    {
      "name": "Whipped Cream",
      "description": "Need we say more?",
      "price": "$1.50",
      "image": "images/heart.png"
    },

    {
      "name": "Rainbow Sprinkles",
      "description": "Like a million tiny little smiles",
      "price": "$0.75",
      "image": "images/heart.png"
    }

  ]

};