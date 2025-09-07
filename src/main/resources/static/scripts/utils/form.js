class Form extends FormData {
  #form
  #formData
  #children

  constructor(form) {
    super(form)

    this.#form = form
    this.#formData = Object.fromEntries(super.entries())
    this.#children = []

    const inputs = form.querySelectorAll('input')
    const textareas = form.querySelectorAll('textarea')

    if (inputs) {
      this.#children = [...this.#children, ...inputs]
    }

    if (textareas) {
      this.#children = [...this.#children, ...textareas]
    }
  }

  getData() {
    return this.#formData
  }

  clear() {
    console.log(this.#children)
  }
}

export default Form
