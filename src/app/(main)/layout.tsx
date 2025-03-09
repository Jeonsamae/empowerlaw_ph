import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header - Fixed at the Top */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Header />
      </header>

      {/* Main Content Area */}
      <main className="flex-grow pt-15 mx-auto w-full">{children}</main>

      {/* Footer - Always at the Bottom */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
