import { ThemeUICSSObject } from 'theme-ui'

export const inputStyles: ThemeUICSSObject = {
    padding: '0.25rem',
    marginX: 'auto',
    marginY: '1rem',
    fontSize: '1.125rem',
    lineHeight: '1.5rem',
    borderWidth: '1px',
    borderColor: 'gray',
    '&:focus': {
      borderColor: 'blue'
    },
    borderRadius: '0.25rem'
}
export const authCardStyles: ThemeUICSSObject = {
    color: 'gray',
    backgroundColor: 'white',
    paddingX: '0.5rem',
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
}
export const buttonStyles: ThemeUICSSObject = {
    fontWeight: 'bold',
    borderRadius: '0.25rem',
    paddingY: '0.25rem',
    display: 'block',
    marginX: 'auto',
    width: '70%'
}
export const dividerStyles: ThemeUICSSObject = {
    textAlign: 'center',
    position: 'relative',
    borderTopWidth: '1px',
    borderColor: 'gray',
    marginTop: '1.25rem',
    marginX: '0.75rem'
}
export const dividerTextStyles: ThemeUICSSObject = {
    paddingY: '0',
    paddingX: '0.5rem',
    position: 'relative',
    top: '-1rem',
    bg: 'red'
}