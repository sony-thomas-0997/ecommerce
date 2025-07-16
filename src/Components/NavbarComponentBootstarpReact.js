import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./NavbarComponentBootstarpReact.css";
import { Link, NavLink, Route, Routes } from "react-router";
import Home from "../Pages/Home";
import ProductsList from "../Pages/ProductsList";
import ProductDetails from "../Pages/ProductDetails";
import Cart from "../Pages/Cart";
import { Badge } from "@mui/material";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import PageNotFound from "../Pages/PageNotFound";

function Navbarascomponentreactbootstarp() {
  const [scrollYposition, setScrollYposition] = React.useState(null);
  window.addEventListener("scroll", (event) => {
    setScrollYposition(window.scrollY);
  });
  let [coutOfCart, setCountOfCart] = React.useState(0);
  let prdtsIncart = useSelector((state) => {
    return state.CartListProdctsArray;
  });
  React.useEffect(() => {
    setCountOfCart(() => {
      return prdtsIncart.length;
    });
  }, [prdtsIncart]);
  return (
    <>
      <div>
        <div>
          <Navbar
            expand="lg"
            className={
              scrollYposition > 35
                ? "navbar-position-sticky"
                : "navbar-position-non-sticky"
            }
          >
            <Navbar.Brand>
              <NavLink to="/">Shop</NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <NavLink to="/" className="each-menu-margin">
                    Home
                  </NavLink>
                </Nav.Link>

                <NavDropdown
                  className="each-menu-margin"
                  title="Men"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item>
                    <NavLink
                      className="main-headings-prop"
                      to="/Products/men/all"
                    >
                      {" "}
                      All
                    </NavLink>{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {" "}
                    <NavLink
                      className="main-headings-prop"
                      to="/Products/men/top"
                    >
                      {" "}
                      Top
                    </NavLink>{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {" "}
                    <NavLink to="/Products/men/shirt"> Shirts</NavLink>{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {" "}
                    <NavLink to="/Products/men/tshirt"> T-Shirts</NavLink>{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {" "}
                    <NavLink
                      className="main-headings-prop"
                      to="/Products/men/bottom"
                    >
                      {" "}
                      Bottom
                    </NavLink>{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {" "}
                    <NavLink to="/Products/men/jeans">Jeans</NavLink>{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {" "}
                    <NavLink to="/Products/men/trousers">
                      {" "}
                      Trousers
                    </NavLink>{" "}
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  className="each-menu-margin"
                  title="Women"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item>
                    <NavLink
                      className="main-headings-prop"
                      to="/Products/women/all"
                    >
                      {" "}
                      All
                    </NavLink>{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink
                      className="main-headings-prop"
                      to="/Products/women/top"
                    >
                      {" "}
                      Top
                    </NavLink>{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {" "}
                    <NavLink to="/Products/women/shirt"> Shirts</NavLink>{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {" "}
                    <NavLink to="/Products/women/tshirt">
                      {" "}
                      T-Shirts
                    </NavLink>{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {" "}
                    <NavLink
                      className="main-headings-prop"
                      to="/Products/women/bottom"
                    >
                      {" "}
                      Bottom
                    </NavLink>{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {" "}
                    <NavLink to="/Products/women/jeans"> Jeans</NavLink>{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {" "}
                    <NavLink to="/Products/women/trousers">
                      {" "}
                      Trousers
                    </NavLink>{" "}
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  className="each-menu-margin"
                  title="Home Appliances"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item>
                    <NavLink
                      className="main-headings-prop"
                      to="/Products/Home-appliances/all"
                    >
                      {" "}
                      All
                    </NavLink>{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {" "}
                    <NavLink
                      className="main-headings-prop"
                      to="/Products/Home-appliances/kitchen"
                    >
                      {" "}
                      Kitchen
                    </NavLink>{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {" "}
                    <NavLink to="/Products/Home-appliances/fridge">
                      {" "}
                      Fridge
                    </NavLink>{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {" "}
                    <NavLink to="/Products/Home-appliances/Juicer-Mixer-Grinder">
                      Juicer-Mixer-Grinder
                    </NavLink>{" "}
                  </NavDropdown.Item>
                </NavDropdown>

                <div>
                  <Nav.Link className="carticonposition">
                    <NavLink to="/Cart" className="each-menu-margin">
                      <Badge badgeContent={coutOfCart} color="success">
                        <ShoppingCartIcon />
                      </Badge>
                    </NavLink>
                  </Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>

      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="Products/:m_id/:s_id" element={<ProductsList />} />
        <Route path="Product-Details/:prdtId" element={<ProductDetails />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
export default Navbarascomponentreactbootstarp;
