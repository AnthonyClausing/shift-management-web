 /** @jsxImportSource theme-ui */
//  import Form from 'theme-ui'
import { Form, Field } from 'react-final-form'
import { Box, Input, Label, Textarea, Button } from 'theme-ui'
 const body: React.FC = () => {
  const onSubmit = (arg: any) => console.log(arg)
  return (
   <Form
     onSubmit={onSubmit}
    //  validate={validate}
    render={({
      handleSubmit,
      submitting,
      pristine,
      values,
      submitErrors 
    }) => (
       <form onSubmit={handleSubmit}>
          <Box>
            <Label>email</Label>
            <Field name="email" type="email">
            {({ input, meta }) => (
              <>
                <Input type="email" {...input}/>
                {meta.touched && meta.error && <span>{meta.error}</span>}   
              </>
            )}
            </Field>
            <Label>first name</Label>
            <Field name="firstName">
            {({ input, meta }) => (
              <>
                <Input type="text" {...input}/>
                {meta.touched && meta.error && <span>{meta.error}</span>}                
              </>
            )}
            </Field>
            <Label>Last name</Label>
            <Field name="lastName" type="text">
            {({ input, meta }) => (
              <>
                <Input type="text" {...input}/>
                {meta.touched && meta.error && <span>{meta.error}</span>}                
              </>
            )}
            </Field>
            <Label>Phone</Label>
            <Field name="phone" type="tel">
            {({ input, meta }) => (
              <>
                <Input type="tel" {...input}/>
                {meta.touched && meta.error && <span>{meta.error}</span>}         
              </>
            )}
            </Field>
          </Box>
         <Button type="submit">Submit</Button>
       </form>
     )}
   />
 )
}
const footer: React.FC = () => { 
    return (
<></>
   ) 
}
const header: React.FC = () => { 
    return (
       <div>
           This is SUN Header
       </div>
   ) 
}

// will be either null, maybe empty string, or an option from an enum, and the import will happen in the modalwrapper, 
 export default {body, footer, header}