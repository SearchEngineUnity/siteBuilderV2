import React from 'react';
import Seo from '../components/Seo';
import MainNav from '../components/navs/headerElements/MainNav';
import MainFooter from '../components/navs/footerElements/MainFooter';
import { useLayout } from '../hooks/useLayout';
import { mapSeoToProps } from '../lib/mapToProps';
import Search from '../components/search';

const searchIndices = [{ name: `pro_SGP`, title: `pro_SGP` }];

export default function MyLayout({ children, location, type, data, heroImage }) {
  const { mainNav, footer } = useLayout();
  return (
    <>
      <Seo {...mapSeoToProps(data, type)} heroImage={heroImage} />
      <header>
        <Search indices={searchIndices} />
      </header>
      {mainNav && <MainNav location={location} />}
      {children}
      {footer && <MainFooter />}
    </>
  );
}
