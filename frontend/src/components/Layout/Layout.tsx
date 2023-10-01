interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen w-screen flex flex-col items-center">
      {children}
    </div>
  );
};
