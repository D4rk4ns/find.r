import React from 'react';

import { Routes, Route } from 'react-router-dom';


import { Results } from './utils/Results';

export const Routesp = () => {
    return (
        <div className="p-4">
            
            <Routes>
                
                <Route exact path="/search" element={<Results/>}/>
                <Route exact path="/images" element={<Results/>}/>
                <Route exact path="/news" element={<Results/>}/>
                <Route exact path="/videos" element={<Results/>}/>
            </Routes>
            

        </div>
    )
}; 
//<Navigate to="/search" />