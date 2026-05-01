import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SimpleSEO from "@/components/SimpleSEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // 404 tracking could be added here for analytics if needed
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <SimpleSEO
        title="Page Not Found - 404 Error | Studios by Dave"
        description="The page you're looking for doesn't exist. Return to Studios by Dave homepage for professional web design and digital marketing services."
        keywords="404 error, page not found, studios by dave, web design shelby nc"
        noindex={true}
      />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
