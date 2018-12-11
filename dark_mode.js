class Mode {
  constructor(container, screenMode) {
    this.body = document.querySelector('body')
    this.container = container
    this.mode = screenMode
    this.renderInput()
  }

  renderInput() {
    if (this.container) {
      this.container.insertAdjacentHTML('afterbegin', `
        <label class="switch">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      `)

      const input = document.querySelector('.switch input')

      this.eventHandler(input)
      this.checkStorage(input)
    }
  }

  eventHandler(input) {
    input.addEventListener('change', this.changeMode.bind(this, input))
  }

  changeMode(input) {
    if (input.checked) {
      this.body.classList.add(this.mode)
      this.storeData(this.mode)
    } else if (this.body.classList.contains(this.mode)) {
      this.body.classList.remove(this.mode)
      this.storeData('')
    }
  }

  storeData(mode) {
    localStorage.setItem('screen_mode', mode)
  }

  checkStorage(input) {
    if (localStorage.getItem('screen_mode')) {
      this.body.classList.add(this.mode)
      input.checked = true
    }
  }
}

module.exports = Mode
