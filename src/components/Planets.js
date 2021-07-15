
import React from 'react';
import {  QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Planet from './Planet';
const queryClient = new QueryClient();
const fetchPanets = async () => {
    const result = await fetch('https://swapi.dev/api/planets')
    return result.json()
}

const Planets = () => {
    const { data, status } = useQuery('Planets', fetchPanets)
    console.log(data)
    return (
        <div>
          <h2>Planets</h2>
    
          {status === 'loading' && (
            <div>Loading data</div>
          )}
    
          {status === 'error' && (
            <div>Error fetching data</div>
          )}
    
          {status === 'success' && (
            <div>
              { data.results.map(planet => <Planet key={planet.name} planet={planet} /> ) }
            </div>
          )} 
        </div>
      );
}


export default function Wraped(){
return(<QueryClientProvider client={queryClient}>
        <Planets/>
    </QueryClientProvider>
);
    
}