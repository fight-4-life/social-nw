import React from "react";

const useState = React.useState
const useEffect = React.useEffect

export const Time: React.FC = () =>  {
    const [theTime, setTheTime] = useState(new Date().toLocaleString())

    useEffect(() => {
        const interval = setInterval(() => setTheTime(new Date().toLocaleString()), 1000)

        return () => clearInterval(interval)
    }, [])

    return <p>Now time is {theTime}.</p>
}