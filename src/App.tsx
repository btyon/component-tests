import './App.css'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/root.tsx';
import Ej2Grid from './pages/ej2.tsx';
import PrimeReact from './pages/primereact.tsx';
import ExtReact from './pages/extreact.tsx';
import Mui from './pages/mui.tsx';
import Semantic from './pages/semantic.tsx';

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
      path: "extreact",
      element: <ExtReact  />
    },
    {
      path: "mui",
      element: <Mui />
    },
    {
      path: "semantic",
      element: <Semantic />
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App