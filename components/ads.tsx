"use client";

import React, { useEffect } from "react";
import Script from "next/script";

const AdComponent = ({ className, zoneId }: any) => {
  useEffect(() => {
    if (window.AdProvider) {
      window.AdProvider.push({ serve: {} });
    }
  }, []);

  return (
    <div>
      <ins className={className} data-zoneid={zoneId}></ins>
      <Script
        src="https://a.magsrv.com/ad-provider.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.AdProvider = window.AdProvider || [];
          window.AdProvider.push({ serve: {} });
        }}
      />
    </div>
  );
};

export default AdComponent;
