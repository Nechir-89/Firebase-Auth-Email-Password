import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'signin',
        element: <SignIn />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: 'signout',
        element: <SignOut />
      }
    ]
  }
])

export default router;