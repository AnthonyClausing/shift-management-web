 /** @jsxImportSource theme-ui */
//  import Form from 'theme-ui'
import { Form, Field } from 'react-final-form'
import { Box, Input, Label, Textarea, Button } from 'theme-ui'
//would ultimately use the Google Places(?) API search bar but for now will construct the address
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
         <Field name="new_location">
           {({ input, meta }) => (
             <Box>
               <Label>name</Label>
               <Field name="name">
               {({ input, meta }) => (
                  <>
                    <Input type="text" {...input}/>
                    {meta.touched && meta.error && <span>{meta.error}</span>}                
                  </>
                )}
               </Field>
               <Label>address</Label>
               <Field name="address" type="text">
               {({ input, meta }) => (
                  <>
                    <Input type="text" {...input}/>
                    {meta.touched && meta.error && <span>{meta.error}</span>}                
                  </>
                )}
               </Field>
               <Label>city</Label>
               <Field name="city" type="text">
               {({ input, meta }) => (
                  <>
                    <Input type="text" {...input}/>
                    {meta.touched && meta.error && <span>{meta.error}</span>}                
                  </>
                )}
               </Field>
               <Label>state</Label>
               <Field name="state" type="text">
               {({ input, meta }) => (
                  <>
                    <Input type="text" {...input}/>
                    {meta.touched && meta.error && <span>{meta.error}</span>}                
                  </>
                )}
               </Field>
               <Label>zip code</Label>
               <Field name="zip-code" type="text">
               {({ input, meta }) => (
                  <>
                    <Input type="text" {...input}/>
                    {meta.touched && meta.error && <span>{meta.error}</span>}                
                  </>
                )}
               </Field>
             </Box>
           )}
         </Field>
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