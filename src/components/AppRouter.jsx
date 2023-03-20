import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { publicRoutes } from '../router/routes';

const AppRouter = () => {
    return (
       <Routes>
            {publicRoutes.map(route =>
                <Route
                    path={route.path}
                    element={route.element}
                    rest={route.rest}
                    key={route.path}  
                />
            )}
            <Route path="*" element={<Navigate replace to='/error'/>}></Route>
       </Routes>
    );
}

export default AppRouter;