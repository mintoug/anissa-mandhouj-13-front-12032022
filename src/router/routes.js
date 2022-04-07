import Error from '../pages/Error';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import { Route } from 'react-router-dom';


export const routes = [{
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/login',
        exact: true,
        component: Login,
    },
    {
        path: '/profile',
        exact: true,
        component: Profile,
        private: true,
    },
    {
        path: '*',
        exact: false,
        component: Error,
    },
];

export const MatchedRoutes = (route) => {
    return (
        <Route
            path={route.path}
            exact={route.exact}
            render={(props) => (<route.component {...props} routes={route.routes} /> )}
        />
    );
}
