import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import CustomCursor from '../components/CustomCursor';

function Layout() {
  return (
    <div className="min-h-screen bg-background text-gray-100">
      <CustomCursor />
      <Navbar />
      <main className="relative overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
