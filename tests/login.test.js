import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

import Login from './../pages/login'

describe('Login Page', () => {
  // it('renders without crashing', () => {
  //   render(<Login />)
  //   expect(screen.getByTestId('loginCard')).toBeInTheDocument()
  // })

  it('Fill the form and login', async () => {
    render(<Login />)

    await userEvent.type(screen.getByTestId('emailInput'), 'neeraj@gmail.com')
    await userEvent.type(screen.getByTestId('passwordInput'), 'neeraj')
    await userEvent.click(screen.getByTestId('submitBtn'))

    expect(window.location.pathname).toBe('/')
    await waitForElementToBeRemoved(() => screen.getByTestId('emailInput'))
  })
})
