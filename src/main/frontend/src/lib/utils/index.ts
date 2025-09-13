// const removeLoadElem = () => {
//   const loadElem = document.getElementById('loader-wrap')

//   if (loadElem) loadElem.remove()
// }

// const createLoadElem = (parentElem) => {
//   removeLoadElem()

//   const wrap = document.createElement('div')
//   wrap.setAttribute('id', 'loader-wrap')
//   wrap.classList.add('loader-wrap')

//   const loader = document.createElement('div')
//   loader.classList.add('loader')
//   loader.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
// 	<g stroke="#F6F7EB" stroke-width="1">
// 		<circle cx="12" cy="12" r="9.5" fill="none" stroke-linecap="round" stroke-width="3">
// 			<animate attributeName="stroke-dasharray" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0 150;42 150;42 150;42 150" />
// 			<animate attributeName="stroke-dashoffset" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0;-16;-59;-59" />
// 		</circle>
// 		<animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
// 	</g>
// </svg>`

//   wrap.appendChild(loader)

//   parentElem.appendChild(wrap)
// }

// export const load = (promise, parentElem) => {
//   let parent = parentElem
//   if (!parent) parent = document.body

//   createLoadElem(parent)

//   return promise()
//     .then((res) => {
//       removeLoadElem()

//       return res
//     })
//     .catch((error) => {
//       removeLoadElem()

//       throw new Error(error)
//     })
// }

export const cleanTime = (time: string) => {
  return `${time.slice(5, 7)}/${time.slice(8, 10)}/${time.slice(0, 4)}`
}

export const getBasePathname = (pathname: string | null) => {
  if (!pathname) {
    return ''
  }

  const path = pathname.slice(1)
  let endIdx = 0

  if (path.indexOf('/') === -1) {
    endIdx = path.length
  } else {
    endIdx = path.indexOf('/')
  }

  const cleanedPath = `/${path.slice(0, endIdx)}`

  return cleanedPath
}
