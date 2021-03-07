import {render} from '@testing-library/react-native';
import React from 'react';
import Characters from '../src/pages/characters';
jest.useFakeTimers();
jest.mock('@react-navigation/native');
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('Testing pages/characters', () => {
  it('should be able to render the characters page', async () => {
    const {getByTestId} = await render(<Characters />);
    const element = getByTestId('characters-page');
    expect(element).toBeTruthy();
  });

  //Verifica se o Flatlist está preenchido.
  it('should be able to show the ListItem element', async () => {
    const {getByTestId} = await render(<Characters />);
    const element = getByTestId('characters');
    expect(element).not.toBeNull();
  });
});
