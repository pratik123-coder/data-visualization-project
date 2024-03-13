
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField';

const Login = () => {
    return (
        <div>
            <form className="form" action="">
                <TextField id="outlined-basic" label="userName" variant="outlined" />
                <TextField id="outlined-basic" label="password" variant="outlined" />
                <Button type="submit" color="primary" className="form__custom-button">
                    Log in
                </Button>
            </form>
        </div>
    )
}

export default Login
