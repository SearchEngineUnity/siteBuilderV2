import React from 'react';
import MainNav from '../components/navs/headerElements/MainNav';
import MainFooter from '../components/navs/footerElements/MainFooter';
import { useLayout } from '../hooks/useLayout';

export default function MyLayout({ children, location }) {
  const { mainNav, footer } = useLayout();
  return (
    <>
      {mainNav && <MainNav location={location} />}
      {children}
      {footer && <MainFooter />}
    </>
  );
}
