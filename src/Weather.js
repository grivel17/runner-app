import React, { Component } from 'react';


// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));
// to mon przetestować z tym simple json 
//https://grivel17.github.io/chuck-api/script.js






// componentDidMount() {
//     fetch("https://api.example.com/items")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             items: result.items
//           });
//         },
//         // Uwaga: to ważne, żeby obsłużyć błędy tutaj, a
//         // nie w bloku catch(), aby nie przetwarzać błędów
//         // mających swoje źródło w komponencie.
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )
//   }






class Weather extends Component{
    
   
        
    
    
    constructor(props){
        super(props);
        this.state = {
            cityInput: 'Gdańsk',
            locationKey: '',
            cityName: ''
        }

        const apiKey = 'rUdbiKbWfPFFd2OxVrYmiu5TigCQBenO&q'
        const apiLocalization = encodeURI(this.state.cityInput) 
        
        this.apiUrl = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}=${apiLocalization}`
        
    }



    
    componentDidMount(){
        fetch(this.apiUrl)
            .then(res => res.json())
            .then((result)=>{this.setState({
                locationKey: result[0].Key,
                cityName: result[0].LocalizedName
            
            })})
    }


    //teraz mechanizm wprowadzania miasta za pomocą inputu przez usera 




    render(){
        const {locationKey, cityName} = this.state

        return(
            <div>
                Pokaz pogode dla: klucz miasta {locationKey} oraz potwierdź nazwę miasta {cityName}
            </div>


        )
    }
}

export default Weather;

