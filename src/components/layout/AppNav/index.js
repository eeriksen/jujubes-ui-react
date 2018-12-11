import AppNav from "./AppNav"
import Header from "./header/Header"
import Title from "./title/Title"
import Menu from "./menu/Menu"
import MenuItem from "./menu/MenuItem"
import MenuHeading from "./menu/MenuHeading"

AppNav.Header = Header;
AppNav.Menu = Menu;
AppNav.MenuItem = MenuItem;
AppNav.MenuHeading = MenuHeading;
AppNav.Title = Title;

export { default } from "./AppNav"
export { AppNav, Header, Menu, MenuItem, MenuHeading, Title }
