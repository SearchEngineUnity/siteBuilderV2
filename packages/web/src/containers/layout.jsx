import React from 'react';
import MainNav from '../components/navs/headerElements/MainNav';
import TLUFooter from '../components/navs/footerElements/TLUFooter';
import { useLayout } from '../hooks/useLayout';
// import Search from '../components/search';

// const searchIndices = [{ name: `pro_SGP`, title: `pro_SGP` }];

export default function MyLayout({ children }) {
  const { mainNav } = useLayout();
  return (
    <>
      <header>{/* <Search indices={searchIndices} /> */}</header>
      {mainNav && <MainNav />}
      {children}
      <TLUFooter />
    </>
  );
}
