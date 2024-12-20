module.exports = {
  content: ["./index.html","./contact.html", "./input.css"],
  theme: {
    extend: {
      colors: {
        'primary':'#FFD2A4',
        'primary-h':'#F2C79B',
        'orange-h' : '#DC9853',
        'secondary':'#FFF5EB',
        'black':'#0D0D0D',
        'grey':'#F4F2F0',
        'border-grey':'#FFFFFF26',
        'black-op':'#16172280',

      },
      fontFamily: {
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
      },
      gridTemplateRows: {
        'card-1': '1fr 3fr',
        'card-2': '1fr auto',
        'card-3': 'auto',
        'card-4': '1fr auto auto',
      },
      gridTemplateColumns: {
        'card-1': 'repeat(4, minmax(0, 1fr));',
        'card-2': 'repeat(3, minmax(0, 1fr));',
        'footer-1': '2fr 1fr 1fr 2fr',
      },
      spacing: {
        'hgap': '1.25rem',
        'vgap': '2.50rem',
        'hmar': '1.50rem',
        'vmar': '1.25rem',
        'smar': '0.75rem',
        'sect-m': '130px',
        'sect-m-s':'70px',
        'card-pad-s':'2rem',
        'card-pad':'4rem',
      },
    },
  },
  plugins: [],
};
