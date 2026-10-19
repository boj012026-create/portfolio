import Home from '../pages/Home.tsx'
import Projects from '../pages/Projects.tsx'
import App from '../App.tsx'
import { createBrowserRouter } from 'react-router-dom'
/*
 * Links Pages to urls
 */
export const router = createBrowserRouter([{
  path: '/', element: <App />,
    children: [
      {path: 'home', element: <Home />},
      {path: 'projects', element: <Projects />}
    ]},
  {errorElement: <h1>Routing Error</h1>},
  {path: '*', element: <h1>404 not found</h1>}
])
