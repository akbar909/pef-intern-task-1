import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { teamMembers } from '@/lib/team-data';

export default function TeamPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-900 dark:to-cyan-900 -z-10" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20 -z-10" />
        
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet Our Team</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Get to know the dedicated individuals who lead the Pakistan Engineers Forum (PEF) MUET Chapter.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Cabinet Members</h2>
            <p className="text-muted-foreground">
              Meet the passionate and talented individuals who make up the 2nd Central Cabinet of Pakistan Engineers Forum (PEF) MUET Chapter.
            </p>
          </div>

          <Tabs defaultValue="cabinet" className="mb-16">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="cabinet">Cabinet Members</TabsTrigger>
                <TabsTrigger value="senior">Senior Cabinet</TabsTrigger>
                <TabsTrigger value="heads">Department Heads</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="cabinet">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {teamMembers.cabinet.map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="senior">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {teamMembers.senior.map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="heads">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {teamMembers.department.map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center max-w-3xl mx-auto mt-24 mb-16">
            <h2 className="text-3xl font-bold mb-6">Specialized Roles</h2>
            <p className="text-muted-foreground">
              Our team members with specialized responsibilities that help PEF MUET Chapter function effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.specialized.map((member, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row items-center gap-6 p-6">
                  <div className="relative h-28 w-28 rounded-full overflow-hidden border-4 border-primary/10">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm">
                      {member.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Interested in becoming a part of the PEF MUET Chapter team? We're always looking for passionate 
              and dedicated individuals to join our mission of connecting engineers and empowering communities.
            </p>
            <div className="bg-background rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Membership Benefits</h3>
              <ul className="space-y-3 text-left max-w-md mx-auto mb-6">
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Leadership and organizational skills development</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Networking with industry professionals and peers</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Hands-on experience in organizing technical events</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Community building and making a positive impact</span>
                </li>
              </ul>
              <a 
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Apply to Join
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function TeamMemberCard({ member }: {member: { name: string; role: string; image: string }}) {
  return (
    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-64 w-full">
        <Image 
          src={member.image} 
          alt={member.name} 
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
          <CardContent className="p-4">
            <h3 className="text-white text-lg font-semibold">{member.name}</h3>
            <p className="text-white/80 text-sm">{member.role}</p>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}