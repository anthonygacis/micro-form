const getFormValues = (formSelector, isExcludeEmpty = false) => {
  const p = document.querySelector(formSelector)
  const formInputs = p.querySelectorAll('input, select, textarea')
  const output = {}
  if (formInputs.length) {
    formInputs.forEach(function (item, index) {
      const v = item.value
      const formName = item.getAttribute('name')

      if (formName !== '') {
        if (isExcludeEmpty && v === '') return
        output[formName] = v
      }
    })
  }

  return output
}

export { getFormValues }
