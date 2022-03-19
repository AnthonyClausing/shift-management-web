// import axios from 'axios';
import { startCase } from 'lodash'
import { Box, Button, Flex, Text } from 'theme-ui'
import React, { MouseEventHandler } from 'react';
import Accordion from '@components/Accordion';
import { RootStateOrAny, connect, InferableComponentEnhancerWithProps } from 'react-redux'
import type { User } from '@slices/userSlice'
import { Dispatch } from "redux";
import { tableStyles, headerStyles } from '@styles/views/settingsStyles'
type ConnectedProps<T> = T extends InferableComponentEnhancerWithProps<infer Props, infer _> ? Props : never

const mapStateToProps = (state: RootStateOrAny, ownProps:any) => ({
  locations: state.location.locations,
  users: state.user.users
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any) => {
  return  { 
    getUsers: () => dispatch({type: 'user/getUsers'}),
    setLocations: () => dispatch({type: 'location/setLocations'}),
    showModal: (name: string) => dispatch({type: 'modal/showModal', payload: {show: true, name}})
  }
}

class Settings extends React.Component<PropsFromRedux> {
  componentDidMount(){
    this.props.getUsers()
    this.props.setLocations()
  }
  render() {
    const openGlobalModal = (modalType: string) => {
      return (e: React.MouseEvent) => {
        e.stopPropagation()
        this.props.showModal(modalType)
      }
    }

    const usersAccordionContent = () => {
      return (
        <Box as="table" sx={tableStyles}>
          <thead>
            <tr>
              {this.props.users[0] && Object.keys(this.props.users[0]).map((h, idx) =>  (<Box as="th" key={h + '-header'} sx={headerStyles}>{startCase(h)}</Box>))}
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
    const usersAccordionTitle = () => {
      return (
      <Flex sx={{justifyContent: 'space-between'}}>
        <Text>Users</Text>
        <Button onClick={openGlobalModal("SettingsUsersNew")}>Add User</Button>
      </Flex>)
    }
    const locationsAccordionTitle = () => {
      return (
      <Flex>
        <Text>Locations</Text>
        <Button onClick={openGlobalModal("SettingsLocationsNew")}>Add Location</Button>
      </Flex>
      )
    }
    const locationsAccordionContent = () => {
      return (
        <Box as="table" sx={tableStyles}>
          <thead>
            <tr>
              {this.props.locations[0] && Object.keys(this.props.locations[0]).map((h, idx) =>  (<Box as="th" key={idx+4567} sx={{textAlign: 'left'}}>{startCase(h)}</Box>))}
            </tr>
          </thead>
          <tbody>
            {
              this.props.locations[0] &&  this.props.locations.map((location: Location, idx: number) => {
                return (
                  <tr key={idx+5678}>
                    { Object.values(location).map((val, idx) => <td key={idx+6789}>{val}</td>) }
                  </tr>
                )
              })
            }
          </tbody>
        </Box>
      )
    }
    return (
      <div id="settings">
        <div id="settings-users">
          <Accordion title={usersAccordionTitle()} content={usersAccordionContent()}></Accordion>
        </div>    
        <div id="settings-locations">
          <Accordion title={locationsAccordionTitle()} content={locationsAccordionContent()}></Accordion>
        </div>
      </div>
    )
  }
}
const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(Settings);
