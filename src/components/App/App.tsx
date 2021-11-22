import React from 'react';
import { css } from "@emotion/react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { Dashboard } from '@/components/Dashboard/Dashboard';
import { Login } from '@/components/Login/Login';
import { Header } from '@/components/Header/Header'

import { useToken } from '@/constants/useToken';

function RequireAuth({ children }: { children: JSX.Element }) {
  const { token } = useToken();
  const location = useLocation();
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
}

function LoginPage() {
  const { token, saveToken } = useToken();
  const location = useLocation();
  if (token) {
    return <Navigate to="/dashboard" state={{ from: location }} />;
  }
  return <Login saveToken={saveToken} />;
}

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <div css={wrapper}>
        <Routes>
          <Route path="/" element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
const wrapper = css({
  height: "100%",
  padding: "20px",
});
