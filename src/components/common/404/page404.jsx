import React from 'react';
import {Result, Button} from "antd";

export const page404 = () => {
    return(
    <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" href={"/profile"}>Back Profile</Button>}
    />)
}
