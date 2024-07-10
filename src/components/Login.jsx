import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, Card, CardMedia, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

  const [form,setForm]=useState({
    user:'',
    pass:''
  })

  function valueCap(e){
    setForm({...form,[e.target.name]:e.target.value})

  }

  function valueAdd(){
    console.log(form)
  }
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Card sx={{ maxWidth: 500}} style={{ borderStyle:'groove', border:15}}>
    <div>
      <br />
      <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image="https://th.bing.com/th/id/OIP.F977i9e7dMrznvOT8q8azgHaEf?w=311&h=188&c=7&r=0&o=5&dpr=2.2&pid=1.7"
        />
        <h2><i>LOGIN</i></h2>
      <div>
      <TextField
          label="Username / Email Id"
          // id="outlined-start-adornment"
          name='user'
          onChange={valueCap}
          sx={{ m: 1, width: '25ch' }}
          />
      </div>
      <div>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            // id="outlined-adornment-password"
            name='pass'
            onChange={valueCap}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            />
        </FormControl>
            </div>
            {/* <a href=''>Forgot Password ?</a> */}
            <br />
            <Button variant="contained" onClick={valueAdd} style={{ backgroundColor:'lightgreen', color:'black'}}><b>LOGIN</b></Button>
            {/* <br /> */}
            <br />
            <br />
            <Link to='/signup'><Button variant="contained" style={{backgroundColor:'blueviolet', color:'white'}}><b>SIGN UP</b></Button></Link>
            <br />
            <br />
            <Button href="" style={{color:'red'}}>Forgot password ?</Button>

    </div>
    </Card>
  )
}

export default Login