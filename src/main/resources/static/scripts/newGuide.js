import Form from './utils/form.js'
import { postGuide } from './service/guidesService.js'

const guideForm = document.getElementById('new-guide-form')

guideForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  const form = new Form(event.target)
  const data = form.getData()

  form.clear()

  // await postGuide(data)
})
