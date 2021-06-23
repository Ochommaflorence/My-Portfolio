function Footer() {
    const year = new Date().getFullYear();
  
    return (
      <footer className=" container footer text-center text-white">
        &copy; <span>{year}</span> All Rights Reserved
        <span className="d-block">Designed by Florrie web design</span>
      </footer>
    );
  }
  
  export default Footer;