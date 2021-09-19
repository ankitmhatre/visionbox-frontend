import React, { useEffect } from 'react';
import logo from '../../assets/SVG/visionbox_v.svg';
import Spinner from '../ProgressSpinner/Spinner';
import './splashpage.css'
export default  function SplashPage(){
    return (<LoadingView />); 
}



const LoadingView = (props) => {
    return (
        <div
            style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}
        >
            <center>
                <img src={logo} width={'40%'} style={{margin:36}}/>
            </center>
            <Spinner />
        </div>
    )
        }