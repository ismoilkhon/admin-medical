import { TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



export const AuthPage = () => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent style={{ display: 'flex', flexDirection: 'column' }} >
                <TextField id="outlined-basic" label="Log in" variant="outlined" />
                <TextField id="outlined-basic" label="Password" variant="outlined" />
            </CardContent>
        </Card>
    );
}