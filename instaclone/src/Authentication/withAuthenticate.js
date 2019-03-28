import React, {Component} from 'react'

const withAuthenticate = FirstComponent => SecondComponent => {
    return(
        class extends React.Component {
            render() {
                if(localStorage.getItem('username') === null){
                return <FirstComponent />
                } else {
                    return <SecondComponent />
                }
            }
        }
    )
}



export default withAuthenticate;