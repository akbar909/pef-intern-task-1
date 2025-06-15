import Image from 'next/image';

const galleryImages = [
  // Replace these URLs with your actual images
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
//   'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
];

export default function GalleryPage() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 dark:text-cyan-400 mb-4">Gallery</h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore memorable moments and highlights from our events, activities, and community gatherings.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((src, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-800 transition-transform hover:scale-105"
            >
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                width={400}
                height={300}
                className="object-cover w-full h-60 group-hover:scale-110 transition-transform duration-500"
                style={{ aspectRatio: '4/3' }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white text-lg font-semibold">View</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 