import React, { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, Card, CardMedia, Checkbox, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'

const Signup = () => {

    const [form,setForm]=useState({
        name:'',
        place:'',
        age:'',
        email:'',
        edu:'',
        phno:'',
        user:'',
        pass:'',
        cpass:'',
      })


    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    }

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
    <Card sx={{ maxWidth: 500}} style={{borderStyle:'groove', border:15}}>
    <div>
      <br />
      <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image="https://th.bing.com/th/id/OIP.F977i9e7dMrznvOT8q8azgHaEf?w=311&h=188&c=7&r=0&o=5&dpr=2.2&pid=1.7"
      />
      <h2><i>NEW USER ?</i></h2>
      <h2><i>SIGN UP</i> </h2>
      <div>
      <TextField
          label="Name"
        required
          sx={{ m: 1, width: '30ch' }}
          name='name'
          onChange={valueCap}
          />
      </div>
      
      <div>
      <TextField
          label="Place"
          onChange={valueCap}
          name='place'
          sx={{ m: 1, width: '30ch' }}
          />
      </div>

      <div>
      <TextField
          label="Age"
          onChange={valueCap}
          sx={{ m: 1, width: '30ch' }}
          name='age'
          />
      </div>
      
      <div>
      <TextField
      required
          label="Email Id"
      onChange={valueCap}
      type='email'
      name='email'
      sx={{ m: 1, width: '30ch' }}
      />
      </div>
      <div>
      <TextField
          label="Education"
          name='edu'
          sx={{ m: 1, width: '30ch' }}
          onChange={valueCap}
          />
      </div>

      <div>
      <TextField
          label="Phone No"
          name='phno'
          onChange={valueCap}
          sx={{ m: 1, width: '30ch' }}
          />
      </div>

      <div>
      <TextField
      required
      label="Username"
      name='user'
      onChange={valueCap}
      sx={{ m: 1, width: '30ch' }}
      />
      </div>



      <div>
        <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
          <InputLabel required htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            type={showPassword ? 'text' : 'password'}
            onChange={valueCap}
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
            name='pass'
            label="Password"
            />
        </FormControl>
            </div>
      

      
      <div>
        <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
          <InputLabel required htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            required
            type={showPassword ? 'text' : 'password'}
            onChange={valueCap}
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
            label="Confirm Password"
            name='cpass'
            />
        </FormControl>

        {/* CONFIRM PASSWORD */}
            </div>

            <h4><u>Terms and Conditions</u></h4>
            <h5>. * If book is not returned or damaged fine will be charged .</h5>
            <FormControlLabel required control={<Checkbox checked={checked}  onChange={handleChange}/>} label="Accept all Terms & Conditions" />

            <br />

            <Button variant="contained" disabled={!checked} onClick={valueAdd}  ><b>SIGN UP</b></Button>
            <br />
            <br />

    </div>
            </Card>
  )
}

export default Signup