import RootScreen from 'app/components/RootScreen'
import Home from 'app/screens/Home'
import Post from 'app/screens/Post'
import NotFound from 'app/screens/NotFound'

export default {
  path: '/',
  component: RootScreen,
  indexRoute: Home,
  childRoutes: [
    Post,
    NotFound
  ]
}
