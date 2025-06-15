
import { Calendar } from 'lucide-react';

const newsUpdates = [
  {
    title: 'PEF MUET Hosts Annual Engineering Symposium',
    date: '2024-05-10',
    description:
      'The Pakistan Engineers Forum (PEF) MUET Chapter successfully organized its annual symposium, bringing together students, faculty, and industry leaders for a day of insightful talks and networking.',
  },
  {
    title: 'Community Outreach: STEM Workshop for Schools',
    date: '2024-04-22',
    description:
      'PEF MUET members conducted a STEM workshop at local schools, inspiring young minds and promoting engineering education through hands-on activities and mentorship.',
  },
  {
    title: 'PEF Welcomes New Cabinet Members',
    date: '2024-03-15',
    description:
      'A warm welcome to the newly elected cabinet members of PEF MUET Chapter! We look forward to a year of growth, innovation, and impactful initiatives.',
  },
];

export default function NewsPage() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 dark:text-cyan-400 mb-4">News & Updates</h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Stay up to date with the latest news, events, and updates from the PEF MUET Chapter.
        </p>
      </section>

      {/* News Updates */}
      <section className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsUpdates.map((news, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col gap-4 transition hover:shadow-xl"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(news.date).toLocaleDateString()}</span>
              </div>
              <h2 className="text-xl font-semibold text-blue-700 dark:text-cyan-300 mb-2">{news.title}</h2>
              <p className="text-gray-700 dark:text-gray-200 text-base">{news.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 