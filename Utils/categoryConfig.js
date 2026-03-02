import SeatBooking from "../src/playgroundApps/CinemaHall";
import Todo from "../src/playgroundApps/Todo";

export const categoriesAndItems = [
  {
    title: "Apps",
    items: [
      {
        name: "Todo App",
        path: "todo-app",
        component: Todo,
      },
      {
        name: "Calculator",
        path: "calculator",
        component: Todo,
      },
    ],
  },
  {
    title: "Games",
    items: [
      {
        name: "Todo App",
        path: "todo-app",
        component: Todo,
      },
      {
        name: "Calculator",
        path: "calculator",
        component: Todo,
      },
    ],
  },
  {
    title: "Interfaces",
    items: [
      {
        name: "Cinema Hall",
        path: "cinema-hall",
        component: SeatBooking,
      },
    ],
  },
];
