import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavabar } from "@/components/landing-navbar";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavabar />
      <LandingHero />
      <LandingContent />
    </div>
  )
}

export default LandingPage;