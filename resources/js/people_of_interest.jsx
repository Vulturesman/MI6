import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './people-of-interest/app';
 
export default function PeopleOfInterest() {
    
    return (
        <App />
    );
}
 
const container = document.getElementById('people-of-interest-app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<PeopleOfInterest />);