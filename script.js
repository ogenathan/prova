//project slide through
const projects = [
    {
      id: 4,
      title: "featured project",
      heading: "Crest Hotel",
      backImg:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ",
    },
    {
      id: 1,
      title: "featured project",
      heading: "Addrex Hotel",
      backImg:
        "pexels-vecislavas-popa-1571457.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      title: "featured project",
      heading: "Enitona Hotel",
      backImg:
        "images\pexels-aleksandar-pasaric-2603464.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      title: "featured project",
      heading: "Rivera Hotel",
      backImg:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      title: "featured project",
      heading: "Maddox Hotel",
      backImg:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
  //select elements
const title = document.getElementById("title");
const heading = document.getElementById("heading");
const text = document.getElementById("text");

const btn = document.querySelector(".btn");
const mainSection = document.querySelector(".main-section");

// set starting item
let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  const project = projects[currentItem];
  mainSection.style.backgroundImage = project.backImg;
  title.textContent = project.title;
  heading.textContent = project.heading;
  text.textContent = project.text;
});


// show person based on item
function showPerson(hotel) {
  const project = projects[hotel];
  mainSection.style.backgroundImage = project.backImg;
  title.textContent = project.title;
  heading.textContent = project.heading;
  text.textContent = project.text;
  
}
// show next person
btn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > projects.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});