interface HeroSectionProps {
  title: string;
  author: string;
  date: string;
  description?: string; // Made optional since it's not used in the component
}

export default function HeroSection({ 
  title, 
  author, 
  date, 
  description 
}: HeroSectionProps) {
  return (
    <div className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" 
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {title} <span className="text-blue-600">→</span>
        </h1>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-600 mb-4 gap-2">
          <span style={{ fontFamily: "'Roboto', sans-serif" }}>{author}</span>
          <span style={{ fontFamily: "'Roboto', sans-serif" }}>{date}</span>
        </div>
        {description && (
          <p 
            className="text-gray-600 mt-4"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}