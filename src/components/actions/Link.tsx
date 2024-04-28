import { AnchorHTMLAttributes } from "react";
import styles from './actions.module.scss';
import { LinkVariant } from "./types";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: LinkVariant;
}

function Link({ children, variant = LinkVariant.PRIMARY, ...anchorProps }: LinkProps) {
  const className = variant.includes('button') ? styles[`link-${variant}`] : styles[`link--${variant}`];

  return (
    <a href={anchorProps.href} target={anchorProps.target} className={className}>
      {children}
    </a>
  );
}

export default Link;