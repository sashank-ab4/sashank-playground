import Accordion from "../src/playgroundApps/Accordion";
import ChipsInput from "../src/playgroundApps/ChipsInput";
import SeatBooking from "../src/playgroundApps/CinemaHall";
import DataListExp from "../src/playgroundApps/DataList";
import MultipleForms from "../src/playgroundApps/MultipleForms";
import MyTodo from "../src/playgroundApps/MyTodo";
import OtpInput from "../src/playgroundApps/otpInput";
import ProductPagination from "../src/playgroundApps/ProductPagination";
import Quotes from "../src/playgroundApps/Quotes";
import SignInForm from "../src/playgroundApps/SignInForm";
import SocialMedia from "../src/playgroundApps/SocialMedia";
import Todo from "../src/playgroundApps/Todo";
import TrafficLights from "../src/playgroundApps/TrafficLights";
import UserList from "../src/playgroundApps/UserList";

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
        component: MyTodo,
      },
    ],
  },
  {
    title: "Games",
    items: [
      {
        name: "Product-List",
        path: "product-list",
        component: ProductPagination,
      },
      {
        name: "Calculator",
        path: "calculator",
        component: Todo,
      },
      {
        name: "SignIn Form",
        path: "signin-form",
        component: SignInForm,
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
      {
        name: "Traffic Lights",
        path: "traffic-lights",
        component: TrafficLights,
      },
      {
        name: "Accordion",
        path: "accordion",
        component: Accordion,
      },
      {
        name: "Chips Input",
        path: "chips-input",
        component: ChipsInput,
      },
      {
        name: "User List",
        path: "user-list",
        component: UserList,
      },
      {
        name: "Quotes",
        path: "quotes",
        component: Quotes,
      },
    ],
  },
];
