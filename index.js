;(function () {
	const forms = document.querySelectorAll('form')

	forms.forEach((el) => {
		el.addEventListener('submit', function (e) {
			if (this.dataset.submitted) {
				return e.preventDefault()
			}
			this.dataset.submitted = true
		})
	})

	window.addEventListener('pageshow', (e) => {
		if (!e.persisted) {
			return
		}
		forms.forEach((el) => {
			delete el.dataset.submitted
		})
	})
})()
