import React from 'react';
import MainNav from '../components/navs/headerElements/MainNav';
import MainFooter from '../components/navs/footerElements/MainFooter';
import { useLayout } from '../hooks/useLayout';
// import Search from '../components/search';

// const searchIndices = [{ name: `pro_SGP`, title: `pro_SGP` }];

export default function MyLayout({ children, location }) {
  const { mainNav, footer } = useLayout();
  return (
    <>
      <header>{/* <Search indices={searchIndices} /> */}</header>
      {mainNav && <MainNav location={location} />}
      {children}
      {footer && <MainFooter />}
    </>
  );
}
