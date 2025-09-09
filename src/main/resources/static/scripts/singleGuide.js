import { load, cleanTime } from './utils/index.js'
import { getSingleGuide } from './service/guidesService.js'

const guide = await load(() => getSingleGuide(GUIDE_ID))

const header = document.querySelector('main header')
header.innerHTML = `
  <h1>${guide.title}</h1>

  <div>
    <p class="muted-text">By ${guide.author}</p>
    <p class="muted-text">Created ${cleanTime(guide.createdAt)}</p>
    ${
      guide.updatedAt !== guide.createdAt
        ? `<p class="muted-text">Updated ${cleanTime(guide.updatedAt)}</p>`
        : ''
    }
  </div>
`
