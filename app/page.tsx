import CoverParticles from "@/components/cover-particle";
import Image from "next/image";
import TransitionPage from "@/components/transition-page";
import Introduction from "@/components/Introduction";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <Introduction />
      </div>
    </main>
  );
}
