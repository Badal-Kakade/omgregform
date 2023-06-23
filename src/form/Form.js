import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Form = ({handlePageTemplate}) => {
    const [exstngRole, setExstngRole] = useState([{ roles: "" }]);
    const [bonusPoint, setBonusPoint] = useState([{b_point : ''}]);
    const [quaRequ, setQuaRequ] = useState([{q_n_R : ''}]);
    const [city, setCity] = useState({ location: [] });
    const [allData, setAllData] = useState([{role_data:'', point_data:'', req_data: '', loc_data: ''}]);

    
    useEffect(()=>{
        setAllData([{positionData, exstngRole, bonusPoint,quaRequ,city}]);
    })
    const [positionData , setpositionData] = useState({
        position:'',
        position_role:''
      })
    
      let name, value;
      const getFormData = (event) =>{
        name = event.target.name;
        value = event.target.value;
    
        setpositionData({...positionData, [name] : value })
      }
    const handlecheck = (e) => {
    const { value, checked } = e.target;
    const { location } = city;
        if (checked) {
            setCity({
            location: [...location, value]
            });
        }
        else {
            setCity({
            location: location.filter((e) => e !== value)
            });
        }
    
    }
    const handleSubmit =()=>{
        localStorage.setItem('all_data', JSON.stringify(allData));
        handlePageTemplate();
    }

    const handleRoleChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...exstngRole];
        list[index][name] = value;
        setExstngRole(list);
      };
    const handleRoleAdd = () => {
        setExstngRole([...exstngRole, { roles: "" }]);
      };
    const handleRoleRemove =(index) =>{
        const list = [...exstngRole];
        list.splice(index, 1);
        setExstngRole(list);
    }
    const handleBonusChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...bonusPoint];
        list[index][name] = value;
        setBonusPoint(list);
      };
    const handleBonusAdd = () => {
        setBonusPoint([...bonusPoint, { b_point: "" }]);
      };
    const handleBonusRemove =(index) =>{
        const list = [...bonusPoint];
        list.splice(index, 1);
        setBonusPoint(list);
    }  
    const handleQ_n_RChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...quaRequ];
        list[index][name] = value;
        setQuaRequ(list);
      };
    const handleQ_n_RAdd = () => {
        setQuaRequ([...quaRequ, { q_n_R: "" }]);
      };
    const handleQ_n_RRemove =(index) =>{
        const list = [...quaRequ];
        list.splice(index, 1);
        setQuaRequ(list);
    }
  return (
    <div className='formbg'>
        <Box className='formframe'>
            <div className='headingSec'>
                <Typography className='headTitle'>Job Description Maker</Typography>
                <Typography className='headDescr'>Just to make sure that everything you do can make a difference!</Typography>
            </div>
            <Box className='boxSec'>
                <Grid item>
                    <Typography className='formLabel'>Position</Typography>
                    <TextField name='position' value={positionData.position} onChange={getFormData} className='txtbox' id="standard-basic" placeholder='Ex-Grafics Designer' variant="standard" />
                </Grid>
                <Grid item>
                    <Typography className='formLabel'>Location</Typography>
                    <FormGroup>
                        <Grid container>
                            <Grid item xs={6} md={4}>
                                <FormControlLabel value='Noida' onChange={handlecheck} className='ckbox' control={<Checkbox />} label="Noida" />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <FormControlLabel value='Delhi' onChange={handlecheck} className='ckbox' control={<Checkbox />} label="Delhi" />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <FormControlLabel value='Gurugram' onChange={handlecheck} className='ckbox' control={<Checkbox />} label="Gurugram" />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <FormControlLabel value='Mumbai' onChange={handlecheck} className='ckbox' control={<Checkbox />} label="Mumbai" />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <FormControlLabel value='Bangalore' onChange={handlecheck} className='ckbox' control={<Checkbox />} label="Bangalore" />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <FormControlLabel value='Coimbatore' onChange={handlecheck} className='ckbox' control={<Checkbox />} label="Coimbatore" />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <FormControlLabel value='Hyderabad' onChange={handlecheck} className='ckbox' control={<Checkbox />} label="Hyderabad" />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <FormControlLabel value='Pune' onChange={handlecheck} className='ckbox' control={<Checkbox />} label="Pune" />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <FormControlLabel value='Other' onChange={handlecheck} className='ckbox' control={<Checkbox />} label="Other" />
                            </Grid>
                        </Grid>
                    </FormGroup>
                </Grid>
                <Grid item>
                    <Typography className='formLabel'>About the role</Typography>
                    <TextField name='position_role' value={positionData.position_role} onChange={getFormData} className='txtbox' id="standard-basic" 
                    placeholder='Write some lines about the roles of the candidate.' 
                    variant="standard" />
                </Grid>
                <Grid item>
                    <Typography className='formLabel'>This is an exciting role and would entail you to</Typography>
                    {exstngRole.map((singleRole, index) => (
                        <Grid container key={index}>
                            <TextField className='txtbox' id="standard-basic" value={singleRole.roles} name='roles'
                            placeholder='How this role will help them in the future?' 
                            onChange={(e) => handleRoleChange(e, index)}
                            variant="standard" />
                            <Typography className='icoStyle' variant='span'><AddCircleOutline onClick={handleRoleAdd}/></Typography>
                            {exstngRole.length !== 1 && (<Typography className='icoStyle' variant='span'><RemoveCircleOutline onClick={handleRoleRemove}/></Typography>)}
                        </Grid>
                    ))}
                </Grid>
                
                <Grid item>
                    <Typography className='formLabel'>Bonus Points</Typography>
                    {bonusPoint.map((singleBonus, index) => (
                        <Grid container key={index}>
                            <TextField className='txtbox' id="standard-basic" value={singleBonus.b_point} name='b_point'
                            placeholder='Having these will make them stand out.' 
                            onChange={(e) => handleBonusChange(e, index)}
                            variant="standard" />
                            <Typography className='icoStyle' variant='span'><AddCircleOutline onClick={handleBonusAdd}/></Typography>
                            {bonusPoint.length !== 1 && (<Typography className='icoStyle' variant='span'><RemoveCircleOutline onClick={handleBonusRemove}/></Typography>)}
                        </Grid>
                    ))}
                </Grid>
                <Grid item>
                    <Typography className='formLabel'>Qualifications & Requirements</Typography>
                    {quaRequ.map((singleQ_n_R, index) => (
                        <Grid container key={index}>
                            <TextField className='txtbox' id="standard-basic" value={singleQ_n_R.q_n_R} name='q_n_R'
                            placeholder='How this role will help them in the future?' 
                            onChange={(e) => handleQ_n_RChange(e, index)}
                            variant="standard" />
                            <Typography className='icoStyle' variant='span'><AddCircleOutline onClick={handleQ_n_RAdd}/></Typography>
                            {quaRequ.length !== 1 && (<Typography className='icoStyle' variant='span'><RemoveCircleOutline onClick={handleQ_n_RRemove}/></Typography>)}
                        </Grid>
                    ))}
                </Grid>
                <Grid item className='btnSec'><Button onClick={handleSubmit} className='butnClass'>Generate PDF</Button></Grid>
            </Box>
        </Box>
    </div>
  )
}

export default Form