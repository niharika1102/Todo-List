import ListItem from '@mui/material/ListItem';
import React from 'react';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Create from "@mui/icons-material/Create"

export default function TodoForm({addTodo}) {
    const [text, setText] = useState("");

    function handleChange(evt) {
        setText(evt.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        addTodo(text);
        setText("");
    }

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="outlined-basic" 
                    label="Add Todo" 
                    variant="outlined"
                    value={text} 
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: 
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="create todo"
                                    edge="end"
                                    type="submit">
                                    <Create/>
                                </IconButton>
                            </InputAdornment>
                    }}
                />
            </form>
        </ListItem>
    )
}