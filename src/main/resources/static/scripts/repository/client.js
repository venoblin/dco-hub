class Client {
  #baseUrl

  constructor(baseUrl) {
    this.#baseUrl = baseUrl
  }

  #constructUrl = (endpoint) => {
    let cleanedEndpoint = endpoint

    if (cleanedEndpoint[0] === '/') {
      cleanedEndpoint.splice(0, 1)
    }
    console.log(cleanedEndpoint)

    return `${this.#baseUrl}/${cleanedEndpoint}`
  }

  async get(endpoint) {
    try {
      const res = await fetch()
    } catch (error) {}
  }
}
