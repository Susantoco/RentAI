import { createBrowserRouter } from "react-router-dom";
import  Home  from "./pages/Home";
import { Listings } from "./pages/Listings";
import { RoommateFinder } from "./pages/RoommateFinder";
import { RepairSupport } from "./pages/RepairSupport";
import { PropertyDetails } from "./pages/PropertyDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/listings",
    element: <Listings />,
  },
  {
    path: "/property/:id",
    element: <PropertyDetails />,
  },
  {
    path: "/roommate-finder",
    element: <RoommateFinder />,
  },
  {
    path: "/repair-support",
    element: <RepairSupport />,
  },
]);