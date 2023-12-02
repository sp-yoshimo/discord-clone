const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center 
    bg-[url('/images/auth-bg.png')] bg-center bg-no-repeat bg-cover">
      {children}
    </div>
  );
}

export default AuthLayout;