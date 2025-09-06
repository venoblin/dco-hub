import { getGuides } from './service/guidesService.js'

const guidesContainer = document.getElementById('guides-container')

const allGuides = await getGuides()

const createGuide = (guide) => {
  const guideElem = document.createElement('div')
  guideElem.classList.add('guide')

  const authorElem = document.createElement('p')
  authorElem.classList.add('author')
  authorElem.innerText = guide.author

  const titleElem = document.createElement('p')
  titleElem.classList.add('title')
  titleElem.innerText = guide.title

  const contentElem = document.createElement('p')
  contentElem.classList.add('content')
  contentElem.innerText = guide.content

  guideElem.appendChild(authorElem)
  guideElem.appendChild(titleElem)
  guideElem.appendChild(contentElem)

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
