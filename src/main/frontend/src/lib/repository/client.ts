class Client {
  #baseUrl

  constructor(baseUrl: string) {
    this.#baseUrl = baseUrl
  }

  #constructUrl = (endpoint: string) => {
    let cleanedEndpoint = endpoint

    if (cleanedEndpoint[0] === '/') {
      cleanedEndpoint = cleanedEndpoint.slice(1)
    }

    return `${this.#baseUrl}/${cleanedEndpoint}`
  }

  async post(endpoint: string, payload: any) {
    try {
      const res = await fetch(`${this.#constructUrl(endpoint)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      if (res.ok) {
        return res.json()
      }
    } catch (error: any) {
      throw new Error(error)
    }
  }

  async get(endpoint: string) {
    try {
      const res = await fetch(`${this.#constructUrl(endpoint)}`)

      if (res.ok) {
        return res.json()
      }
    } catch (error: any) {
      console.log(this.#constructUrl(endpoint))
      throw new Error(error)
    }
  }
}

export default Client
