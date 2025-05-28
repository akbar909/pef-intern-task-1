import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { pastEvents, upcomingEvents } from '@/lib/event-data';
import { Calendar, ChevronRight, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function EventsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-900 dark:to-cyan-900 -z-10" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20 -z-10" />
        
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Events & Activities</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stay updated with our latest events, workshops, and activities designed to enhance your engineering journey.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Events</h2>
            <p className="text-muted-foreground">
              Explore our diverse range of events designed to enhance your technical skills, connect you with industry professionals, and foster a vibrant engineering community.
            </p>
          </div>

          <Tabs defaultValue="upcoming" className="mb-16">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="upcoming">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event, index) => (
                  <EventCard key={index} event={event} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="past">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event, index) => (
                  <EventCard key={index} event={event} isPast={true} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">Featured Event</h2>
            <p className="text-muted-foreground">
              Don't miss our biggest event of the year!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Annual Engineering Conference" 
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                Annual Event
              </span>
              <h3 className="text-3xl font-bold mb-4">Annual Engineering Conference 2025</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>September 15-16, 2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>MUET Main Auditorium, Jamshoro</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>9:00 AM - 5:00 PM</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-8">
                Join us for our annual flagship event featuring keynote speakers from leading engineering companies, 
                interactive workshops, project exhibitions, and networking opportunities. This two-day conference 
                brings together students, faculty, and industry professionals to discuss the latest trends and 
                innovations in engineering.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  Register Now <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Events */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Types of Events We Organize</h2>
            <p className="text-muted-foreground">
              We offer a variety of events to cater to different interests and learning needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Technical Workshops",
                description: "Hands-on workshops on programming, CAD design, circuit building, and other technical skills.",
                image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                title: "Industry Talks",
                description: "Presentations and Q&A sessions with industry professionals sharing their expertise and experiences.",
                image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                title: "Competitions",
                description: "Technical competitions to challenge your skills and creativity in various engineering disciplines.",
                image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                title: "Career Development",
                description: "Resume building, interview preparation, and career guidance sessions to help you launch your engineering career.",
                image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                title: "Site Visits",
                description: "Educational visits to engineering companies, manufacturing plants, and construction sites.",
                image: "https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                title: "Social Events",
                description: "Networking events, team building activities, and social gatherings to build a strong engineering community.",
                image: "https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            ].map((eventType, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg">
                <div className="relative h-48">
                  <Image 
                    src={eventType.image} 
                    alt={eventType.title} 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-white">{eventType.title}</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">{eventType.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Want to Propose an Event?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Have an idea for an event or workshop? We welcome your suggestions and collaboration!
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Submit Your Idea</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function EventCard({ event, isPast = false }: { event: { title: string; date: string; location: string; description: string; image: string }; isPast?: boolean }) {
  return (
    <Card className="overflow-hidden border-none shadow-lg">
      <div className="relative h-48">
        <Image 
          src={event.image} 
          alt={event.title} 
          fill
          className="object-cover"
        />
        {isPast && (
          <div className="absolute top-3 right-3 bg-secondary/90 text-secondary-foreground text-xs font-medium px-2 py-1 rounded">
            Past Event
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{event.title}</h3>
        </div>
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{event.location}</span>
          </div>
        </div>
        <p className="text-muted-foreground mb-4 line-clamp-3">{event.description}</p>
        {!isPast ? (
          <Button variant="outline" size="sm" asChild>
            <Link href="/contact">Register</Link>
          </Button>
        ) : (
          <Button variant="outline" size="sm" asChild>
            <Link href="#">View Highlights</Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}