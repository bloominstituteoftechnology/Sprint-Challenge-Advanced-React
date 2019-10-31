import React from 'react'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'



afterEach(rtl.cleanup)


// test('Render the app', ()=> {
//     const wrapper = rtl.render(<App />)

//     const element = wrapper.getByText('Display')
//     expect(element).toBeVisible()
// }) ;

test('Render the div', ()=> {
    const wrapper = rtl.render(<App />)
    
    const div = wrapper.queryByLabelText(name)
    expect(div).toBeVisible()

})


test('fake test', () => {
    expect(true).toBeTruthy();
   })