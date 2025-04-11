import { AuthByUsernameForm } from "features/AuthByUsername";

const AuthPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-primary-gradient-from to-primary-gradient-to">
      <AuthByUsernameForm />
    </div>
  );
};

export default AuthPage