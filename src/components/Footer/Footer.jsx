import React from 'react';
import styles from './Footer.module.css';
import {Time} from "../common/Time/Time";

const Footer = (props) => {
    return (
        <div className={styles.footer}>
            :\ Pet Project by Vladimir L.
            <Time/>
        </div>
    );
}

export default Footer;