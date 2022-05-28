type ButtonProps = {
  variant: "primary" | "secondary";
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-width-${variant}`} {...rest}>
      {children}
    </button>
  );
};
