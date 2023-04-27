import IconFast from "@/components/investor/icon/icon-fast";
import IconSimple from "@/components/investor/icon/icon-simple";
import IconRobust from "@/components/investor/icon/icon-robust";
import { Metadata } from "next";
import Container from "@/components/container";
import PageHeaderTitle from "@/components/app/page-header-title";
import PageHeaderDesc from "@/components/app/page-header-desc";
import PageBodyGradient from "@/components/app/page-body-gradient";
import Balancer from "react-wrap-balancer";
import Investors from "@/components/investor/investors";

export const metadata: Metadata = {
  title: "About",
  description: "We manage everything for you",
};

const MISSIONS = [
  {
    title: "Fast",
    desc: "We know each millisecond is important for you.",
    icon: <IconFast className="text-[60px] text-emerald-300 md:text-[70px]" />,
  },
  {
    title: "Simple",
    desc: "Keep the things as simple as possible but not simpler.",
    icon: (
      <IconSimple className="text-[60px] text-emerald-300 md:text-[70px]" />
    ),
  },
  {
    title: "Robust",
    desc: "We win your trust with robustness.",
    icon: (
      <IconRobust className="text-[60px] text-emerald-300 md:text-[70px]" />
    ),
  },
];

export default function HomePage() {
  return (
    <main className="text-center">
      <section className="py-16 md:py-32">
        <Container className="max-w-screen-lg">
          {/* header */}
          <header>
            <PageHeaderTitle>
              Make Data the Easiest Part of Your Job
            </PageHeaderTitle>

            <PageHeaderDesc className="mt-2 grid gap-1 md:gap-2">
              <span>We manage everything for you.</span>
              <span>You focus on more important things.</span>
              <span>
                With per-request pricing, you pay only for what you use.
              </span>
            </PageHeaderDesc>
          </header>

          {/* mission */}
          <div className="mt-10 grid gap-6 md:mt-20 md:grid-cols-3">
            {MISSIONS.map((mission) => {
              return (
                <div key={mission.title} className="flex flex-col items-center">
                  {mission.icon}

                  <h3 className="mt-4 font-display text-xl font-semibold">
                    {mission.title}
                  </h3>
                  <p className="mx-12 mt-2 opacity-60 md:mx-6">
                    <Balancer>{mission.desc}</Balancer>
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative z-0 py-16 md:py-32">
        <PageBodyGradient />
        <Investors fullList />
      </section>
    </main>
  );
}