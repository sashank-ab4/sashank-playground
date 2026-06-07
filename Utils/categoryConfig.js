import SeatBooking from "../src/playgroundApps/CinemaHall";
import DataListExp from "../src/playgroundApps/DataList";
import MultipleForms from "../src/playgroundApps/MultipleForms";
import OtpInput from "../src/playgroundApps/otpInput";
import SocialMedia from "../src/playgroundApps/SocialMedia";
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
      {
        name: "Social Media",
        path: "social-media",
        component: SocialMedia,
      },
      {
        name: "OTP Input",
        path: "otp-input",
        component: OtpInput,
      },
      {
        name: "Data List",
        path: "data-list",
        component: DataListExp,
      },
      {
        name: "Multiple Forms",
        path: "multiple-forms",
        component: MultipleForms,
      },
    ],
  },
];
