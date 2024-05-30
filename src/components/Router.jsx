import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CompanyPage } from '../pages/company-page/company-page';
import { EmployeePage } from '../pages/employee-page/employee-page';

export const Router = () => {
    return (
        <Routes>
            <Route path='/empoloyee' element={<EmployeePage />} />
            <Route path='/company' element={<CompanyPage />} />
            <Route path='*' element={<Navigate to={'/empoloyee'} replace />} />
        </Routes>
    );
};
