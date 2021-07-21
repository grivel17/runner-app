import React, { Component } from 'react';


//
function DistanceInput (props){
    return <p>Dystans, który chcesz przebiec to: {props.distance} km</p>
}

function ExpectedTimeInput (props){
    return <p>Twój oczekiwany czas na mecie to: {props.finishTimeHours} h {props.finishTimeMinutes} min</p>
}

function YourSpeed(props){
    return <p>Aby osiągnąć oczekiwany rezultat musisz biec: {props.speedMinutes} min : {props.speedSecondes} sec / km, czyli {props.speed} km/h </p>

}

//
const divDivider = {
    backgroundColor: "green",
    width: "100%",
    height: "50px"
}

//

class Calc extends Component {
    
    constructor(props){
        super(props);
        this.re = /^[0-9\b]+$/;
        this.state = {
           distance: parseInt(0),
           expectedTimeHours: parseInt(0),
           expectedTimeMinutes: parseInt(0),
           speedMinutes: parseInt(0),
           speedSecondes: parseInt(0),
           speed: parseInt(0)
        }

    
        this.takeDistance = this.takeDistance.bind(this);
        this.takeExpectedTimeHours = this.takeExpectedTimeHours.bind(this);
        this.takeExpectedTimeMinutes = this.takeExpectedTimeMinutes.bind(this);
        this.returnSpeed = this.returnSpeed.bind(this);
    }

    //here you probably can refactor and put together all inputs

    takeDistance(event){
        if (event.target.value === '' || this.re.test(event.target.value)) {
        this.setState({distance: event.target.value})
        } else {
            alert("Musisz podać liczbę!")
        }     
    }
    
    takeExpectedTimeHours(event){
        if (event.target.value === '' || this.re.test(event.target.value)) {
            this.setState({expectedTimeHours: event.target.value})
            } else {
                alert("Musisz podać liczbę!")
            } 
    }

    takeExpectedTimeMinutes(event){
        if (event.target.value === '' || this.re.test(event.target.value)) {
            this.setState({expectedTimeMinutes: event.target.value})
            } else {
                alert("Musisz podać liczbę!")
            } 
    }
   
    //

    returnSpeed(){
        
        let wholeTime = this.state.expectedTimeHours * 60 + this.state.expectedTimeMinutes;
        let speedMinutes = Math.floor(wholeTime / this.state.distance); 
        let speedSecondes = Math.floor(((wholeTime / this.state.distance) - speedMinutes)*60); 
        let speed = 60 / (wholeTime / this.state.distance);
        
        this.setState({speedMinutes: speedMinutes,
                       speedSecondes: speedSecondes,
                       speed: speed.toFixed(1)               
        });



        
        
    }
    
    render() {
    return (
      <div>
       
       <p>Podaj dystans</p>
       <input type="text" name="distanceInput" placeholder="0 km" onChange={this.takeDistance}></input>
       <DistanceInput distance = {this.state.distance}/>
       
       <div style={divDivider}></div>

       <input type="text" name="expectedTime" placeholder="0 h" onChange={this.takeExpectedTimeHours}></input>
       <input type="text" name="expectedTime" placeholder="00 min" onChange={this.takeExpectedTimeMinutes}></input>
       
       <ExpectedTimeInput finishTimeHours = {this.state.expectedTimeHours} finishTimeMinutes={this.state.expectedTimeMinutes} />
        
       <div style={divDivider}></div>

        <button onClick={this.returnSpeed} >btn</button> 
        

       <YourSpeed speedMinutes={this.state.speedMinutes} speedSecondes={this.state.speedSecondes} speed={this.state.speed}/> 

       <div style={divDivider}></div>

      </div>
    );
  }
}

export default Calc;