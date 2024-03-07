import { Button, FormControl, FormLabel, TextField, Typography } from "@mui/material";
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function NewProject() {
    return(
        <>
            <div style={{
                padding: '20px 50px',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Typography variant="h5" sx={{ padding: 1 }}>
                    + Create new project
                </Typography>
                <FormControl style={{
                }}>
                    <TextField 
                        label="Title"
                        size="small"    
                    />
                    <TextField 
                        label="Description"
                        size="small"    
                    />
                    {/* <DatePicker label="Due date" /> */}
                    <FormLabel>Add permisions</FormLabel>
                    <TextField></TextField>
                    <Button>Submit</Button>
                </FormControl>
            </div>
        </>
    );
}