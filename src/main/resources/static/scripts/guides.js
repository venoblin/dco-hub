import { getGuides } from './service/guidesService.js'
import { load } from './utils/index.js'

const guidesContainer = document.getElementById('guides-container')

const allGuides = await load(getGuides, guidesContainer)

const cleanTime = (time) => {
  return `${time.slice(5, 7)}/${time.slice(8, 10)}/${time.slice(0, 4)}`
}

const createGuide = (guide) => {
  const guideElem = document.createElement('div')
  guideElem.classList.add('guide-card')
  guideElem.innerHTML = `
    <div>
      <a class="title" href="/guides/${guide.id}">${guide.title} →</a>
      <p class="author">By ${guide.author}</p>
      <p class="created-at">Created ${cleanTime(guide.createdAt)}</p>
      ${
        guide.updatedAt !== guide.createdAt
          ? `<p class="updated-at">Updated ${cleanTime(guide.updatedAt)}</p>`
          : ''
      }
    </div>

    <div>
      <p class="content">${guide.content}</p>
    </div>
  `

  guidesContainer.appendChild(guideElem)
}

if (allGuides && allGuides.length > 0) {
  for (let guide of allGuides) {
    createGuide(guide)
  }
} else {
  const msg = document.createElement('p')
  msg.classList.add('msg')
  msg.innerText = 'No guides found!'

  guidesContainer.appendChild(msg)
}
