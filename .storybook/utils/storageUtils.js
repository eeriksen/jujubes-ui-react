/**
 * Local storage util
 */

export const getData = (key) => {
    let value = undefined;
    try {
        let _localStorage = localStorage || window.localStorage;

        if (_localStorage && _localStorage[key]) {
            value = JSON.parse(_localStorage[key]);
        }
    } catch (ex) {
        console.log("Problem getting %s from localStorage", key, localStorage);
    }

    return value;
};

export const setData = (key, value) => {
    let _localStorage;
    try {
        _localStorage = localStorage || window.localStorage;

        if (_localStorage) {
            if (value) {
                _localStorage.setItem(key, JSON.stringify(value));
            } else {
                _localStorage.removeItem(key);
            }
        }
    } catch (ex) {
        console.warn("localStorage not available, using fallback storage.");
    }
};
