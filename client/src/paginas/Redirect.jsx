import { useEffect } from 'react';

const RedirectOn404 = () => {
  useEffect(() => {
    const handle404 = () => {
      if (window.location.pathname !== '/') {
        window.location.href = '/';
      }
    };

    window.addEventListener('', handle404);

    return () => {
      window.removeEventListener('popstate', handle404);
    };
  }, []);

  return null;
}
export default RedirectOn404