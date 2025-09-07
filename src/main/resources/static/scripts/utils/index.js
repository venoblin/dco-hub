const removeLoadElem = () => {
  const loadElem = document.getElementById('loader-wrap')

  if (loadElem) loadElem.remove()
}

const createLoadElem = (parentElem) => {
  removeLoadElem()

  const wrap = document.createElement('div')
  wrap.setAttribute('id', 'loader-wrap')
  wrap.classList.add('loader-wrap')

  const loader = document.createElement('div')
  loader.classList.add('loader')

  wrap.appendChild(loader)

  parentElem.appendChild(wrap)
}

export const load = (promise, parentElem) => {
  createLoadElem(parentElem)

  return promise()
    .then((res) => {
      removeLoadElem()

      return res
    })
    .catch((error) => {
      removeLoadElem()

      throw new Error(error)
    })
}
