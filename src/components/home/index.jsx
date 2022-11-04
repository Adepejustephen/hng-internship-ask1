import React from 'react'
import { LinksComp } from './links';
import { Profile } from './profile';
import { Share } from './share';

export const HomeUi = () => {
  return (
    <>
      <Share />
      <Profile />
      <LinksComp />
    </>
  );
}
