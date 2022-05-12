import React from "react";
import {Card, CardContent, CardHeader, CardMedia, IconButton} from "@mui/material";
import {DeleteOutlined} from "@mui/icons-material";

export default function NoteCard({note}) {
    return(
        <div>
            <Card>
                <CardHeader
                    action={
                    <IconButton>
                        <DeleteOutlined/>
                    </IconButton>
                    }
                />
            </Card>
        </div>
    )
}