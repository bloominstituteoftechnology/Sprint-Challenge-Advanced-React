import React from 'react'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom'
import useDarkMode from './hooks/useDarkMode'

afterEach(rtl.cleanup)

test('Render the app', () => {
   const wrapper = rtl.render(<useDarkMode />)
   
   wrapper.debug()
})


