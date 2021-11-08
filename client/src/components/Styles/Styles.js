import React from 'react'
import { useSelector } from 'react-redux'
import Style from './Style/Style'

const Styles = () => {
    const styles = useSelector((state) => state.styles );

    console.log(styles)
    return (
        <>
        <h1>Styles</h1>
        <Style />
        </>
    )
}

export default Styles
