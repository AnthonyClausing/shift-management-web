import { Global } from '@emotion/react'

const GlobalStyles = (props: any) => (
    <Global
      styles={(theme) => ({
        'body':  {
            height: '100%',
            width: '100%'
        },
        '#root': {
            height: '100%',
            width: '100%'
        },
        '#app' : {
            height: '100%',
            width: '100%',
            display: 'grid',
            gridTemplateRows: '1fr 9fr'
        }
      })}
    />
  )
  export default GlobalStyles