/**
 * Created by louie.lugtu on 1/29/2015.
 */

window.addEventListener('hashchange', function() {
   console.log('Hash changed!: ' + window.location.hash);

    if (window.location.hash === '#bookmark/1') {
        console.log('Stupid hashing!');
    }
});

/**
 * We use the # for Single page application
 */
