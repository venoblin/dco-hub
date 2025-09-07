class Form extends FormData {
  #formData

  constructor(form) {
    super(form)
    this.#formData = Object.fromEntries(super.entries())
  }

  getData() {
    return this.#formData
  }

  clear() {
    super.forEach((val, key) => {
      super.delete(key)
    })
  }
}

export default Form
