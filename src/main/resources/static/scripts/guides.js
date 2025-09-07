import { getGuides } from './service/guidesService.js'
import { load } from './utils/index.js'

const guidesContainer = document.getElementById('guides-container')

const allGuides = await load(getGuides, guidesContainer)

const createGuide = (guide) => {
  const guideElem = document.createElement('div')
  guideElem.classList.add('guide-card')

  const titleElem = document.createElement('h2')
  titleElem.classList.add('title')
  titleElem.innerText = guide.title

  const authorElem = document.createElement('p')
  authorElem.classList.add('author')
  authorElem.innerText = `By ${guide.author}`

  guideElem.appendChild(titleElem)
  guideElem.appendChild(authorElem)

  guidesContainer.appendChild(guideElem)
}

if (allGuides && allGuides.length > 0) {
  for (let guide of allGuides) {
    createGuide(guide)
  }
} else {
  const msg = document.createElement('p')
  msg.innerText = 'No guides found!'

  guidesContainer.appendChild(msg)
}
