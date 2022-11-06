import {
    Avatar,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
    } from "@mui/material";
import React from "react";

function Card({ title, body }) {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar alt="picture" src={"taion.jpg"} sx={{ width: 100, height: 100, margin: 2 }}/>
            </ListItemAvatar>
            <ListItemText
                primary={<Typography variant="h5">{title}</Typography>}
                secondary={<Typography variant="p">{body}</Typography>}
            />
        </ListItem>
    );
}

export default Card;