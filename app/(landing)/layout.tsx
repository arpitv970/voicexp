import { Navbar } from "./_components/navbar";

const landingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default landingLayout;
