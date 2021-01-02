// IMPORT PICTURES FOR NEW POST
import cheesy from "../../images/cheesy.jpg";
import loaded from "../../images/loaded.jpg";
import vegetarian from "../../images/vegetarian.jpg";

// INITIAL STATE
let initialState = {
  topMenu: [
    {
      id: 1,
      title: "CHEESY GARLIC WITH CRÈME FRAICHE",
      subtitle:
        "Stretchy mozzarella, classic garlic sauce & oregano on a crème fraiche base",
      price: "130",
      image: cheesy,
    },
    {
      id: 2,
      title: "LOADED BURGER",
      subtitle:
        "Seasoned ground beef, diced tomato & red onion, all finished with special burger sauce & spring onions",
      price: "160",
      image: loaded,
    },
    {
      id: 3,
      title: "VEGETARIAN PLANT-BASED LOADED BURGER",
      subtitle:
        "Plant-based beef, diced tomato & red onion, all finished with special burger sauce & spring onions",
      price: "175",
      image: vegetarian,
    },
  ],
};

// THIS REDUCER TAKES IN THE STATE AND THE ACTION CALLED
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default homeReducer;
