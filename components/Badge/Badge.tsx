import clsx from "clsx";
import { ComponentProps } from "react";
import styles from "./Badge.module.css";

export function Badge({
  className,
  ...props
}: Omit<ComponentProps<"a">, "href">) {
  return (
    <a
      className={clsx(className, styles.badge)}
      href="https://imoogleai.xyz"
      rel="noreferrer"
      target="_blank"
      {...props}
    >
      <picture>
        <source
          srcSet="https://liveblocks.io/badge-dark.svg"
          media="(prefers-color-scheme: dark)"
        />
        <img
          src="https://liveblocks.io/badge-light.svg"
          alt="Made with Imoai"
          className={styles.image}
        />
      </picture>
    </a>
  );
}
