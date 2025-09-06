import { postGuide } from './service/guidesService.js'

postGuide()

const guideForm = document.getElementById('new-guide-form')

guideForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  const formData = new FormData(event.target)
  const data = Object.fromEntries(formData.entries())
})
