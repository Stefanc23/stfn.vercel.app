import UnstyledLink from '@/components/UnstyledLink';

const Footer = () => {
  return (
    <footer className="bg-transparent w-full">
      <p className="py-5 w-fit mx-auto text-sm md:text-base">
        &copy; {new Date().getFullYear()} by&nbsp;
        <UnstyledLink
          href="https://github.com/stefanc23"
          className="text-primary"
        >
          Stefano Christian Wiryana
        </UnstyledLink>
      </p>
    </footer>
  );
};

export default Footer;
