/* eslint-disable no-undef */
import { NavigationContext } from '@react-navigation/core'
import React from 'react'

export const navigationMock = {
  addListener: jest.fn(),
  canGoBack: jest.fn(),
  dangerouslyGetParent: jest.fn(),
  dangerouslyGetState: jest.fn(),
  dispatch: jest.fn(),
  goBack: jest.fn(),
  isFocused: jest.fn(),
  navigate: jest.fn(),
  removeListener: jest.fn(),
  pop: jest.fn(),
  popToTop: jest.fn(),
  push: jest.fn(),
  replace: jest.fn(),
  reset: jest.fn(),
  setParams: jest.fn(),
  setOptions: jest.fn(),
  getParent: jest.fn(),
  getState: jest.fn(),
}

export const MockedNavigation: React.FC = ({ children }) => {
  return (
    <NavigationContext.Provider value={navigationMock}>
      {children}
    </NavigationContext.Provider>
  )
}
