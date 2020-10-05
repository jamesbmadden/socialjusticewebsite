import Tabs from './components/tabs';

if (localStorage.getItem('consent') === 'true') {
  firebase.analytics();
} else if (localStorage.getItem('consent') === 'false') {
  console.log('No Firebase Analytics');
} else {
  const cookieDisclaimer = document.querySelector('.cookies');
  cookieDisclaimer.style.display = 'block';

  cookieDisclaimer.querySelector('button').addEventListener('click', () => {
    cookieDisclaimer.style.display = 'none';
    localStorage.setItem('consent', 'true');
    firebase.analytics();
  })

  cookieDisclaimer.querySelector('img').addEventListener('click', event => {
    event.preventDefault();
    cookieDisclaimer.style.display = 'none';

    if (confirm('Disable Usage Tracking?')) {
      console.log('No Firebase Analytics');
    } else {
      localStorage.setItem('consent', true);
      firebase.analytics();
    }
  })
}