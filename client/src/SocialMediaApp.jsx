import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'


export const SocialMediaApp = () => {
  return (
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
  )
}
