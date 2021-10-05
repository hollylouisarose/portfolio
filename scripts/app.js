const animatedTags = document.querySelectorAll('section')
const body = document.querySelector('body')
const progressBar = document.querySelector('div.progress-bar')
const button = document.querySelector('#toggle')
const images = document.querySelectorAll('.image-holder')

body.classList.remove('dark-theme')

console.log(images)

animatedTags.forEach(tag => {
  tag.style.opacity = 0
})

const handleFadeIn = () => {

  let delay = 0.25

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

document.addEventListener('scroll', handleFadeIn)
document.addEventListener('scroll', handleScroll)
window.addEventListener('resize', handleFadeIn)
button.addEventListener('click', handleColourTheme)
button.addEventListener('touch', handleColourTheme)


