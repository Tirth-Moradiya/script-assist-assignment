import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  colorScheme: 'dark',  
  colors: {
    navy: ['#001f3d', '#003b6b', '#00529c', '#0069d1', '#007fff', '#4092c1', '#69a7c9', '#93c4d1', '#b7d4e1', '#c9e4f1'],  
  },
  primaryColor: 'navy',  
  fontFamily: 'Arial, sans-serif',  

   
  white: '#ffffff',
  black: '#000000',

   
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
          backgroundColor: '#002b50',  
          color: '#e0e0e0',  
        },
      },
    },
    TextInput: {
      styles: {
        input: {
          backgroundColor: '#003b6b',  
          borderColor: '#00529c',  
          color: '#ffffff',  
        },
      },
    },
  },
};
