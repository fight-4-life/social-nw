import React from 'react'
import preloader from '../../../assets/preloader.gif';
import { Spin } from 'antd';

const Preloader = () => {
    return (
        <Spin size={"large"}/>
       // <img src={preloader} alt={'preloader'} />
    )
}

export default Preloader