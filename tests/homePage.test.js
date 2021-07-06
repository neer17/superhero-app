import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

import Home from './../pages/index'
import { renderWithRouter } from './mock/routerMock'

describe('Home Page', () => {
  // it('renders without crashing', () => {
  //   render(<Home />)
  //   expect(window.location.pathname).toBe('/')
  //   expect(screen.getByTestId('homePageRoot')).toBeInTheDocument()
  // })

  it('Verify user credentials in the left pane', async () => {
    // Mocks Next.js route
    // renderWithRouter(<Home />, {
    //   router: { pathname: '/' },
    // })
    // expect(container).toMatchSnapshot()
    // expect(screen.getByRole('input', { name: 'emailContainer' }).value).toBe('neeraj@gmail.com')
    // expect(screen.getByRole('input', { name: 'nameContainer' }).value).toBe('Neeraj Sewanni')
  })
})
