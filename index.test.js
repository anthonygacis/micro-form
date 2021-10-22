/**
 * @jest-environment jsdom
 */
const { getFormValues } = require(".");

test('return foo-bar as a single object from a single html input', () => {
    document.body.innerHTML = `<form id='form1'>
        <input name='foo' value='bar'>
    </form>`

    expect(getFormValues('#form1')).toEqual({ foo: "bar" });
});

test('return two object properties from two html input', () => {
    document.body.innerHTML = `<form id='form1'>
        <input name='foo' value='bar'>
        <input name='bar' value='fiz'>
    </form>`

    expect(getFormValues('#form1')).toEqual({ foo: "bar", bar: "fiz" });
});

test('return array of values from array-based input name', () => {
    document.body.innerHTML = `<form id='form1'>
        <input name='foo[]' value='bar'>
        <input name='foo[]' value='fiz'>
    </form>`

    expect(getFormValues('#form1')).toEqual({ foo: ["bar", "fiz"] });
});