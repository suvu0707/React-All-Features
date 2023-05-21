import React, { Component } from 'react'

class Lifecycle1 extends Component {
    constructor(props) {
        super(props);
        this.state = { favouriteColor: "red" }          //Mounting :Constructor Method
    }


    // static getDerivedStateFromProps(props, state) {   // Mounting && Ummounting :getDerivedStateFromProps Method ;; Check in App.js
    //     return { favouriteColor: props.favcol }
    // }

    // shouldComponentUpdate(){
    //     return true
    // }

    // changeColor = () => {
    //     this.setState({ favouriteColor: "blue" })
    // }

    componentDidMount(){                              //Mounting :componentDidMount Method
        setTimeout(()=>{
            this.setState({favouriteColor:"yellow"})
        },1000)
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("d1").innerHTML="Before The Update " +prevState.favouriteColor
    }

    componentDidUpdate(){
        document.getElementById("d2").innerHTML="The Updated Color "+this.state.favouriteColor
    }

    render() {
        return (
            <>
                <h1>My Fav Color is {this.state.favouriteColor}</h1>    // Mounting :Rendor Method
                {/* <button onClick={this.changeColor}>Change Color</button> */}

                <div id="d1"></div>
                <div id="d2"></div>
            </>
        )
    }
}
export default Lifecycle1