import { AnimatedGridPattern } from "../components/magicui/animated-grid-pattern";
import { Button } from "../components/ui/button";
import { cn } from "../lib/utils";


export function CTA() {
  return (
    <div className="relative pb-24 lg:pb-32 mt-24 lg:mt-32 flex h-[500px] container mx-auto w-full items-center justify-center overflow-hidden rounded-lg lg:rounded-xl border-border border bg-background p-20">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
      <div className="text-center">
        <span data-aos="fade-up"
          data-aos-delay="50" className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-purple-900 to-gray-300 bg-clip-text text-center text-4xl md:text-6xl xl:text-8xl font-semibold leading-none text-transparent ">
          Get Started With Us
        </span>
        <p data-aos="fade-up"
          data-aos-delay="100" className="text-lg lg:text-xl font-semibold mt-4 text-gray-500">Take control of your energy</p>

        <div data-aos="fade-up"
          data-aos-delay="150" className="mt-12 flex flex-wrap justify-center gap-4">
          <Button
            className="z-10 bg-brandColor hover:bg-brandColor hover:opacity-80"
            asChild
            size="lg">
            <a href="/get-started">
              <span>Get Started</span>
            </a>
          </Button>

          <Button
            className="z-10 border border-border"
            asChild
            size="lg"
            variant="secondary">
            <a href="/get-started">
              <span>Book Demo</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
