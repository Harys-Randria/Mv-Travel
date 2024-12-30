const testimonials = [
    {
      testimonial:
        'From start to finish, everything was seamless. The tours, the service, the unforgettable experiences – 10/10!',
      name: 'David Lee',
      location: 'London, UK',
      rating: 10,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      testimonial:
        'This was the trip of a lifetime! The beaches, the people, the adventure – everything was absolutely perfect.',
      name: 'Michael Roberts',
      location: 'Sydney, Australia',
      rating: 9.5,
      avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    {
      testimonial:
        'Madagascar is beyond beautiful, and MadaWeaver made it easy to explore every hidden gem. Simply magical!',
      name: 'Sarah Johnson',
      location: 'California, USA',
      rating: 9.8,
      avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
    },
  ];
  
  const Testimonial = () => {
    return (
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            We Care About Our Customers Experience Too
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{testimonial.testimonial}</p>
                <div className="flex items-center">
                  {[...Array(Math.floor(testimonial.rating))].map((star, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.85L12 17.77l-6.18 3.23L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Testimonial;
  