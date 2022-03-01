// SAYFA YUKLENDIGINDE ADDITEMS FONKSIYONU ILE MENU ICERISINDEKI ITEMLERIN LISTELENMESI
document.addEventListener("DOMContentLoaded", function (event) {
  addItems();
});

// ICERISINDE 9 ADET OBJECT BULUNDURAN MENU DIZISI
const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

let filteredMenu = menu.slice(); // filteredMenu isminde menu dizisinin kopyasini olusturduk.

const buttonTexts = ["All", "Korea", "Japan", "China"] // olusturacagimiz butonlarin hem textlerini hem de id lerinde kullanmak uzere olusturdugum buttonTexts dizisi

// buttonTexts adedi kadar calisacak ve buton ureterek butonlara id verecek olan for dongusu
for (let i = 0; i < buttonTexts.length; i++) {
  let buttonContainer = document.querySelector(".btn-container");
  let buttonElement = document.createElement("button");
  buttonElement.classList.add("btn-item", "btn", "btn-outline-dark")
  buttonElement.id = `btn-${buttonTexts[i]}`
  buttonElement.innerHTML = buttonTexts[i]
  buttonContainer.appendChild(buttonElement)
}

const divMenu = document.querySelector("#div-menu") // divMenu degiskenine div-menu idsine sahip divi atadik.

// addItems fonksiyonu ile divMenu icerisinde yer alacak yapiyi olusturduk. Donguyu ise filteredMenu isimli menu dizisinin filtrelenmis halinin uzunlugu kadar dondurduk. Bu sayede yukarida yer alan butonlara basildiginda filtrelenmis sekilde menu listesini ana sayfada gormus olduk.
const addItems = () => {
  for (let i = 0; i < filteredMenu.length; i++) {
    let divMenuItem = document.createElement("div");
    let imgItem = document.createElement("img");
    let menuInfo = document.createElement("div");
    let menuTitle = document.createElement("div");
    let menuText = document.createElement("div");
    let hTitle = document.createElement("h4");
    let hPrice = document.createElement("h4");
    hPrice.classList.add("price");
    menuTitle.classList.add("menu-title");
    menuText.classList.add("menu-text");
    menuInfo.classList.add("menu-info");
    imgItem.classList.add("photo");
    divMenuItem.classList.add("menu-items", "col-lg-6", "col-sm-12");
    divMenu.appendChild(divMenuItem);
    divMenuItem.appendChild(imgItem);
    divMenuItem.appendChild(menuInfo);
    menuInfo.appendChild(menuTitle);
    menuInfo.appendChild(menuText);
    menuText.innerHTML = filteredMenu[i].desc
    hTitle.innerHTML = filteredMenu[i].title;
    hPrice.innerHTML = filteredMenu[i].price;
    imgItem.src = filteredMenu[i].img;
    menuTitle.appendChild(hTitle)
    menuTitle.appendChild(hPrice)
  }
}

// sayfada herhangi bir elemente tiklanildiginda tiklanilan elementin idsi btn-All, btn-Korea, btn-Japan veya btn-China olma durumunda calisacak olan click eventinin fonksiyonu
document.addEventListener("click", function (e) {
  e = e || window.event;
  // eger elementin idsi btn-All ise divMenu innerHTMLsini sifirla
  // filteredMenu yu oldugu gibi menu dizisine esitle
  // ve addItems fonksiyonu ile divMenu ye ekle
  if (e.target.id == "btn-All") {
    divMenu.innerHTML = ""
    filteredMenu = menu.slice();
    addItems();
  }

  else if (e.target.id == "btn-Korea") {
    // eger elementin idsi btn-Korea ise divMenu innerHTMLsini sifirla
    // filteredMenu dizisine menu dizisinin icinde kategorisi Korea olan elemanlari ekle
    // ve addItems fonksiyonu ile divMenu ye ekle
    filteredMenu = menu.filter((item, index) => {
      return menu[index].category == "Korea"
    })
    divMenu.innerHTML = ""
    console.log(filteredMenu);
    addItems();
  }

  else if (e.target.id == "btn-Japan") {
    // eger elementin idsi btn-Japan ise divMenu innerHTMLsini sifirla
    // filteredMenu dizisine menu dizisinin icinde kategorisi Japan olan elemanlari ekle
    // ve addItems fonksiyonu ile divMenu ye ekle
    filteredMenu = menu.filter((item, index) => {
      return menu[index].category == "Japan"
    })
    divMenu.innerHTML = ""
    console.log(filteredMenu);
    addItems();
  }

  else if (e.target.id == "btn-China") {
    // eger elementin idsi btn-China ise divMenu innerHTMLsini sifirla
    // filteredMenu dizisine menu dizisinin icinde kategorisi China olan elemanlari ekle
    // ve addItems fonksiyonu ile divMenu ye ekle
    filteredMenu = menu.filter((item, index) => {
      return menu[index].category == "China"
    })
    divMenu.innerHTML = ""
    console.log(filteredMenu);
    addItems();
  }
})