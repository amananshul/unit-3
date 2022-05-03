import {NavbarLink} from  "./Styled"
export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20 }}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
 

      */}
      <NavbarLink to='/'>Home </NavbarLink>
      <NavbarLink to="/about">About</NavbarLink>
      <NavbarLink to="/products">Products</NavbarLink>
      <NavbarLink to="/products/men">Men</NavbarLink>
      <NavbarLink to="/products/women">Women</NavbarLink>
      <NavbarLink to="/products/kids">Kids</NavbarLink>
      <NavbarLink to="/products/homedecor">Home decor</NavbarLink>
    </nav>
  );
};
