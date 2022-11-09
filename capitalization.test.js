const capitalization = require('./capitalization.js')

test('Check if the first charater is capitalized', ()=>{
    const value = capitalization('liverpool')
    expect(value).toBe('Liverpool')
})