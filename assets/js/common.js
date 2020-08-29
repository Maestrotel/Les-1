const firstCard = document.querySelector('.card-wedding')
firstCard.addEventListener('click', function () {
  firstCard.classList.toggle('bg-red')
})

const dotObj = {
  x: 0,
  y: 0
}

const dot = document.getElementById('dot')
dot.addEventListener('click', function () {
  dotObj.x = dotObj.x + 200
  dotObj.y = dotObj.y + 100
  dot.style.left = dotObj.x + 'px'
  dot.style.top = dotObj.y + 'px'
})