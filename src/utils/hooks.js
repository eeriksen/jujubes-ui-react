import { useEffect, useRef } from "react";

export const useDebounce = (callback, values, delay) => {
    const firstRun = useRef(true);
    const callbackTimeout = useRef();

    useEffect(() => {
        if(firstRun.current){
            firstRun.current = false;
            return;
        }

        if (callback) {
            clearTimeout(callbackTimeout.current);
            callbackTimeout.current = setTimeout(() => {
                callback();
            }, delay || 500);
        }

        return () => {
            clearTimeout(callbackTimeout.current);
        }
    }, values);
};
