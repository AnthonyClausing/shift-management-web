import { ThemeUICSSObject } from 'theme-ui'

export const modalContentStyles: ThemeUICSSObject = {
    backgroundColor: '#FEFEFE',
    margin: '15% auto',
    padding: '20px',
    border: '1px solid #888',
    width: '80%'
}
export const modalContainerStyles: ThemeUICSSObject = {
    position: 'fixed',
    zIndex: '1000',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0,0,0, 0.4)',
}
export const closeStyles: ThemeUICSSObject = {
    color: '#aaa',
    float: 'right',
    fontSize: 5,
    fontWeight: 'bold',
    '&:hover': {
        color: "black",
        textDecoration: "none",
        cursor: "pointer",
    },
    '&:focus': {
        color: "black",
        textDecoration: "none",
        cursor: "pointer"
    }
}