import Footer from "./components/Footer";
import Header from "./components/Header";
import CreateUser from "./pages/CreateUser";
import LandingPage from "./pages/LandingPage";

import * as ReactDOM from "react-dom/client";
import "./App.css";
import ListContact from "./pages/ListContact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
const Layout = () => {
  return (
    <div className="w-full min-h-screen ">
      <Header />
      <main className="max-w-screen-xl min-h-[90vh] mx-auto p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/contacts",
        element: <ListContact />,
      },
      {
        path: "/createcontact",
        element: <CreateUser />,
      },
    ],
  },
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
