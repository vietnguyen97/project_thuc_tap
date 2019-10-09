import React from 'react';
import Home from '../page/Home/Home';
import NotFound from '../page/NotFound/NotFound';
import Content from '../page/Content/Content';
const routes = [
    {
        path : '/',
        exact : true,
        main : ({match}) => <Home match={match}/>
    },
    {
        path : '/ket-qua/thong-tin',
        exact : false,
        main : ({match}) => <Content match={match}/>
    },
    {
        path : '',
        exact : false,
        main : () => <NotFound/>
    }
];
export default routes;