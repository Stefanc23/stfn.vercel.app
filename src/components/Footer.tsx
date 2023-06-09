const Footer = () => {
  return (
    <footer className="bg-transparent w-full">
      <p className="py-2 w-fit mx-auto text-sm md:text-base">
        &copy; {new Date().getFullYear()} by&nbsp;
        <span className="text-primary">Stefano Christian Wiryana</span>
      </p>
    </footer>
  );
};

export default Footer;
