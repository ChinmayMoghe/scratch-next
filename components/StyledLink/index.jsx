import Link from "next/link";

const StyledLink = ({ href, children, onClick, ...rest }) => {
  return (
    <Link href={href} passHref>
      <a onClick={onClick} className="link" {...rest} >
        {children}
      </a>
    </Link>
  );
};

export default StyledLink;
