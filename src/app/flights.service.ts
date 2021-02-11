import { Injectable } from '@angular/core';
import { Flight }  from './flight.model';

@Injectable()
export class FlightsService {

   flights: Flight[] = [
     {origin: "Miami", destination: 'Chicago', flightNumber: 345,
     depart: '2020-02-25T23:18:21.932Z',
     arrive: '2020-02-25T23:28:25.932Z', nonstop: true},
     {origin: "Roma", destination: 'Napoli', flightNumber: 432,
     depart: '2020-05-22T21:18:21.932Z',
     arrive: '2020-05-22T21:58:21.932Z', nonstop: false}
   ]
  constructor() { }
  getFlights() { 
   return this.flights;
  }
   postFlight(flight: Flight) {
  }

  deleteFlight(id: number) {
    
  }
}