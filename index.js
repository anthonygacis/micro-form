let getFormValues = (form_selector, isExcludeEmpty = false) => {
    let p = document.querySelector(form_selector);
    let form_inputs = p.querySelectorAll("input, select, textarea");
    let output = {};
    if (form_inputs.length) {
        form_inputs.forEach(function (item, index) {
            let v = item.value;
            let formName = item.getAttribute("name");

            if (formName !== "") {
                if (isExcludeEmpty && v === "") return;
                output[formName] = v;
            }
        });
    }

    return output;
}

export { getFormValues };
