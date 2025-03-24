import { Link } from "react-router-dom";
import Header from "../modules/Header/Header";
import Footer from "../modules/Footer/Footer";
import FullScreenWrapper from "../components/Wrapper";

export default function NotFound() {
  return (
    <>
      <Header />
      <FullScreenWrapper>
        <div className="w-full flex flex-col items-center justify-center h-[32vh] space-y-3">
            <h1 className="text-3xl">Page Not Found</h1>
            <Link to="/" className="border border-2 rounded-2xl p-1 cursor-pointer text-blue-500">Go back to Home</Link>
        </div>
      </FullScreenWrapper>
      <Footer />
    </>
  );
}
