import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUsers.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUsers = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState()

    
    const usernameHandler = (event) => {
        setEnteredUsername(event.target.value);
    }
    
    const enteredAgeHandler =(event) => {
        setEnteredAge(event.target.value)
    }
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Something went wrong",
                message: "please enter a valid name and age(empty field)"
            })
            return;
        }
        if(+enteredAge < 1) {
            setError({
                title: "Invalid age!",
                message: "please enter a valid age"
            })
            return;
        }
        props.onAddUser(enteredUsername, enteredAge)
        setEnteredUsername('');
        setEnteredAge('');
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <div>
        {error && (<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} /> )}
        <Card className={classes.form}>
            <form
             onSubmit={onSubmitHandler}
              className='form_cont'
              >
                <label
                    htmlFor='username'
                >
                    Enter Username
                </label>
                <input
                    onChange={usernameHandler}
                    id='username'
                    type='text'
                        value={enteredUsername}
                />
                <label htmlFor='age'>Enter age</label>
                <input 
                onChange={enteredAgeHandler}
                id='age' 
                value={enteredAge}
                type='number' 
                />
                <Button type= "submit">Add User</Button>
            </form>
        </Card>
        </div>
    )
}

export default AddUsers;