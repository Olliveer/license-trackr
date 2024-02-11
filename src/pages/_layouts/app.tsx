import { Header } from "@/components/header";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function AppLayout() {
  const navigate = useNavigate();
  const { userId, isLoaded } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!userId && isLoaded) {
      navigate("/", { replace: true });
      return;
    } else if (userId) {
      setIsLoading(false);
    }
  }, [isLoaded, userId, navigate, isLoading]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen flex flex-col antialiased">
      <Header />

      <div className="flex flex-1 flex-col gap-4 p-8 pt-6 rounded-sm">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
