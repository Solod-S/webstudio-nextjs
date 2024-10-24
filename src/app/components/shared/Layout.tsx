'use client';
import React, { useEffect, useState, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mainMinHeight, setMainMinHeight] = useState('auto');
  const headerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMainHeight = () => {
      const headerHeight = headerRef.current?.offsetHeight || 0;
      const footerHeight = footerRef.current?.offsetHeight || 0;
      const screenHeight = window.innerHeight;
      const minHeight = screenHeight - headerHeight - footerHeight;

      setMainMinHeight(`${minHeight}px`);
    };

    updateMainHeight();

    window.addEventListener('resize', updateMainHeight);

    return () => {
      window.removeEventListener('resize', updateMainHeight);
    };
  }, []);

  return (
    <>
      <div ref={headerRef}>
        <Header />
      </div>
      <main style={{ minHeight: mainMinHeight }}>{children}</main>
      <div ref={footerRef}>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
