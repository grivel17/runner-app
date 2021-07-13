import React, { Component } from 'react';


//fajnie to zaczyna wyglądać dodaj kolejną funkcję, która pozwoli przeliczać na minuty 
//kolejny etap podanie wszystkich parametrów 
//dopiero na etapie debugingu przejrzyj kod z poprzedniej appki 

function ActualCount (props){

    return <p>Moja aktulana liczba klików to: {props.klik}</p>
}

function ActualInput (props){

    return <p>Musisz biec z predkoscia: {props.predkosc} km</p>
}


class Calc extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            wynik: 0,
            predkosc: 0
        }
        this.clickChange = this.clickChange.bind(this);
        this.clickReset = this.clickReset.bind(this);
        this.takeInput = this.takeInput.bind(this);
    }

    clickChange(){
        let inkrement = this.state.wynik;
        inkrement ++;
        this.setState({wynik: inkrement }); 
    }

    clickReset(){
        this.setState({wynik: 0})
    }

    takeInput(event){
        console.log(event.target.value)
        let predkosc = 10 / event.target.value * 60

        this.setState({predkosc: predkosc})
    }
    
    render() {
    return (
      <div>
        JAK SZYBKO MUSZĘ BIEC?
        <br></br>
        <button onClick={this.clickChange}>
            MOJ KLAWISZ
        </button>
        <br></br>
       
       <ActualCount klik={this.state.wynik} />

        <br></br>

        <button onClick={this.clickReset}>
            ZRESETUJ MNIE 
        </button>
        
        <br></br>
        <br></br>


        <input type="text" name="test" onChange={this.takeInput}></input>

        <br></br>
        <br></br>
        PODAJ czas NA 10 KM w MINUTACH 
        <ActualInput predkosc={this.state.predkosc} /> 


      </div>
    );
  }
}

export default Calc;