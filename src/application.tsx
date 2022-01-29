import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './config/routes';

export interface IApplicationProps {}

const Application: React.FC<IApplicationProps> = () => {
    return (
        <Switch>
            {routes.map((route, index) => {
                return <Route 
                key={index} 
                exact={route.exact} 
                path={route.path} 
                render={(routerProps: <any>) => <route.component {...routerProps} />} />;
            })}
        </Switch>
    );
};

export default Application;
