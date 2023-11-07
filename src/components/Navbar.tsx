import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from '@nexus-ds/react'

const MyNavbar = () => {
  return (
    <Navbar className={`border-b-1 border-divider p-2`}>
      <NavbarBrand>
        <h1>LOGO</h1>
      </NavbarBrand>
      <NavbarContent justify={'end'}>
        <NavbarItem>
          <Button variant={'light'}>Updates</Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            variant={'shadow'}
            color={'primary'}
          >
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default MyNavbar
