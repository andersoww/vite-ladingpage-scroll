import { CloseIcon, Icon, SidebarBtnWrap, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper } from "./styles"

interface SidebarProps {
  onClose: () => void;
  isOpen: boolean;
}

const Sidebar = ({ onClose, isOpen }: SidebarProps) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={onClose} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="">About</SidebarLink>
          <SidebarLink to="">Discover</SidebarLink>
          <SidebarLink to="">Services</SidebarLink>
          <SidebarLink to="">Sign Up</SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar