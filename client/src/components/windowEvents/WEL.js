import { useWindowEvent } from './useWindowEvent';

export default {

    useKeyUp: function(callback) {
        return useWindowEvent("keyup", callback);
    },

    useMouseMove: function(callback) {
        return useWindowEvent("mousemove", callback);
    },

    useWheel: function(callback) {
        return useWindowEvent("onwheel", callback);
    },

    useInput: function(callback) {
        return useWindowEvent("oninput", callback);
    },

    useScroll: function(callback) {
        return useWindowEvent("scroll", callback);
    },

    useTouchEnd: function(callback) {
        return useWindowEvent("touchend", callback);
    }
}