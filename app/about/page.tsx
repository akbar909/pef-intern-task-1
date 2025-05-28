import Image from 'next/image';
import { Award, CheckCircle, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-900 dark:to-cyan-900 -z-10" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20 mix-blend-overlay -z-10" />
        
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About PEF Mehran</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Learn about our mission, vision, and the impact we're making in the engineering community.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                The Pakistan Engineers Forum (PEF) MUET Chapter was established to create a platform for engineering 
                students to enhance their professional skills, connect with industry leaders, and contribute to society 
                through technical expertise.
              </p>
              <p className="text-muted-foreground mb-6">
                Founded with a vision to bridge the gap between academic knowledge and industry requirements, 
                PEF MUET Chapter has grown into a vibrant community of passionate engineers dedicated to excellence 
                and innovation.
              </p>
              <p className="text-muted-foreground">
                Today, we continue to expand our reach and impact, providing valuable opportunities for students 
                to grow personally and professionally while making meaningful contributions to the engineering field.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.pexels.com/photos/3184660/pexels-photo-3184660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Engineering students collaborating" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Mission & Vision</h2>
            <p className="text-muted-foreground">
              Our purpose and aspirations that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-primary" /> Our Mission
                </h3>
                <p className="text-muted-foreground">
                  To empower engineering students with the skills, knowledge, and connections they need to excel 
                  in their careers and make meaningful contributions to society. We strive to create a collaborative 
                  community that fosters innovation, professional growth, and ethical engineering practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" /> Our Vision
                </h3>
                <p className="text-muted-foreground">
                  To be the premier student engineering organization that transforms passionate students into 
                  skilled professionals and future leaders who drive technological advancement and social progress. 
                  We envision a community where engineering excellence meets social responsibility to create a better world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
            <p className="text-muted-foreground">
              The principles that drive our organization and shape our community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in all our endeavors, pushing the boundaries of what's possible in engineering education and practice."
              },
              {
                title: "Innovation",
                description: "We foster a culture of innovation, encouraging creative thinking and novel solutions to engineering challenges."
              },
              {
                title: "Integrity",
                description: "We uphold the highest ethical standards in our work, demonstrating honesty, transparency, and accountability."
              },
              {
                title: "Collaboration",
                description: "We believe in the power of teamwork and collaboration to achieve greater results than individual efforts."
              },
              {
                title: "Inclusivity",
                description: "We welcome diversity of thought, background, and experience, creating an inclusive environment for all members."
              },
              {
                title: "Social Responsibility",
                description: "We recognize our responsibility to use engineering knowledge for the betterment of society and the environment."
              }
            ].map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Achievements</h2>
            <p className="text-muted-foreground">
              A testament to our commitment to excellence and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-8 shadow-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <p className="text-xl font-medium">Technical Workshops</p>
              <p className="text-muted-foreground mt-2">Conducted annually to enhance technical skills</p>
            </div>
            <div className="bg-background rounded-lg p-8 shadow-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-xl font-medium">Active Members</p>
              <p className="text-muted-foreground mt-2">From various engineering disciplines</p>
            </div>
            <div className="bg-background rounded-lg p-8 shadow-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-xl font-medium">Industry Partnerships</p>
              <p className="text-muted-foreground mt-2">Connecting students with leading companies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Leadership Structure</h2>
            <p className="text-muted-foreground">
              The dedicated team behind PEF MUET Chapter that drives our mission forward.
            </p>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl mb-8">
            <Image 
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="PEF Leadership Team" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">PEF MUET Chapter Cabinet</h3>
                <p className="text-white/80">
                  Our cabinet members work together to organize events, manage operations, and ensure the 
                  organization fulfills its mission.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" /> Cabinet Structure
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="bg-primary/10 text-primary p-2 rounded-full h-8 w-8 flex items-center justify-center">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">President & Vice President</h4>
                    <p className="text-muted-foreground">Overall leadership and strategic direction</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="bg-primary/10 text-primary p-2 rounded-full h-8 w-8 flex items-center justify-center">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">General Secretary</h4>
                    <p className="text-muted-foreground">Administrative operations and coordination</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="bg-primary/10 text-primary p-2 rounded-full h-8 w-8 flex items-center justify-center">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">Finance Secretary</h4>
                    <p className="text-muted-foreground">Budget management and financial planning</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="bg-primary/10 text-primary p-2 rounded-full h-8 w-8 flex items-center justify-center">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium">Technical Coordinators</h4>
                    <p className="text-muted-foreground">Planning and executing technical events</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" /> Extended Cabinet
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="bg-primary/10 text-primary p-2 rounded-full h-8 w-8 flex items-center justify-center">
                    5
                  </div>
                  <div>
                    <h4 className="font-medium">Information Secretaries</h4>
                    <p className="text-muted-foreground">Managing communication and information flow</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="bg-primary/10 text-primary p-2 rounded-full h-8 w-8 flex items-center justify-center">
                    6
                  </div>
                  <div>
                    <h4 className="font-medium">Social Media Head</h4>
                    <p className="text-muted-foreground">Managing online presence and digital marketing</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="bg-primary/10 text-primary p-2 rounded-full h-8 w-8 flex items-center justify-center">
                    7
                  </div>
                  <div>
                    <h4 className="font-medium">Student Counsellors</h4>
                    <p className="text-muted-foreground">Providing guidance and support to members</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="bg-primary/10 text-primary p-2 rounded-full h-8 w-8 flex items-center justify-center">
                    8
                  </div>
                  <div>
                    <h4 className="font-medium">Department Ambassadors</h4>
                    <p className="text-muted-foreground">Representing various engineering departments</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}