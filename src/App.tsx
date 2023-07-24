import './App.css'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/root.tsx';
import ErrorPage from './pages/error-page.tsx';
import Ej2Grid from './pages/ej2.tsx';
import PrimeReact from './pages/primereact.tsx';
import ExtReact from './pages/extreact.tsx';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
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
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App