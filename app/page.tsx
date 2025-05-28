import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Users, Award, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-900 dark:to-cyan-900 -z-10" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20 -z-10" />
        
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Pakistan Engineers Forum
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Connecting Engineers, Empowering Communities at MUET Mehran Chapter
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20" asChild>
                <Link href="/contact">Join Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About PEF Mehran Chapter</h2>
              <p className="text-muted-foreground mb-6">
                The Pakistan Engineers Forum (PEF) MUET Chapter is a student-led organization dedicated to fostering 
                engineering excellence, professional development, and community service. We provide a platform for 
                students to develop leadership skills, connect with industry professionals, and make a positive impact.
              </p>
              <p className="text-muted-foreground mb-8">
                Our mission is to bridge the gap between academic learning and industry practices, while promoting 
                ethical engineering and social responsibility.
              </p>
              <Button asChild>
                <Link href="/about" className="flex items-center gap-2">
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Engineering students collaborating" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">What We Do</h2>
            <p className="text-muted-foreground">
              The Pakistan Engineers Forum (PEF) MUET Chapter is committed to excellence in engineering education, 
              professional development, and community service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-6">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Events & Workshops</h3>
                <p className="text-muted-foreground">
                  We organize technical workshops, seminars, and competitions to enhance students' skills and knowledge.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-6">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Networking</h3>
                <p className="text-muted-foreground">
                  We facilitate connections between students, faculty, alumni, and industry professionals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-6">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Leadership Development</h3>
                <p className="text-muted-foreground">
                  We provide opportunities for students to develop leadership and management skills.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-6">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Community Service</h3>
                <p className="text-muted-foreground">
                  We engage in community service projects to apply engineering knowledge for social good.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
            <p className="text-muted-foreground">
              Join us for our upcoming events and activities designed to enhance your engineering knowledge and skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Technical Workshop",
                date: "June 15, 2025",
                image: "https://images.pexels.com/photos/7102/notes-macbook-study-conference.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                description: "Hands-on workshop on the latest engineering technologies and practices."
              },
              {
                title: "Industry Talk Series",
                date: "July 3, 2025",
                image: "https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                description: "Interactive session with industry experts discussing current trends and challenges."
              },
              {
                title: "Engineering Competition",
                date: "August 10, 2025",
                image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                description: "Showcase your engineering skills and creativity in our annual competition."
              }
            ].map((event, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg">
                <div className="relative h-48">
                  <Image 
                    src={event.image} 
                    alt={event.title} 
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {event.date}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/events">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/events" className="flex items-center gap-2 mx-auto">
                View All Events <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Join the PEF MUET Chapter</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Become a part of our dynamic community of future engineers and leaders.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Become a Member</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}