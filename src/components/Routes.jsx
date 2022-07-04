import React from 'react';

import { Routes, Route } from 'react-router-dom';


import { Results } from './utils/Results';

export const Routesp = () => {
    return (
        <div className="p-4">
            
            <Routes>
                
                <Route exact path="find.r/search" element={<Results/>}/>
                <Route exact path="find.r/images" element={<Results/>}/>
                <Route exact path="find.r/news" element={<Results/>}/>
                <Route exact path="find.r/videos" element={<Results/>}/>
            </Routes>
            

        </div>
    )
}; 
//<Navigate to="/search" />