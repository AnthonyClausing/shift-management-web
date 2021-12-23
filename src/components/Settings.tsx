// import axios from 'axios';
import { startCase } from 'lodash'
import { Box, Button, ThemeUICSSObject } from 'theme-ui'
import React from 'react';
import Accordion from './Accordion';
import { RootStateOrAny, connect, InferableComponentEnhancerWithProps } from 'react-redux'
import type { User } from '../store/slices/userSlice'
import { Dispatch } from "redux";

type ConnectedProps<T> = T extends InferableComponentEnhancerWithProps<infer Props, infer _> ? Props : never

const mapStateToProps = (state: RootStateOrAny, ownProps:any) => ({
  locations: state.location.locations,
  users: state.user.users
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any) => {
  return  { 
    getUsers: () => dispatch({type: 'user/getUsers'}),
    setLocations: () => dispatch({type: 'location/setLocations'}),
    showModal: () => dispatch({type: 'modal/showModal', payload: true})
  }
}

class Settings extends React.Component<PropsFromRedux> {
  componentDidMount(){
    console.log(this)
    this.props.getUsers()
    this.props.setLocations()
  }
  render() {
    const openGlobalModal = () => {
      // possible argument for openGlobalModal function -> {name: '', modalProps:{}, modalComponent?: <Component/>}
      this.props.showModal()
    }
    const tableStyles: ThemeUICSSObject  = {
      width: '100',
      tableLayout: 'auto'
    }
    const headerStyles: ThemeUICSSObject  = {
      textAlign: 'left'
    }
    const usersAccordionContent = () => {
      return (
        <Box as="table" sx={tableStyles}>
          <thead>
            <tr>
              {this.props.users[0] && Object.keys(this.props.users[0]).map((h, idx) =>  (<Box as="th" key={h + '-header'} sx={headerStyles}>{startCase(h)}</Box>))}
            </tr>
            <tr>
              <th>
                <Button onClick={() => openGlobalModal()}>CLICK hERE</Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.users[0] &&  this.props.users.map((user: User) => (
                  <tr key={user.id + '-row'}>
                    { Object.values(user).map((val, idx) => <td key={user.id + idx + '-data'}>{val}</td>) }
                  </tr>
                )
              )
            }  
          </tbody>
        </Box>
      )
    }
    const locationsAccordionContent = function() {
      return (
        <div>Hello</div>
        // <table sx={tableStyles}>
        //   <thead>
        //     <tr>
        //       {locations[0] && Object.keys(locations[0]).map((h, idx) =>  (<th key={idx+4567} sx={{textAlign: 'left'}}>{startCase(h)}</th>))}
        //     </tr>
        //     <tr>
        //       <th>
        //       <button onClick={() => openGlobalModal()}>CLICK hERE</button>
        //         </th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     {
        //       locations[0] &&  locations.map((location: Location, idx) => {
        //         return (
        //           <tr key={idx+5678}>
        //             { Object.values(location).map((val, idx) => <td key={idx+6789}>{val}</td>) }
        //           </tr>
        //         )
        //       })
        //     }
        //   </tbody>
        // </table>
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
    )
  }
}
const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(Settings);
