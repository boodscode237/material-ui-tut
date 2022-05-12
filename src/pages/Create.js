import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography';
import {Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from "@mui/material";
import {KeyboardArrowRightOutlined} from '@mui/icons-material'
import {makeStyles} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
    field:{
        marginTop: 20,
        marginBottom: 40,
        display: 'block'
    }
})

export default function Create() {
    const classes = useStyles()
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [category, setCategory] = useState('todos')

    const handleSubmit = (e) => {
        e.preventDefault()
        setTitleError(false)
        setDetailsError(false)

        if(title == ""){
            setTitleError(true)
        }
        if(details == ""){
            setDetailsError(true)
        }

        if(title && details){
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({title, details, category})
            }).then(() => history.push('/'))
        }
    }
  return (
    <Container>
        <Typography
            variant="h6"
            color="textSecondary"
            component="h2"
            gutterBottom
        >
            Create a New Note
        </Typography>
        <form sx={{ marginTop:'25px',marginBottom: '25px',display: 'block' }} noValidate autoComplete='off' onSubmit={handleSubmit}>
            <TextField
                onChange={(e) => setTitle(e.target.value)}
                sx={{ marginBottom: '25px',display: 'block' }}
                label={'Note Title'}
                variant={'outlined'}
                color={'secondary'}
                fullWidth
                required
                error={titleError}
            />
            <TextField
                onChange={(e) => setDetails(e.target.value)}

                sx={{ marginBottom: '25px' }}
                label={'Details'}
                variant={'outlined'}
                color={'secondary'}
                multiline
                rows={4}
                fullWidth
                required
                error={detailsError}
            />
            <FormControl sx={{ marginBottom: '25px' }}>
                <FormLabel>Note Category</FormLabel>
                <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                    <FormControlLabel value={"money"} control={<Radio/>} label={'Money'}/>
                    <FormControlLabel value={"todos"} control={<Radio/>} label={'Todos'}/>
                    <FormControlLabel value={"reminders"} control={<Radio/>} label={'Reminders'}/>
                    <FormControlLabel value={"work"} control={<Radio/>} label={'Work'}/>
                </RadioGroup>
                <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    endIcon={<KeyboardArrowRightOutlined/>}
                >
                    Submit
                </Button>
            </FormControl>
        </form>

        {/*icons*/}
        <br/>

    </Container>
  )
}
