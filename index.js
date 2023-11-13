const shareBtn = document.querySelector('.fa-share')
const shareWindow = document.querySelector('.share-window')
const mediaQuery = window.matchMedia('(min-width: 750px)')


// Display share window
shareBtn.addEventListener('click', (event) => {
  // If the window size is laptop
  if (shareWindow.style.display === 'none'
   && mediaQuery.matches) {
    shareWindow.style.display = 'flex'
  } else if
  (shareWindow.style.display === 'none') {
    shareWindow.style.display = 'flex'
    shareBtn.style.backgroundColor = 'hsl(214, 17%, 51%)'
    shareBtn.style.color = '#ffff'
  }
  else {
    shareWindow.style.display = 'none'
    shareBtn.style.backgroundColor = 'hsl(210, 46%, 95%)'
    shareBtn.style.color = 'hsl(214, 17%, 51%)'
  }
})

