import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import Link from 'next/link'

export default function Component() {
  return (
    <>
      <div className="border-t border-gray-200 bg-gray-50/90 dark:border-gray-800 dark:bg-gray-950">
        <header className="w-full py-3 md:py-5">
          <div className="container flex items-center justify-between px-4 md:px-6">
            <Link className="flex items-center space-x-2 font-bold" href="#">
              <CalendarCheckIcon className="h-6 w-6" />
              <span>EventPlanify</span>
            </Link>
            <nav className="hidden space-x-4 text-sm font-medium lg:flex">
              <Link
                className="text-gray-900/90 hover:text-gray-900/50 hover:underline dark:text-gray-50/90 dark:hover:text-gray-50"
                href="#"
              >
                About Us
              </Link>
              <Link
                className="text-gray-900/90 hover:text-gray-900/50 hover:underline dark:text-gray-50/90 dark:hover:text-gray-50"
                href="#"
              >
                Services
              </Link>
              <Link
                className="text-gray-900/90 hover:text-gray-900/50 hover:underline dark:text-gray-50/90 dark:hover:text-gray-50"
                href="#"
              >
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link
                className="inline-block rounded-md border border-gray-200  bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="/auth"
              >
                Login
              </Link>
            </div>
          </div>
        </header>
      </div>
      <section className="w-full">
        <div className="relative w-full">
          <img
            alt="Background"
            className="aspect-[2/1] w-full overflow-hidden object-cover"
            src="/images/placeholder.jpeg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container grid gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  The Future of Events
                </h1>
                <p className="mx-auto max-w-[800px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Bringing people together with seamless experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Services
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let us handle the details. We offer a range of services to make
              your event unforgettable.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:gap-10">
            <div className="flex flex-col items-center justify-center space-y-2">
              <SpeakerIcon className="h-20 w-20 rounded-lg bg-gray-100 p-2 text-gray-900 dark:bg-gray-800 dark:text-gray-50" />
              <h3 className="text-lg font-bold">Event Planning</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Let us handle the details.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <TicketIcon className="h-20 w-20 rounded-lg bg-gray-100 p-2 text-gray-900 dark:bg-gray-800 dark:text-gray-50" />
              <h3 className="text-lg font-bold">Ticket Sales</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Sell tickets with ease.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <MusicIcon className="h-20 w-20 rounded-lg bg-gray-100 p-2 text-gray-900 dark:bg-gray-800 dark:text-gray-50" />
              <h3 className="text-lg font-bold">Entertainment</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Unforgettable experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex w-full items-center justify-center">
        <div className="max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900">
                For you: <br />
                Some frequently asked questions
              </h2>
            </div>
            <Accordion className="w-full px-4" collapsible type="single">
              <AccordionItem value="info">
                <AccordionTrigger>Event Information</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Here you will find all the relevant information about
                    EventPlanify and how it can transform your event planning
                    process.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How can EventPlanify streamline my event planning?
                </AccordionTrigger>
                <AccordionContent>
                  EventPlanify offers comprehensive tools for managing
                  invitations, registrations, and attendee engagement, making
                  your event planning seamless and efficient.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What unique features does EventPlanify offer?
                </AccordionTrigger>
                <AccordionContent>
                  From customizable event pages to real-time analytics and
                  feedback collection, EventPlanify provides a suite of features
                  designed to enhance both the planner and attendee experience.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Can EventPlanify support large-scale events?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely. EventPlanify is built to support events of any
                  size, offering scalable solutions to meet your specific needs,
                  from small gatherings to large conferences.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Testimonials
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don&apos;t just take our word for it. Here&apos;s what our
              customers have to say.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-center justify-center gap-8 md:grid-cols-3 lg:gap-12">
            <div className="space-y-2">
              <img
                alt="Avatar"
                className="mx-auto aspect-square overflow-hidden rounded-full border-2 border-gray-100 object-cover object-center dark:border-gray-800"
                height="400"
                src="/profile/profile02.jpg"
                width="400"
              />
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">Sammy Ferreira</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  CEO EventPlanify
                </p>
              </div>
            </div>
            <div className="space-y-4 md:col-span-2 md:grid md:grid-cols-2 md:items-center md:justify-start md:gap-8">
              <p className="text-sm text-gray-500 dark:text-gray-400 md:col-span-2 md:text-base xl:text-xl/relaxed">
                &quot;Working with EventPlanify has been a game-changer for my
                business. Their platform is intuitive and the customer support
                is top-notch. I&apos;ve been able to sell more tickets and
                create more engaging events. Highly recommended!&quot;
              </p>
            </div>
            <div className="space-y-2">
              <img
                alt="Avatar"
                className="mx-auto aspect-square overflow-hidden rounded-full border-2 border-gray-100 object-cover object-center dark:border-gray-800"
                height="400"
                src="/profile/profile01.jpg"
                width="400"
              />
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">Natan Lucena</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Event Attendee
                </p>
              </div>
            </div>
            <div className="space-y-4 md:col-span-2 md:grid md:grid-cols-2 md:items-center md:justify-start md:gap-8">
              <p className="text-sm text-gray-500 dark:text-gray-400 md:col-span-2 md:text-base xl:text-xl/relaxed">
                !&quotI&apos;ve been to a lot of events, but the ones organized
                by EventPlanify are always the best. Everything is smooth and
                well-coordinated, from registration to the last session. I
                always look forward to their events!!&quot
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function CalendarCheckIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      className={className}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  )
}

function MusicIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      className={className}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}

function SpeakerIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      className={className}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <circle cx="12" cy="14" r="4" />
      <line x1="12" x2="12.01" y1="6" y2="6" />
    </svg>
  )
}

function TicketIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      className={className}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  )
}
