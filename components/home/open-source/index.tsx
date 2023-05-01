import { HTMLProps } from "react";
import {
  SectionHeader,
  SectionHeaderSummary,
  SectionHeaderTitle,
} from "@/components/home/section-header";
import Container from "@/components/container";
import cx from "@/utils/cx";
import {
  SourceBox,
  SourceDesc,
  SourceTag,
  SourceTitle,
} from "@/components/home/open-source/comp";

export interface ISectionHeader extends HTMLProps<HTMLDivElement> {}

export default function HomeOpenSource({}: ISectionHeader) {
  return (
    <section id="pricing" className="relative py-16 md:py-32">
      <div
        className={cx(
          "absolute left-1/2 top-32 -z-10 h-1/2 w-4/5",
          "-translate-x-1/2",
          "bg-emerald-500 opacity-5 blur-[100px]"
        )}
      />

      <Container>
        <SectionHeader>
          <SectionHeaderTitle>Open Source & Integrations</SectionHeaderTitle>
          <SectionHeaderSummary>
            It is the perfect for your serverless applications thanks to its
          </SectionHeaderSummary>
        </SectionHeader>

        <div className="mt-12 overflow-x-auto md:mt-24">
          <div className="relative grid w-[280%] grid-cols-3 gap-4 text-left md:w-full md:gap-6">
            <div className="absolute bottom-full mb-6 hidden w-full grid-cols-3 gap-6 opacity-[0.03] md:grid">
              {[...Array(3).keys()].map((i) => (
                <div
                  key={i}
                  className={cx(
                    "flex h-[180px] rounded-2xl border border-white"
                  )}
                />
              ))}
            </div>

            {repositories.map((item) => {
              return (
                <SourceBox
                  key={item.url}
                  href={item.url}
                  category={item.category}
                >
                  <SourceTitle>{item.title}</SourceTitle>
                  <SourceDesc>{item.description}</SourceDesc>
                  <SourceTag>{item.category}</SourceTag>
                </SourceBox>
              );
            })}

            <div className="absolute top-full mt-6 hidden w-full grid-cols-3 gap-6 opacity-[0.03] md:grid">
              {[...Array(3).keys()].map((i) => (
                <div
                  key={i}
                  className={cx(
                    "flex h-[180px] rounded-2xl border border-white"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export enum Category {
  SDK = "JavaScript SDK",
  Template = "Template",
  Integration = "Integration",
}

const repositories = [
  {
    url: "https://github.com/upstash/upstash-redis",
    title: "Redis JS SDK",
    description: "HTTP based Redis client for edge and serverless runtimes.",
    category: Category.SDK,
  },
  {
    url: "https://github.com/upstash/upstash-kafka",
    title: "Kafka JS SDK",
    description: "HTTP based Kafka client for edge and serverless runtimes.",
    category: Category.SDK,
  },
  {
    url: "https://github.com/upstash/sdk-qstash-ts",
    title: "QStash SDK",
    description: "HTTP based SDK for QStash.",
    category: Category.SDK,
  },
  {
    url: "https://github.com/upstash/edge-flags",
    title: "Edge flags",
    description: "Feature flags with Redis at edge functions.",
    category: Category.SDK,
  },
  {
    url: "https://github.com/upstash/ratelimit",
    title: "Rate limiting",
    description: "Protect your serverless functions.",
    category: Category.SDK,
  },
  {
    url: "https://github.com/upstash/claps",
    title: "Claps",
    description: "Add a claps button to your website backed by Upstash Redis.",
    category: Category.Template,
  },
  {
    url: "https://github.com/upstash/roadmap",
    title: "Roadmap",
    description: "Build and deploy a roadmap app for your project/product.",
    category: Category.Template,
  },
  {
    title: "Fly",
    description: "Create global Redis replicated at 20+ regions of Fly.io",
    category: Category.Integration,
  },
  {
    title: "Vercel",
    description: "Integrate Upstash to your Vercel projects in seconds.",
    category: Category.Integration,
  },
];