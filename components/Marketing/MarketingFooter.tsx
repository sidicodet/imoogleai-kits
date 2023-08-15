import clsx from "clsx";
import { ComponentProps, useMemo } from "react";
import { GitHubIcon } from "../../icons";
import { LinkButton } from "../../primitives/Button";
import { Container } from "../../primitives/Container";
import styles from "./MarketingFooter.module.css";

export function MarketingFooter({
  className,
  ...props
}: ComponentProps<"footer">) {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className={clsx(className, styles.footer)} {...props}>
      <Container className={styles.container}>
        <span className={styles.copyright}>© {year} Sidicode Technology.</span>
        <LinkButton
          href="https://sidicode.org.ng"
          icon={<GitHubIcon />}
          target="_blank"
          variant="secondary"
        >
          View Port
        </LinkButton>
      </Container>
    </footer>
  );
}
