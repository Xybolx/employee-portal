import { useEffect, useState } from 'react';
import WEL from './WEL';

const UseIdleTimer = () => {

    const [idleTimer, setIdleTimer] = useState(600);

    useEffect(() => {
        const idleInterval = setInterval(() => {
            setIdleTimer(idleTimer - 1)
        }, 1000);
        return () => clearInterval(idleInterval);
    }, [idleTimer]);

    WEL.useMouseMove(ev => setIdleTimer(600));

    WEL.useKeyUp(ev => setIdleTimer(600));

    WEL.useWheel(ev => setIdleTimer(600));

    WEL.useInput(ev => setIdleTimer(600));

    WEL.useScroll(ev => setIdleTimer(600));

    WEL.useTouchEnd(ev => setIdleTimer(600));

    if (idleTimer === 0) {
        window.location = "/logout";
    }
    return (
        null
    );
};

export default UseIdleTimer;