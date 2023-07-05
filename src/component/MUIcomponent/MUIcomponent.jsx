import React from 'react';
import {Button} from "@mui/material";
import classes from './MUIcomponent.module.css'
function MuIcomponent() {
    return (
        <div className={classes.wrapper}>
            <Button color="secondary" onClick={()=>alert('Hello world')}>Secondary</Button>
            <Button variant="contained" color="success" onClick={()=>alert('Вы успешно зарегистрированы!!!!')}>
                Success
            </Button>
            <Button variant="outlined" color="error" onClick={()=>alert('Ошибка')}>
                Error
            </Button>
        </div>
    );
}

export default MuIcomponent;