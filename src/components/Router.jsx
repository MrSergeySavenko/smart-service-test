import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CompanyPage } from '../pages/CompanyPage/CompanyPage';
import { EmployeePage } from '../pages/EmployeePage/EmployeePage';

export const Router = () => {
    return (
        <div>
            <Routes>
                <Route path='/empoloyee' element={<EmployeePage />} />
                <Route path='/company' element={<CompanyPage />} />
                <Route path='*' element={<Navigate to={'/empoloyee'} replace />} />
            </Routes>
        </div>
    );
};
