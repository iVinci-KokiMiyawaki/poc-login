import React from 'react';
import { css } from '@emotion/react';

import { Header } from '@/components/Header/Header';
import { List } from '@/components/List/List';

export const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <div css={wrapper}>
        <h1>Rovin Poc</h1>
        <List />
      </div>
    </>
  );
};

const wrapper = css({
  height: '100%',
  padding: '20px',
});
