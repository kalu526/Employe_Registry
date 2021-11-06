import type {FormEvent} from 'react'
import React from "react";
import { EditDialog,RowGrids} from '../Styles/CompStyles'
import { Form, Input, Label,CloseButton, SubmitButton, ErrorMessage} from '../Styles/FormStyle'

interface TheHandleClick{
    handleClick:()=>void;
}

 const UpdateEmployee=({handleClick}:TheHandleClick)=> {
    const [error,setError]=React.useState(String);
    const handlSubmit=(event:FormEvent<HTMLFormElement>)=>{

        event.preventDefault()
        const {firstName, lastName, birthDate, gender, salary} = event.target as typeof event.target & {
            firstName:{value:String}
            lastName:{value:String}
            birthDate:{value:String}
            gender:{value:String}
            salary:{value:Number}
        }
        
        if(firstName.value.slice()==='' || lastName.value.slice()==='' || birthDate.value.slice()==='' || gender.value.slice()==='' || salary.value.toString()==='')
        {
            setError('All Fields Are Required')
        }
        else{ 
            const values={
                name:firstName.value.concat(" "+lastName.value),
                birthDate:birthDate.value,
                gender:gender.value,
                salary:salary.value
            }
            console.log('this are the values to be added to db',values)
            
        }
    }

    return (
            <EditDialog>
                <CloseButton onClick={()=>handleClick()}>back</CloseButton>
                <Form onSubmit={(event)=>handlSubmit(event)}>
                    <RowGrids>
                        <Label >First Name</Label>
                        <Input name='firstName' onChange={()=>setError('')} placeholder='First Name'/>  
                    </RowGrids>
                    <RowGrids>
                        <Label>Last Name</Label>
                        <Input name='lastName' onChange={()=>setError('')} placeholder='Last Name'/>
                    </RowGrids>
                    <RowGrids>
                        <Label>Birth Date</Label>
                        <Input name='birthDate'onChange={()=>setError('')} type='date' placeholder='Birth Date'/>   
                    </RowGrids>
                    <RowGrids>
                        <Label>Gender</Label>
                        <div>
                            <span><Input onChange={()=>setError('')} name='gender'type='radio' value='male'/> Male</span>
                            <span><Input onChange={()=>setError('')} name='gender'type='radio' value='female'/> Female</span>
                        </div>
                    </RowGrids>
                    <RowGrids>
                        <Label>Salary</Label>
                        <Input name="salary" onChange={()=>setError('')} type='number' placeholder='Salary'/>
                    </RowGrids>
                    
                        {error && <ErrorMessage color='red'>{error}</ErrorMessage>}
                        <SubmitButton type='submit'>Update</SubmitButton>
                    
                </Form>
            </EditDialog>
    )
}

export default UpdateEmployee;