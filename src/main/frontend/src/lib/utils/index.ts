export const load = (promise: any) => {
  return promise()
    .then((res: any) => {
      return res
    })
    .catch((error: any) => {
      throw new Error(error)
    })
}

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
