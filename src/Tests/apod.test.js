import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import this for additional matchers

import PictureOfDay from '../pages/apod';

// Mocking fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        url: 'https://example.com/image.jpg',
        title: 'Test Image',
        date: '2024-05-04',
        explanation: 'This is a test image explanation.',
      }),
  })
);

describe('PictureOfDay component', () => {
  test('renders with default date', async () => {
    render(<PictureOfDay />);

    // Check if the loading message is displayed
    expect(screen.getByText('Picture of the day')).toBeInTheDocument();
    expect(screen.getByText('Select Date:')).toBeInTheDocument();

    // Simulate fetching of photo data
    await screen.findByText('Test Image');

    // Check if the image and description are rendered
    expect(screen.getByAltText('Test Image')).toBeInTheDocument();
    expect(screen.getByText('Test Image')).toBeInTheDocument();
    expect(screen.getByText('2024-05-04')).toBeInTheDocument();
    expect(screen.getByText('This is a test image explanation.')).toBeInTheDocument();
  });

  test('renders with selected date', async () => {
    render(<PictureOfDay />);

    // Change the date
    const dateInput = screen.getByLabelText('Select Date:');
    fireEvent.change(dateInput, { target: { value: '2024-05-03' } });

    // Simulate fetching of photo data
    await screen.findByText('Test Image');

    // Check if the image and description are rendered for the selected date
    expect(screen.getByAltText('Test Image')).toBeInTheDocument();
    expect(screen.getByText('Test Image')).toBeInTheDocument();
    expect(screen.getByText('2024-05-04')).toBeInTheDocument();
    expect(screen.getByText('This is a test image explanation.')).toBeInTheDocument();
  });
});
