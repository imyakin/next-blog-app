export const animation  = {
  hidden: {
    x: -30,
    opacity: 0
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 1 }
  }),
};
