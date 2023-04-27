import {
  BorderBox,
  BorderBoxSummary,
  BorderBoxTitle,
} from "@/components/home/border-box";
import cx from "@/utils/cx";

export default function PriceScaleToZero() {
  return (
    <BorderBox className="col-span-3">
      <header>
        <BorderBoxTitle link="https://docs.upstash.com/redis/overall/pricing">
          Price scale to zero
        </BorderBoxTitle>
        <BorderBoxSummary>
          Start free, then pay only for what you use with per-request pricing.
          You&apos;ll never pay more than the cap price, guaranteed.
        </BorderBoxSummary>
      </header>

      {/* body */}
      <div className="flex gap-4">
        {[
          {
            title: "Request",
            value: "12.004",
          },
          {
            title: "Storage",
            value: "420KB",
          },
          {
            title: "Cost",
            value: "$0.02",
          },
        ].map(({ title, value }, index) => (
          <div
            key={title}
            className="flex h-20 grow flex-col justify-center rounded-xl bg-black/20 px-4"
          >
            <span className="text-sm opacity-40">{title}</span>
            <span
              className={cx(
                "text-2xl text-amber-200",
                index === 2 && "text-emerald-300"
              )}
            >
              {value}
            </span>
          </div>
        ))}
      </div>
    </BorderBox>
  );
}