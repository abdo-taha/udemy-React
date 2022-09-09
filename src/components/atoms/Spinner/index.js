import { RotatingLines } from 'react-loader-spinner'


import React from 'react'

const Spinner = ({ width }) => {
    return (

        <
        RotatingLines strokeColor = "grey"
        strokeWidth = "5"
        animationDuration = "0.75"
        width = { width || 100 }
        visible = { true }
        />

    )
}

export default Spinner