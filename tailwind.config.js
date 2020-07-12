module.exports = {
  purge: [],
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    extend: {
      colors: {
        aqua: {
          500: '#31eafe', /* LOGO, table gradient(top) */
          600: '#65d2f5', /* LOGO, table gradient(top - inner) */
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#228ce8', /* '#4299e1', /* light blue: table gradient(bottom), border */
          600: '#4ca1e7', /* '3182ce - inner */
          700: '#3d77aa', /* '#2b6cb0', /* dark blue: page background */
          800: '#2c5282',
          900: '#2a4365',
        },
        maroon: '#b71e0a', /* button border */
        gold: '#f5cd11', /* button gradient top */
        redmoon: '#e51c02', /* button gradient bottom */
        brown: {
          200: '#874c00',
          500: '#793400',
          800: '#2c1300'
        }
      },
      minHeight: {
        '10': '10vh',
        '20': '20vh',
        '30': '30vh',
        '40': '40vh',
        '50': '50vh',
        '60': '80vh',
        '70': '70vh',
        '80': '80vh',
        '90': '90vh'
      },
      minWidth: {
        '10': '10vw',
        '20': '20vw',
        '30': '30vw',
        '40': '40vw',
        '50': '50vw',
        '60': '80vw',
        '70': '70vw',
        '80': '80vw',
        '90': '90vw'
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
