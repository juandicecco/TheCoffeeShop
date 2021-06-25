import img1 from "./images/espresso1.jpg";
import img2 from "./images/latte.jpg";
import img3 from "./images/americano.jpg";
import img4 from "./images/mocca.jpg";
import img5 from "./images/tea.jpg";
import img6 from "./images/cola.jpg";
import img7 from "./images/sandwich.jpg";
import img8 from "./images/croissant.jpg";

const data = {
  products: [
    {
      id: "1",
      name: "Espresso",
      description:
        "Strong black coffee made by forcing steam through ground coffee beans.",
      price: 5,
      image: img1,
      tax: 0.12,
    },
    {
      id: "2",
      name: "Latte",
      description: "Espresso mixed with hot or steamed milk.",
      price: 6,
      image: img2,
      tax: 0.08,
    },
    {
      id: "3",
      name: "Americano",
      description:
        "Type of coffee drink prepared by diluting an espresso with hot water.",
      price: 5,
      image: img3,
      tax: 0.09,
    },
    {
      id: "4",
      name: "Cappuccino",
      description:
        "Single espresso shot and hot milk, with the surface topped with foamed milk.",
      price: 7,
      image: img4,
      tax: 0.11,
    },
    {
      id: "5",
      name: "Iced Tea",
      description:
        "A chilled drink of sweetened tea without milk, typically flavoured with lemon.",
      price: 4,
      image: img5,
      tax: 0.02,
    },
    {
      id: "6",
      name: "Coke",
      description:
        "Carbonated soft drink manufactured by The Coca-Cola Company.",
      price: 2,
      image: img6,
      tax: 0.1,
    },
    {
      id: "7",
      name: "Sandwich",
      description:
        "An item of food consisting of two pieces of bread with filling between them.",
      price: 10,
      image: img7,
      tax: 0.15,
    },
    {
      id: "8",
      name: "Croissant",
      description:
        "A piece of light bread having a curved shape with two narrow pointed ends.",
      price: 7,
      image: img8,
      tax: 0.1,
    },
  ],
};

export default data;
