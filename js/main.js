window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        try {
            const worker = await navigator.serviceWorker.register('./sw.js');
        } catch (e) {
            console.error(e.message);
        }
    }
}