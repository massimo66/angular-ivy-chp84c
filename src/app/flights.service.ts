import { Injectable } from '@angular/core';
import { Flight }  from './flight';

@Injectable()
export class FlightsService {

   flights: Flight[] = [
     {origin: "Miami", destination: 'Chicago', flightNumber: 345,
     depart: '2020-02-02T23:18:21.932Z',
     arrive: '2020-02-02T23:28:31.932Z', nonstop: true},
     {origin: "Roma", destination: 'Napoli', flightNumber: 432,
     depart: '2020-05-22T23:18:21.932Z',
     arrive: '2020-05-22T23:18:21.932Z', nonstop: false}
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