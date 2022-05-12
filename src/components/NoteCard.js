import React from "react";
import {Card, CardContent, CardHeader, CardMedia, IconButton} from "@mui/material";
import {DeleteOutlined} from "@mui/icons-material";
import Typography from "@material-ui/core/Typography";

export default function NoteCard({note, handleDelete}) {
    return(
        <div>
            <Card elevation={3}>
                <CardHeader
                    action={
                    <IconButton onClick={() => handleDelete(note.id)}>
                        <DeleteOutlined/>
                    </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                />
                <CardContent>
                    <Typography variant={"body2"} color={"textSecondary"}>
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}