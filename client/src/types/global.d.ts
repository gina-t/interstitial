import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

declare module '@vitejs/plugin-react';
declare module '@tailwindcss/vite';
declare module 'react/jsx-runtime';
declare module 'react-dom/client';

export {};
