export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#060816',
        surface: '#111827',
        primary: '#66d9ff',
        accent: '#7c3aed',
        glow: '#18bfff'
      },
      boxShadow: {
        glow: '0 0 40px rgba(102, 217, 255, 0.14)'
      }
    }
  },
  plugins: []
};
