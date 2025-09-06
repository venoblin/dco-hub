import { postGuide } from './service/guidesService.js'

const guideForm = document.getElementById('new-guide-form')

guideForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  const formData = new FormData(event.target)
  const data = Object.fromEntries(formData.entries())

  try {
    const res = await fetch('/api/guides', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (res.ok) {
    }
  } catch (error) {
    console.log(error)
  }
})
