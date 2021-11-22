// import axios from 'axios';
import { startCase } from 'lodash'
import React from 'react';
import Accordion from './Accordion';
function Settings() {
  interface User {
    email: string
    firstName: string
    lastName: string
    phone: string
  }
  interface Location {
    name: string
    formatted_address: string
    display_address: string
  }
  const users = [{ email: 'owner@besttest.com', firstName: 'OwnerOf', lastName: 'BestTest', phone: '347-555-1234'}, { email: 'manager@besttest.com', firstName: 'ManagerOf', lastName: 'BestTest', phone: '347-555-3456'}, { email: 'employee@besttest2.com', firstName: 'EmployeeOf', lastName: 'BestTestTwo', phone: '347-555-7890'}]
  const locations = [{
    name: 'Best Test Electronics Super Store',
    formatted_address: '321 West Avenue Brooklyn, NY 11224',
    display_address: '321 West Avenue',
  },{
    name: 'Best Test Electronics Super Store',
    formatted_address: '654 West Montague St Brooklyn, NY 11201',
    display_address: '654 West Montague St',
  }]
  const usersAccordionContent = function() {
    return (
      // might be table-fixed with key=data_key val=fraction of space for each th
      <table className="table-auto w-full">
        <thead>
          <tr>
            {users[0] && Object.keys(users[0]).map((h, idx) =>  (<th key={idx+1234} className="text-left">{startCase(h)}</th>))}
          </tr>
        </thead>
        <tbody>
          {
            users[0] &&  users.map((user: User, idx) => {
              return (
                <tr key={idx+2345}>
                  { Object.values(user).map((val, idx) => <td key={idx+3456}>{val}</td>) }
                </tr>
              )
            })
          }  
        </tbody>
      </table>
    )
  }
  const locationsAccordionContent = function() {
    return (
      <table className="table-auto w-full">
        <thead>
          <tr>
            {locations[0] && Object.keys(locations[0]).map((h, idx) =>  (<th key={idx+4567} className="text-left">{startCase(h)}</th>))}
          </tr>
        </thead>
        <tbody>
          {
            locations[0] &&  locations.map((location: Location, idx) => {
              return (
                <tr key={idx+5678}>
                  { Object.values(location).map((val, idx) => <td key={idx+6789}>{val}</td>) }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
  return (
    <div id="settings">
      <div id="settings-users">
        <Accordion title="Users" content={usersAccordionContent()}></Accordion>
      </div>    
      <div id="settings-locations">
        <Accordion title="Locations" content={locationsAccordionContent()}></Accordion>
      </div>
    </div>
  );
}

export default Settings;
