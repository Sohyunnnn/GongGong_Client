import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import routes from "./constants/routes";
import SignUpPage from "@pages/SignUp";
import SignInPage from "@pages/SignIn";
import ProgramFinder from "@pages/ProgramFinder";
import HomePage from "@pages/HomePage";
import ProgramInfo from "@pages/ProgramInfo";
import WriteReview from "@pages/Review";
import MyPage from "@pages/MyPage/Step1";
import AccountSetting from "@pages/MyPage/Step2";
import Chatbot from "@pages/Chatbot";
import AbilityChat from "@pages/AbilityChat";
import FreeChat from "@pages/FreeChat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: routes.signIn,
        element: <SignInPage />,
      },
      {
        path: routes.signUp,
        element: <SignUpPage />,
      },
      {
        path: routes.homePage,
        element: <HomePage />,
      },
      {
        path: routes.ProgramFinder,
        element: <ProgramFinder />,
      },
      {
        path: "/program-info/:programId",
        element: <ProgramInfo />,
      },
      {
        path: routes.WriteReview,
        element: <WriteReview />,
      },
      {
        path: routes.MyPage,
        element: <MyPage />,
      },
      {
        path: routes.AccountSetting,
        element: <AccountSetting />,
      },
      {
        path: routes.Chatbot,
        element: <Chatbot />,
      },
      {
        path: routes.Ability,
        element: <AbilityChat />,
      },
      {
        path: routes.Free,
        element: <FreeChat />,
      },
    ],
  },
]);
//
export default router;
