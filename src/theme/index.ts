import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  colorScheme: 'dark', // Dark mode for the whole app
  colors: {
    navy: ['#001f3d', '#003b6b', '#00529c', '#0069d1', '#007fff', '#4092c1', '#69a7c9', '#93c4d1', '#b7d4e1', '#c9e4f1'], // Navy shades for consistency
  },
  primaryColor: 'navy', // Set the primary color to navy
  fontFamily: 'Arial, sans-serif', // Set a simple font for consistency

  // Default text color
  white: '#ffffff',
  black: '#000000',

  // Customize Button, Input, etc. globally
  components: {
    Button: {
      styles: (theme) => ({
        root: {
          backgroundColor: '#007fff',
          color: '#ffffff',
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: '#0069d1',
          },
        },
      }),
    },
    Paper: {
      styles: {
        root: {
          backgroundColor: '#002b50', // Dark navy for paper/card components
          color: '#e0e0e0', // Light text
        },
      },
    },
    TextInput: {
      styles: {
        input: {
          backgroundColor: '#003b6b', // Navy input field
          borderColor: '#00529c', // Lighter border color
          color: '#ffffff', // Light text inside inputs
        },
      },
    },
  },
};
