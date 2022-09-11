import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Layout from './components/Common/Layout';
import Home from './pages/Home';
import Issue from './pages/Issue';
import Repo from './pages/Repo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/repos" element={<Repo />} />
          <Route path="/issues" element={<Issue />} />
          <Route path="/*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
