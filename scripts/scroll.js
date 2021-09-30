const body = document.querySelector('body')
const progressBar = document.querySelector('div.progress-bar')

console.log(progressBar)

const handleScroll = () => {

  const pixels = window.pageYOffset
  const pageHeight = body.getBoundingClientRect().height
  const totalScrollDistance = pageHeight - window.innerHeight
  const percentage = pixels / totalScrollDistance
  
  progressBar.style.width = `${100 * percentage}%`

}


document.addEventListener('scroll', handleScroll)