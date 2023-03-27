import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddUser from "./components/addUser";
import EditUser from "./components/EditUser";

import MangerHomePage from "./components/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MangerHomePage />,
  },
  {
    path: "/addUser",
    element: <AddUser />,
  },
  {
    path: "/editUser",
    element: <EditUser />,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
