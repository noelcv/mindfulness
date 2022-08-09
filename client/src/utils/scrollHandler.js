export const scrollHandler = (ref) => {
  ref.current?.scrollIntoView({behavior: 'smooth'});
};