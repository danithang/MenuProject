// list of items
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 30.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// getting the parent class of each menu item
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// calling window so everything will be loaded when the webpage is loaded
window.addEventListener("DOMContentLoaded", function () {
  // calling function to populate page with all from the array
  displayMenuItems(menu);
  displayMenuButtons();
});

// function to look for an array
function displayMenuItems (menuItems) {
  // map enables to modify the html with the other items in menu array
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title}>
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">${item.desc}</p>
    </div>
  </article>`;
  });

  // calling function and joining it all together in one string, .join()...empty string is to take out commas in between articles
  displayMenu = displayMenu.join("");
  // putting the variable sectionCenter as innerHTML to equal function displayMenu to populate each item on the page
  sectionCenter.innerHTML = displayMenu;
};
  // use .reduce to get buttons from unique categories aka adding a new menu item to the list with new category
  // reduce has 2 parameters and you need an initial value which is an array "all" which will show all menu items
  // values represents "all"(always return values) and item represents each item in menu array
  function displayMenuButtons() {
  const categories = menu.reduce(function(values, item) {
    // if values("all") array does not equal the item category then push the new item category to the website
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  }, 
  ["all"]
);
// mapping over buttons to set them up 
const categoryBtns = categories.map(function (category) {
  return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
  })
  .join("");
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  
  // filter over to have the items in their desinated categories when each button is clicked
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // getting the event to pinpoint current target which is dataset...adding dataset to html for each button giving them an id to specify which button does what
    const category = e.currentTarget.dataset.id;
    // adding a function to filter menu array to dicipher the category 
    const menuCategory = menu.filter(function (menuItem) {
      // if menuItem.category equals the specific category then return that specific menu item
      if (menuItem.category === category) {
        return menuItem;
      };
    });
  // if category variable equals all then call displayMenuItems function with the array of menu to get all items on screen
  if (category === "all") {
    displayMenuItems(menu);
    // else return the displayMenuItems function with menuCategory variable to filter out the menu buttons 
  } else {
    displayMenuItems(menuCategory);
    };
  });
});
  };

