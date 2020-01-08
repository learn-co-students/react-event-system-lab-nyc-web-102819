// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {

    focushelper = (e) => {
        console.log('Good!')
    }

    blurhelper = (e) => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <button onFocus={this.focushelper} onBlur={this.blurhelper}></button>
        )
    }
}

export default EyesOnMe