import React from 'react';
import MainNav from '../components/navs/headerElements/MainNav';
import TLUFooter from '../components/navs/footerElements/TLUFooter';
import { useLayout } from '../hooks/useLayout';

export default function MyLayout({ children }) {
  const { mainNav } = useLayout();
  return (
    <>
      {/* {mainNav && <MainNav />} */}
      {children}
      <TLUFooter />
    </>
  );
}
