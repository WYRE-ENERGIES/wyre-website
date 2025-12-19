import { Card, CardContent, CardHeader } from '../components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { ChevronRight } from "lucide-react"
import { Button } from "../components/ui/button"

export default function Testimonials() {
  return (
    <section className="py-16 md:py-32 bg-[#F6F9FC] ">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2
            data-aos="fade-up"
            data-aos-delay="50"
            className="text-4xl xl:text-5xl max-w-2xl text-heading font-semibold leading-[50px] lg:leading-[60px]">What Our Customers Are Saying</h2>
          <p data-aos="fade-up"
            data-aos-delay="100">Real stories from businesses and organizations across Africa using Wyre to cut energy costs, boost efficiency, and unlock smarter operations, powered by data and clean technology.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          <Card data-aos="fade-right"
            data-aos-delay="150"
            className="border-none grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
            <CardHeader>
              <img
                className="h-14 w-14 rounded-full overflow-hidden"
                src="/img/polaris-logo.png"
                alt="Polaris Bank Logo"
                height="40"
                width="auto"
              />
            </CardHeader>
            <CardContent>
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium">Wyre has completely transformed how we manage energy across our facilities. The platform’s real-time dashboards give us complete visibility into usage patterns, while carbon and budget tracking tools help us stay aligned with our sustainability and financial goals. Smart billing automation has reduced administrative overhead, and the insights we gain from their reporting tools have empowered us to make faster, data-driven decisions. It’s not just a platform, it’s become a critical part of our operations.</p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/shekinah.webp"
                      alt="Shekinah Tshiokufila"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>ST</AvatarFallback>
                  </Avatar>

                  <div>
                    <cite className="text-sm font-medium">Shekinah Tshiokufila</cite>
                    <span className="text-muted-foreground block text-sm">Head of Operations, Polaris Bank</span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card data-aos="fade-left"
            data-aos-delay="200"
            className="border-none md:col-span-2">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium">From solar feasibility to installation, Wyre’s AI tools made the entire process seamless. The flexible payment plan helped us adopt solar without upfront strain. Truly next-level.</p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/jonathan.webp"
                      alt="Jonathan Yombo"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>JY</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium">Jonathan Yombo</cite>
                    <span className="text-muted-foreground block text-sm">Sustainability Manager, BrightCore Africa</span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card data-aos="fade-up"
            data-aos-delay="250" className="border-none">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>Managing energy across multiple branches used to be a nightmare, until we found Wyre. Their platform brings everything into one place: reports, alerts, forecasts, it’s now effortless.</p>

                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/yucel.webp"
                      alt="Yucel Faruksahan"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>YF</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium">Yucel Faruksahan</cite>
                    <span className="text-muted-foreground block text-sm">Facility Engineer, Unity Logistics</span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card data-aos="fade-up"
            data-aos-delay="300" className="border-none card variant-mixed">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>Wyre’s smart grid automation helped us spot faults faster, cut unnecessary downtime, and improve energy efficiency across all our sites. This platform is essential.</p>

                <div className="grid grid-cols-[auto_1fr] gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/rodrigo.webp"
                      alt="Rodrigo Aguilar"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>YF</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Rodrigo Aguilar</p>
                    <span className="text-muted-foreground block text-sm">Technical Director, PowerFlex Gambia</span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center -mt-8">
          <Button asChild size="lg" className="bg-brandColor hover:bg-brandColor/80 group text-white rounded-full">
            <a href="/reviews">
              View All Reviews <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}