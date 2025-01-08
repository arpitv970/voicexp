import { siGoogle } from "simple-icons";

export const GoogleIcon = ({
  size = 24,
  color = `#${siGoogle.hex}`,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <title>{siGoogle.title}</title>
      <path d={siGoogle.path} />
    </svg>
  );
};
