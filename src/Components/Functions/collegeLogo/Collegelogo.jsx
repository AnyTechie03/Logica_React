import React from 'react'
import smicalogo from '../../../assets/img/Simca Logo.jpg'
import sinhagadlogo from '../../../assets/img/Sinhgad logo.png'
import './Collegelogo.css'
const Collegelogo = () => {
    return (
        <div className='clglogolinks'>
        <div className='clglogo'>
            <a className="location" href="https://maps.app.goo.gl/yozbya8gUFNouYgaA" target="_blank" title="College Map"><img src={smicalogo} className="clglogoin fa-solidclg fa-locationin"></img></a>
        </div>
        <div className='clglogo2'>
            <a className="location" target="_blank" title="College Map"><img src={sinhagadlogo} className="clglogoin fa-solidclg fa-locationin"></img></a>
        </div>
        </div>
    )
}

export default Collegelogo