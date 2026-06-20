import React, { useState, useEffect } from "react";

import Hero from "../components/Hero";
import Stats from "../components/Stats";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import RecentDonations from "../components/RecentDonations";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <RecentDonations />
    </>
  );
}

export default Home;