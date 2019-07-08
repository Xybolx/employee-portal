import { useEffect } from 'react';

export const useWindowEvent = (ev, callback) => {
    useEffect(() => {
        window.addEventListener(ev, callback);
        return () => window.removeEventListener(ev, callback);
    }, [ev, callback]);
};