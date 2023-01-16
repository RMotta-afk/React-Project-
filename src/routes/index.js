import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Page from '../pages/Page404';

export default function Roots() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="*" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}
