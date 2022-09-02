import { MutableRefObject } from "react";

export const scrollHandler = (ref: MutableRefObject<HTMLAnchorElement>) => {
  ref.current?.scrollIntoView({behavior: 'smooth'});
};