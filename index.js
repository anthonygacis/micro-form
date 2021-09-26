const getFormValues = (formSelector, isExcludeEmpty = false) => {
    const p = document.querySelector(formSelector)
    const formInputs = p.querySelectorAll('input, select, textarea')
    let output = {}
    if (formInputs.length) {
        formInputs.forEach(function (item, index) {
            const v = (!isNaN(item.value) ? parseFloat(item.value) : item.value)
            const formName = item.getAttribute('name')

            if (formName !== '') {
                if (isExcludeEmpty && v === '') return

                if (formName.includes('[]')) {
                    let tempFormName = formName.replace('[]', '')
                    output[tempFormName] = (!output[tempFormName] ? [v] : [...output[tempFormName], v])
                } else {
                    output[formName] = v
                }
            }
        })
    }

    return output
}

module.exports = exports = { getFormValues }
