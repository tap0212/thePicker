import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import { Modal } from 'react-responsive-modal';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import './nav.scss'
export default function Nav() {
    const [ open, setOpen] = React.useState(false) 
    const onOpenModal = () => {
        setOpen(true)
      };
     
     const onCloseModal = () => {
       setOpen(false)
      };


    return (
        <div className="nav">
            <h2>thePicker</h2>
            <a target="blank" href="https://github.com/tap0212/thePicker">
                <GitHubIcon  style={{fontSize:"35"}}/>
            </a>

            <InfoTwoToneIcon  onClick={onOpenModal} className="icon" style={{fontSize:"35"}}/>

            <Modal open={open} onClose={onCloseModal} center>
                  <div className="about">
                    <h2>Hope your are loving thePicker</h2>
                    <p>
                        thePicker helps you to decide a palette for your next project
                        <br/>
                        It has a collection of great color palettes created just for  you.
                    </p>
                    <h2>How It works?</h2>
                    <p>
                        Browse colors and click on one you like the most
                        <br/>
                    thePicker will then fetch the canvas <br /> suggest you a whole palette
                    </p>
                    <h2>Meet the developer</h2>
                    <h4>Tapan Awasthi</h4>
                    <div className="social">
                    <a target="blank"  href="https://github.com/tap0212/thePicker"><GitHubIcon style={{color:"#323131", padding:"2%"}} className="social-icon"/></a>
                    <a target="blank" href="https://www.linkedin.com/in/tapan-awasthi02/"><LinkedInIcon style={{color:"#2767B2", padding:"2%"}} className="social-icon"/></a>
                    <a  target="blank" href="https://www.instagram.com/tapanawasthi_/"><InstagramIcon style={{color:"#E3501B", padding:"2%"}} className="social-icon"/></a>
                    </div>
                    <h3>&copy; thePicker 2020</h3>
                  </div>
             </Modal>
        </div>
    )
}
