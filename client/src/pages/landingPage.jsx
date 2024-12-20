import Navbar from "../components/Layout/Navbar";

const LandingPage = () => {
  return (
    <>
      <div className="absolute h-[700px] inset-0 bg-[url('/images/landing-car.jpg')] bg-cover bg-center -z-20"></div>
      <Navbar />
    </>
  );
};

export default LandingPage;
