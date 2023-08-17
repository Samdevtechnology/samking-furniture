type ColorVariantsProp = {
  [key: string]: string;
};

const CUSTOM_BTN_CONFIG = (color: string = "primary") => {
  const colorVariants: ColorVariantsProp = {
    facebook: "bg-facebook shadow-facebook/20 hover:shadow-facebook/40",
    googleBlue: "bg-googleBlue shadow-googleBlue/20 hover:shadow-googleBlue/40",
    primary: "bg-primary shadow-primary/20 hover:shadow-primary/40",
  };

  const className = `${colorVariants[color]}`;
  return className;
};

export default CUSTOM_BTN_CONFIG;
