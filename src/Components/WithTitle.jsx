import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// This wrapper function adds title to components
const WithTitle = ({ component: ChildComponent, title }) => (props) => {
    let defaultTitle = 'Kiwify';
    return (
        <HelmetProvider>
            <Helmet>
                <title>{title ? title : defaultTitle}</title>
            </Helmet>

            <ChildComponent {...props} />
        </HelmetProvider>
    );
};

export default WithTitle;

