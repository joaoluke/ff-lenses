import { createBrowserRouter } from 'react-router'

import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Notfound from './pages/Notfound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: (
      <Layout>
        <Notfound />
      </Layout>
    ),
  },
])

export default router
