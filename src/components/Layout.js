import React from 'react'
import {makeStyles} from "@material-ui/core";
import {Drawer, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import Typography from "@material-ui/core/Typography";
import {AddCircleOutlined, SubjectOutlined} from "@mui/icons-material";
import {useHistory, useLocation} from "react-router-dom";

const drawerWith = 240;
const useStyles = makeStyles((theme) => {
    return{
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWith
        },
        drawPaper: {
            width: drawerWith
        },
        root: {
            display: 'flex'
        },
        active: {
            background: '#aa8484'
        },
        title: {
            padding: theme.spacing(2)
        }
    }
})


export default function Layout({children}){
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color={"secondary"}/>,
            path: '/'
        },
        {
            text: 'Create Notes',
            icon: <AddCircleOutlined color={"secondary"}/>,
            path: '/create'
        },
    ]
    return(
        <div className={ classes.root }>
            {/* App bar*/}
            {/* side drawer*/}
            <Drawer
            className={classes.drawer}
            variant='permanent'
            anchor={"left"}
            classes={{ paper: classes.drawPaper }}
            >
                <div>
                    <Typography variant={"h5"} className={classes.title}>
                        Notes
                    </Typography>
                </div>

                <List>
                    {menuItems.map(item => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => history.push(item.path)}
                            className={location.pathname === item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
}