import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {

    return (
        <Card className={classes.users}>
            <ul>
            {props.Users.map((user) =>
                <li key={user.id} >
                {user.name} ({user.age} years)
                </li>
            )}
            </ul>
        </Card>
    )
}

export default UsersList;