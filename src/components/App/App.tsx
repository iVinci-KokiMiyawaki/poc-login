import React from 'react';
import { css } from "@emotion/react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import Amplify from 'aws-amplify';

import { Dashboard } from '@/components/Dashboard/Dashboard';
import { Header } from '@/components/Header/Header'

import awsconfig from '@/aws-exports';

Amplify.configure(awsconfig);

export const App: React.FC = () => {
  return (
    <AmplifyAuthenticator>
      <BrowserRouter>
        <Header />
        <div css={wrapper}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AmplifyAuthenticator>
  );
}
const wrapper = css({
  height: "100%",
  padding: "20px",
});
