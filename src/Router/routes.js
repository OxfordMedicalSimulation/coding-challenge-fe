import React from 'react'

const PageNotFound = React.lazy(() => import('Screens/PageNotFound'))

const Home = React.lazy(() => import('Screens/Home'))
const Patients = React.lazy(() => import('Screens/Patients'))

const routes = [
  {
    id: 'home',
    name: 'Home',
    Component: Home,
    path: ['/home'],
  },

  {
    id: 'patients',
    name: 'Patients',
    Component: Patients,
    path: ['/patients'],
  },
]

export { PageNotFound }
export { Home as DefaultRoute }
export const [defaultRoute] = routes

export default routes
