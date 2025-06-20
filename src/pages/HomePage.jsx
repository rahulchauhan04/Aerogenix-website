import React from "react"
import HeroSection from "../components/sections/HeroSection"
import DifferenceSection from "../components/sections/DifferenceSection"
import PlatformSection from "../components/sections/PlatformSection"
import AgentApplicationsSection from "../components/sections/AgentApplicationsSection"
import GetStartedSection from "../components/sections/GetStartedSection"
import BeginSection from "../components/sections/BeginSection"

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <DifferenceSection />
      <PlatformSection />
      <AgentApplicationsSection />
      <GetStartedSection />
    </main>
  )
}

export default HomePage
