import { Link } from "react-router-dom";
import { Home, Phone } from "lucide-react";
import HamrickNav from "@/components/hamrick/HamrickNav";
import HamrickFooter from "@/components/hamrick/HamrickFooter";

const NotFound = () => (
  <div className="min-h-screen bg-fence-cream">
    <HamrickNav />
    <main className="py-24 px-4 text-center">
      <div className="max-w-lg mx-auto">
        <div className="sign-banner inline-block px-6 py-4 mb-8">
          <span className="font-headline text-7xl text-fence-black">404</span>
        </div>
        <h1 className="font-headline text-4xl uppercase tracking-tight text-fence-black mb-4">
          Page Not Found
        </h1>
        <p className="font-body text-fence-gray mb-8 leading-relaxed">
          Looks like this fence post is missing. The page you're looking for doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-yellow text-sm px-7 py-3 flex items-center gap-2 justify-center">
            <Home size={16} /> Back to Home
          </Link>
          <a href="tel:7044345011" className="btn-black text-sm px-7 py-3 flex items-center gap-2 justify-center">
            <Phone size={16} /> (704) 434-5011
          </a>
        </div>
      </div>
    </main>
    <HamrickFooter />
  </div>
);

export default NotFound;
