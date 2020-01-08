// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

    keyuphelper = (e) => {
        console.log('Entering password...')
    }

    render() {
        return (
            <input onKeyUp={this.keyuphelper} type="password" />
        )
    }
}

export default Keypad