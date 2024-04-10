import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import React from 'react'
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable scrollToTop for '/data' and any child routes of '/data'
    if (!pathname.startsWith('/data')) {
      window.scrollTo(0, 0);
    }
  }, [pathname]); // This effect runs every time the pathname changes
}