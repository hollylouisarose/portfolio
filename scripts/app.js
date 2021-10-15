const animatedTags = document.querySelectorAll('section')
const body = document.querySelector('body')
const progressBar = document.querySelector('div.progress-bar')
const button = document.querySelector('#toggle')
const images = document.querySelectorAll('.image-holder')

body.classList.remove('dark-theme')

if (window.innerWidth > 400 ){
  animatedTags.forEach(tag => {
    console.log(tag.className)
    tag.style.opacity = 0
  })
  
}

const handleFadeIn = () => {

  let delay = 0.2

  animatedTags.forEach(tag => {
    const tagTop = tag.getBoundingClientRect().top
    const tagBottom = tag.getBoundingClientRect().bottom

    if (tagTop < window.innerHeight && tagBottom > 0) {
      tag.style.animation = `fadein 1s ${delay}s both`
      delay = delay + 0.25
    } else {
      tag.style.opacity = 0
      tag.style.animation = ''
    }

  })

}

handleFadeIn()

const handleScroll = () => {

  const pixels = window.pageYOffset
  const pageHeight = body.getBoundingClientRect().height
  const totalScrollDistance = pageHeight - window.innerHeight
  const percentage = pixels / totalScrollDistance
  progressBar.style.width = `${100 * percentage}%`

}

const handleColourTheme = () => {
  body.classList.toggle('dark-theme')
  button.classList.toggle('sun-icon')
}

const handleGifHoverEnter = (e) => {
  const image = e.target
  if (e.target.id === 'moodible'){
    image.style.backgroundImage = 'url(images/moodible.gif)'
  } else if (e.target.id === 'choose-your-hero'){
    image.style.backgroundImage = 'url(images/chooseyourhero.gif)'
  } else if (e.target.id === 'ms-pacman'){
    image.style.backgroundImage = 'url(images/mspacman.gif)'
  } else if (e.target.id === 'pawfect-pal'){
    image.style.backgroundImage = 'url(images/pawfectpal.gif)'
  }
}

const handleGifHoverExit = (e) => {
  const image = e.target
  if (e.target.id === 'moodible'){
    image.style.backgroundImage = 'url(images/moodible.png)'
  } else if (e.target.id === 'choose-your-hero'){
    image.style.backgroundImage = 'url(images/chooseyourhero.png)'
  } else if (e.target.id === 'ms-pacman'){
    image.style.backgroundImage = 'url(images/mspacman.png)'
  } else if (e.target.id === 'pawfect-pal'){
    image.style.backgroundImage = 'url(images/pawfectpal.png)'
  }

}

images.forEach(image => {
  image.addEventListener('mouseover', handleGifHoverEnter)
  image.addEventListener('mouseleave', handleGifHoverExit)
})

document.addEventListener('scroll', handleFadeIn)
document.addEventListener('touchmove', handleFadeIn)
document.addEventListener('scroll', handleScroll)
window.addEventListener('resize', handleFadeIn)
button.addEventListener('click', handleColourTheme)
button.addEventListener('touch', handleColourTheme)



