import { createBrowserRouter } from 'react-router'

import GeneralLayout from './layouts/GeneralLayout'
import Layout from './components/Layout/Layout'

import Home from './pages/Home'
import Notfound from './pages/Notfound'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <GeneralLayout>
        <Home />
      </GeneralLayout>
    ),
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
