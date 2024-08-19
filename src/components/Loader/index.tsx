"use client"; // If using "use client" for Next.js 13 or later

import { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { Router as router } from 'next/router';

const Loader: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    loading ? (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 z-50">
        <Spin size="large" />
      </div>
    ) : null
  );
};

export default Loader;