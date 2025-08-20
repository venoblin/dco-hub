const guideForm = document.getElementById('new-guide-form')

guideForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  const guideAuthor = document.getElementById('author').value
  const guideTitle = document.getElementById('title').value
  const guideContent = document.getElementById('content').value

  console.log(guideAuthor, guideTitle, guideContent)
})
