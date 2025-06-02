import Image from "next/image";

import ScrollSmootherWrapper from "./components/scrollSmoothWrapper";
import LandingPage from "./landing/page";
import AllProductsPage from "./all-products/page";

export default function Home() {
  

  return (
    <ScrollSmootherWrapper>
      <LandingPage />
    </ScrollSmootherWrapper>
  );
}
