import Navigation from "@/components/Navigation";

/**
 * Press Page
 * Design: Modern Minimalist with Warm Accents
 * - Centered layout with embedded YouTube videos
 * - Short descriptions below each video
 * - 1 press video (template for multiple)
 */

interface PressVideo {
  id: number;
  title: string;
  description: string;
  youtubeId: string;
  date: string;
  channel: string;
}

const videos: PressVideo[] = [
  {
    id: 1,
    title: "Interview: The Future of AI in Healthcare",
    description:
      "Join me as I discuss the latest developments in artificial intelligence and machine learning applications in the healthcare industry. We explore how AI is revolutionizing diagnostics, treatment planning, and patient care management.",
    youtubeId: "dQw4w9WgXcQ",
    date: "March 2024",
    channel: "Tech Talks Daily",
  },
];

export default function Press() {
  return (
    <div className="min-h-screen bg-alice-blue pt-24">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="font-display text-5xl md:text-6xl font-bold text-blue-state mb-16 text-center">
          Press & Media
        </h1>

        {/* Press Videos */}
        <div className="space-y-16">
          {videos.map((video) => (
            <div key={video.id} className="space-y-6">
              {/* Video Container */}
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-medium">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Video Info */}
              <div className="space-y-4">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-blue-state mb-2">
                    {video.title}
                  </h2>
                  <div className="flex gap-4 text-sm font-nav text-tropical-teal font-semibold">
                    <span>{video.date}</span>
                    <span>•</span>
                    <span>{video.channel}</span>
                  </div>
                </div>

                <p className="font-body text-blue-state leading-relaxed text-lg">
                  {video.description}
                </p>

                {/* Watch Button */}
                <a
                  href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-tropical-teal text-white font-nav font-semibold rounded-lg smooth-transition hover:bg-blue-state shadow-soft hover:shadow-medium"
                >
                  Watch on YouTube
                </a>
              </div>

              {/* Divider */}
              {videos.length > 1 && (
                <div className="h-px bg-gradient-to-r from-transparent via-tangerine-dream to-transparent my-8" />
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 p-8 bg-white rounded-lg shadow-soft">
          <h3 className="font-display text-2xl font-bold text-blue-state mb-4">
            Featured In
          </h3>
          <p className="font-body text-blue-state leading-relaxed mb-6">
            My work has been featured in various publications and media outlets. Check back soon for more press coverage and media appearances.
          </p>
          <a
            href="mailto:contact@example.com"
            className="px-6 py-3 bg-tangerine-dream text-white font-nav font-semibold rounded-lg smooth-transition hover:bg-dark-garnet shadow-soft hover:shadow-medium"
          >
            Media Inquiries
          </a>
        </div>
      </main>
    </div>
  );
}
