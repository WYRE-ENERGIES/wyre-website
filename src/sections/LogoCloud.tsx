import { InfiniteSlider } from "../components/landing-page/InfiniteSlider";
import { ProgressiveBlur } from "../components/landing-page/ProgressiveBlur";

const clientPortfolio = [
  { name: "Sterling Bank", netWorth: 3.4 },                // ~$3.4 billion
  { name: "UPDC PLC", netWorth: 0.0093 },                  // ~$9.3 million
  { name: "Landmark Centre", netWorth: 0.216 },            // ~$216 million
  { name: "Polaris Bank", netWorth: 1.4 },                 // ~$1.4 billion
  { name: "Viathan", netWorth: 0 },                     // Not publicly available (private)
  { name: "Oando PLC", netWorth: 0.5675 },                 // ~$567.5 million
  { name: "ATC Nigeria", netWorth: 1.06 },                 // Not publicly available (private)
];

const totalNetWorth = clientPortfolio.reduce((sum, client) => sum + client.netWorth, 0);

export default function LogoCloud() {
  return (
    <section className="bg-background overflow-hidden max-md:pt-6">
      <div className="group relative m-auto container max-md:px-6 max-2xl:scale-90 max-2xl:origin-center">
        {/* <p className="text-center text-sm font-medium text-muted-foreground">OurClient Portfolio</p> */}
        <div className="flex flex-col items-center md:flex-row">
          <div className="max-md:flex items-center gap-x-1 md:max-w-44 md:border-r md:pr-6">
            <p className="text-end font-semibold text-sm text-muted-foreground">Client Portfolio Networth</p>
            <p className="text-lg md:text-3xl font-bold text-end">
              ${totalNetWorth.toFixed(2)}B+
            </p>
          </div>
          <div className="relative pt-3 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speed={1} gap={80}>
              <div className="flex items-center justify-center flex-shrink-0 w-24">
                <div className="text-lg font-bold text-foreground">    <img
                  className="mx-auto w-full h-full object-contain"
                  src="/img/sterling-logo.png"
                  alt="Sterling Bank"
                  width="auto"
                /></div>
              </div>

              <div className="flex items-center justify-center flex-shrink-0 w-24">
                <div className="text-lg font-bold text-foreground">  <img
                  className="mx-auto w-full h-full object-contain"
                  src="/img/updc-logo.png"
                  alt="UPDC Logo"
                  width="auto"
                /></div>
              </div>
              {/* <div className="flex items-center justify-center flex-shrink-0 w-24">
                <div className="text-lg font-bold text-foreground">  <img
                  className="mx-auto w-full h-full object-contain"
                  src="https://tse2.mm.bing.net/th/id/OIP.0E25O2eO3fq225NV2_DCfwHaCV?rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt="Sapio Utilities"
                  width="auto"
                /></div>
              </div> */}

              <div className="flex items-center justify-center flex-shrink-0 w-24">
                <div className="text-lg font-bold text-foreground">   <img
                  className="mx-auto w-full h-full object-contain"
                  src="/img/landmark-logo.png"
                  alt="Landmark Center"
                  width="auto"
                /></div>
              </div>
              <div className="flex items-center justify-center flex-shrink-0 w-14">
                <div className="text-lg font-bold text-foreground">
                  <img
                    className="mx-auto w-full h-full object-cover"
                    src="/img/polaris-logo.png"
                    alt="Polaris Bank"
                    width="auto"
                  /></div>
              </div>
              <div className="flex items-center justify-center flex-shrink-0 w-[67.2px]">
                <div className="text-lg font-bold text-foreground">
                  <img
                    className="mx-auto w-full h-full object-cover"
                    src="/img/viathan-logo.png"
                    alt="Viathan"
                    width="auto"
                  /></div>
              </div>
              <div className="flex items-center justify-center flex-shrink-0 w-24">
                <div className="text-lg font-bold text-foreground">
                  <img
                    className="mx-auto w-full h-full object-cover"
                    src="/img/oando-logo.png"
                    alt="Oando PLC"
                    width="auto"
                  /></div>
              </div>
              <div className="flex items-center justify-center flex-shrink-0 w-24">
                <div className="text-lg font-bold text-foreground">
                  <img
                    className="mx-auto w-full h-full object-contain"
                    src="/img/atc-logo.png"
                    alt="ATC"
                    width="auto"
                  /></div>
              </div>
            </InfiniteSlider>

            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
