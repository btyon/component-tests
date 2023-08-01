import './App.css'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './pages/page-utils/root.tsx';
import Ej2Grid from './pages/ej2.tsx';
import PrimeReact from './pages/primereact.tsx';
import Mui from './pages/mui.tsx';
import Ant from './pages/ant.tsx';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "syncfusion",
      element: <Ej2Grid />,
      handle: () => console.log("cafer"),
    },
    {
      path: "primereact",
      element: <PrimeReact />
    },
    {
      path: "mui",
      element: <Mui />
    },
    {
      path: "ant",
      element: <Ant />
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App