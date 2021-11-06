import type {FormEvent} from 'react'
import React from "react";
import { Dialog} from '../Styles/CompStyles'
import { Form, Input, Label,CloseButton, SubmitButton, ErrorMessage} from '../Styles/FormStyle'
import EmployeePropType from './PropTypes/EmployeePropType';

interface TheHandleClick{
    handleClick:()=>void;
}

export default function AddEmployee({handleClick}:TheHandleClick, {addEmployees}:EmployeePropType) {
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
                name:firstName.value.concat(" " + lastName.value),
                birthDate:birthDate.value,
                gender:gender.value,
                salary:salary.value
            }
         addEmployees(values)  
        }
    }

    return (
            <Dialog>
                <CloseButton onClick={()=>handleClick()}>back</CloseButton>
                <Form onSubmit={(event)=>handlSubmit(event)}>
                    <Label >First Name</Label>
                    <Input name='firstName' type='text'onChange={()=>setError('')} placeholder='First Name'/>
                    <Label>Last Name</Label>
                    <Input name='lastName' type='text' onChange={()=>setError('')} placeholder='Last Name'/>
                    <Label>Birth Date</Label>
                    <Input name='birthDate'onChange={()=>setError('')} type='date' placeholder='Birth Date'/>
                    <Label>Gender</Label>
                    <div>
                        <span><Input onChange={()=>setError('')} name='gender'type='radio' value='male'/> Male</span>
                        <span><Input onChange={()=>setError('')} name='gender'type='radio' value='female'/> Female</span>
                    </div>
                    
                    <Label>Salary</Label>
                    <Input name="salary" onChange={()=>setError('')} type='number' placeholder='Salary'/>
                    {error && <ErrorMessage color='red'>{error}</ErrorMessage>}
                    <SubmitButton type='submit'>Submit</SubmitButton>
                </Form>
            </Dialog>
    )
}
