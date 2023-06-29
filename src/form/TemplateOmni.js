import React, { useContext } from 'react'
import { StateContext } from '../Context';
import jsPDF from 'jspdf';
import omni_logo from '../assets/omni_logo.png'
import annalect_logo from '../assets/annalect_logo.png'
import { Box, Button, Grid, Typography } from '@mui/material';

const TemplateOmni = ({handlePageForm}) => {
    const { nwExstngRole, setNwExstngRole, nwBonusPoint, setNwBonusPoint, nwQuaRequ, setNwQuaRequ, 
        nwCity, setNwCity, nwPositionData , setNwPositionData } = useContext(StateContext);

        const generatePDF = () => {
            const report = new jsPDF('portrait', 'pt', 'a4');
            // const backgroundColor = '#000'; // Background color (in this case, black)
            
            // Set background color
            // report.setFillColor(backgroundColor);
            // report.rect(0, 0, report.internal.pageSize.getWidth(), 
            // report.internal.pageSize.getHeight(), 'F');
            
            report.html(document.querySelector('#omni_temp'), {
                callback: () => {
                    // Set footer content
                    const footerComponent = document.querySelector('#omni_footer');
                    const pageCount = report.internal.getNumberOfPages();
                    
                    // Set the footer for each page
                    for (let i = 1; i <= pageCount; i++) {
                        report.setPage(i);
                        report.setFontSize(10);
                        report.setTextColor(128);
                        const footerText = footerComponent.innerHTML;
                        report.text(
                            footerText,
                            report.internal.pageSize.getWidth() / 2,
                            report.internal.pageSize.getHeight() - 10,
                            { align: 'center' }
                        );
                    }
                }
            }).then(() => {
                report.save('report.pdf');
            });
        };
  return (
    <>
    <div>
        <div className='bckbtn'><Button onClick={handlePageForm}>Back</Button></div>
        <div className='btnsec'><Button onClick={generatePDF}>Print</Button></div>
    </div>
    <div className='template_omni'>
        <div id='omni_temp' style={{margin: '1.5em'}}>
            <Grid container className='logoImg_omni'>
                <Grid item xs={6} md={6}>
                    <img className='imgSize' width={'90%'} src={omni_logo} />
                </Grid>
                <Grid item xs={6} md={6} sx={{textAlign: 'right'}}>
                    <img className='imgSize' width={'55%'} src={annalect_logo} />
                </Grid>
            </Grid>
            <Grid item className='hrpsitnSec'>
                <Typography className='orngtxt' sx={{fontSize:'2em !important', 
                marginTop: '-10px !important'}}>Associate Director</Typography>
                <Typography className='orngtxt' sx={{fontSize:'0.8em', 
                marginTop: '-5px !important'}}>Intelligent Automation (IA) Activation</Typography>
                
            </Grid>
            <hr style={{borderColor:'#f69236'}} />
            <Grid container className='locSec'>
                <Grid item md={5}></Grid>
                <Grid item xs={8} md={7} className='lctnSec'>
                    <Typography className='paratxt jdsec'>
                        Bangalore/ Hyderabad/ Chennai/Gurugram/ Coimbatore/ Mumbai
                    </Typography>
                </Grid>
            </Grid>
            <Grid item className='abtCompny'>
                <Typography className='orngtxt'>About the company</Typography>
                <Typography  className='paratxt'>
                    Omnicom Global Delivery is an integral part of Omnicom Media, the second largest 
                    advertising agency holding company in the world in terms of revenue and is the 
                    leading global marketing communications company. Our portfolio includes global 
                    advertising agency networks: BBDO, DDB, TBWA, DAS, OMG and CCN.
                </Typography>
                <Typography  className='paratxt'>
                    Omnicom Global Delivery has key role for our group companies and global agencies by 
                    providing stellar products and services in areas of Creative Services, Technology, 
                    Marketing Science (data & analytics) and Media Services. We currently have 2500+ 
                    awesome colleagues who are committed to solve our clients’ pressing business issues. 
                    We are growing rapidly and looking for talented professionals like you to be part of 
                    this journey.
                </Typography>
                <Typography className='orngtxt'>Let us build this, together!</Typography>
            </Grid>
            {/* <hr style={{width:'20%'}}></hr> */}
            <Grid container>
                    <Box className='workclslysec' >
                        <Typography className='orngtxt'>About the role</Typography>
                        {/* <Typography  className='paratxt'>
                            {nwPositionData.you_work_closely}
                        </Typography> */}
                        <Typography  className='paratxt'>
                            We have a role for Associate Director – Intelligent Automation Activation. This role 
                            entails you to lead the technical automation & RPA workstream for multiple 
                            clients/agencies, being responsible for driving innovative thinking and identifying 
                            the challenges and opportunities.
                        </Typography>
                        <Typography className='paratxt'>
                            You will get an opportunity to demonstrate your leadership skills and support 
                            various stakeholders to realize the goals and visions of the Automaton CoE function 
                            at Annalect India. Serve as bridge between business and development teams throughout 
                            all project phases; effectively manage associated issues and risks and ensure 
                            on-time and on-budget implementation delivery that meets clients' needs and 
                            requirements.
                        </Typography>
                    </Box>
            </Grid>
            <Grid container className='rlsnrespo'>
                <Grid item xs={6} md={6}>
                    <Box className='workclslysec' >
                        <Typography className='orngtxt'>You will be working closely with</Typography>
                        <Typography  className='paratxt'>
                            {nwPositionData.you_work_closely}
                        </Typography>
                    </Box>
                    <Box className='roledescr'>
                        <Typography className='orngtxt'>This is an exciting role and would entail you to</Typography>
                        {/* <ul className='paratxt ultxt'>
                            <li>
                                Knowledgeable of (or have a strong desire to learn) latest industry trends,
                                especially around automation/creative delivery</li>
                            <li>
                                Attention to detail with the ability to apply style and brand guidelines 
                                consistently and accurately over a range of executions
                            </li>
                            <li>
                                A positive personality & can-do attitude with a dedicated approach to 
                                getting the job done Excellent communication and interpersonal skills
                            </li>
                        </ul> */}
                        {nwExstngRole.map((role_data, index) =>(
                            <ul key={index}  className='paratxt ultxt'>
                                <li>{role_data.roles}</li>
                            </ul>
                        ))}
                    </Box>
                    <Box className='desirable' >
                        <Typography sx={{fontWeight: '700', 
                        fontSize: '0.7em', marginTop: '0.5em'}}>Desirable:</Typography>
                        {/* <ul className='paratxt ultxt'>
                            <li>
                                Some experience programming in HTML, CSS & Javascript to code assets 
                                for any advertising platform.
                            </li>
                            <li>
                                Working knowledge in After Effects.
                            </li>
                        </ul> */}
                        {nwBonusPoint.map((des_data, index) =>(
                            <ul key={index}  className='paratxt ultxt'>
                                <li>{des_data.b_point}</li>
                            </ul>
                        ))}
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box className='reqdescsec'>
                        <Typography className='orngtxt'>This may be the right role for you if you have</Typography>
                        {/* <ul className='paratxt ultxt'>
                            <li>
                                3-5+ years previous experience as a finished artist/Digital designer in the 
                                advertising, marketing and production industry
                            </li>
                            <li>
                                Studio design and finished art & basic retouching for deliverables in 
                                print and digital channels
                            </li>
                            <li>
                                Excellent attention to detail and time management skills, allowing delivery 
                                of work on time and to high standard
                            </li>
                            <li>
                                Ability to prioritise and self-manage, escalating early to avoid potential 
                                issues
                            </li>
                            <li>A critical eye for quality and strong ownership of brand guidelines</li>
                            <li>Ensure all work has a high degree of design aesthetic & maintains creative 
                                integrity</li>
                            <li>Fluent in Adobe CS (InDesign, Illustrator, Photoshop)</li>
                            <li>A desire to be part of team that is constantly evolving by using latest 
                                technology to deliver Ads to market
                            </li>
                        </ul> */}
                        {nwQuaRequ.map((qne_data, index) =>(
                            <ul key={index}  className='paratxt ultxt'>
                                <li>{qne_data.q_n_R}</li>
                            </ul>
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </div>
        <div id='omni_footer'>
            <Grid item className='footer'>
                <hr style={{width: '25%',borderColor:'#f69236'}} />
                <Typography className='paratxt'>Are you ready? Send your resume at</Typography>
                <Typography className='orngtxt'>careers.india@annalect.com</Typography>
                <Typography className='paratxt'>
                    We are an equal opportunity employer and value diversity. All employment is decided on 
                    the basis of qualifications, merit and business need.
                    </Typography>
            </Grid>
        </div>
    </div>
    </>
  )
}

export default TemplateOmni