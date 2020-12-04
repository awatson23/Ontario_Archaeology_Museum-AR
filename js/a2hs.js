

console.log('link add 2 hs');


// Detects if device is on iOS 
// const isIos = () => {
//     const userAgent = window.navigator.userAgent.toLowerCase();
//     return /iphone|ipad|ipod/.test( userAgent );
//   }
//   // Detects if device is in standalone mode
//   const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);
  
//   // Checks if should display install popup notification:
//   if (isIos() && !isInStandaloneMode()) {
//     this.setState({ showInstallMessage: true });
//   }

// resource https://www.netguru.com/codestories/pwa-ios

// <<<<<<<<<<<<<<<<<<<<<<Didnt work>>>>>>>>>>>>>>>>>>>

// let deferredPrompt;
// const addBtn = document.querySelector('.add-button');
// addBtn.style.display = 'none';


// window.addEventListener('beforeinstallprompt', (e) => {
//     // Prevent Chrome 67 and earlier from automatically showing the prompt
//     e.preventDefault();
//     // Stash the event so it can be triggered later.
//     deferredPrompt = e;
//     // Update UI to notify the user they can add to home screen
//     addBtn.style.display = 'block';
  
//     addBtn.addEventListener('click', (e) => {
//       // hide our user interface that shows our A2HS button
//       addBtn.style.display = 'none';
//       // Show the prompt
//       deferredPrompt.prompt();
//       // Wait for the user to respond to the prompt
//       deferredPrompt.userChoice.then((choiceResult) => {
//           if (choiceResult.outcome === 'accepted') {
//             console.log('User accepted the A2HS prompt');
//           } else {
//             console.log('User dismissed the A2HS prompt');
//           }
//           deferredPrompt = null;
//         });
//     });
//   });

// resource https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Add_to_home_screen#Manifest

// <<<<<<<<<<<<<<<<<<<<<<Didnt work>>>>>>>>>>>>>>>>>>>

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion();
});

buttonInstall.addEventListener('click', (e) => {
  // Hide the app provided install promotion
  hideMyInstallPromotion();
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
  });
});

window.addEventListener('appinstalled', (evt) => {
  // Log install to analytics
  console.log('INSTALL: Success');
});

// Resourse https://web.dev/customize-install/