import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange, CognitoUserInterface } from '@aws-amplify/ui-components';
import Amplify from 'aws-amplify';

import { Dashboard } from '@/components/Dashboard/Dashboard';

import awsconfig from '@/aws-exports';

Amplify.configure(awsconfig);

export const App: React.FC = () => {
  const [authState, setAuthState] = useState<AuthState>();
  const [user, setUser] = useState<CognitoUserInterface | undefined>();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState as AuthState);
      setUser(authData as CognitoUserInterface);
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            authState === AuthState.SignedIn && user ? (
              <Dashboard />
            ) : (
              <AmplifyAuthenticator>
                <AmplifySignIn slot="sign-in" hideSignUp={true} />
              </AmplifyAuthenticator>
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
