import React from 'react';

interface TestimonialProps {
  content: string;
  author: string;
  date: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ content, author, date, avatar }) => {
  return (
    <div className="bg-[#1d2843] rounded-lg p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] border border-[#2a3555] hover:border-[#4e88ca] h-full flex flex-col">
      <div className="mb-4">
        <div className="flex text-[#4e88ca] text-lg mb-2">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <p className="text-white/90 text-lg leading-relaxed mb-5 italic flex-grow">{content}</p>
      </div>
      <div className="mt-auto">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-[#4e88ca] rounded-full flex items-center justify-center text-white font-bold text-lg">
            {avatar}
          </div>
          <div className="ml-3">
            <h4 className="text-white font-semibold text-lg">{author}</h4>
            <p className="text-white/60 text-sm">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      content: "\"Loved the range of products, quality of products, knowledgeable & well-trained staff, support service, and promotions & discounts at this place.\"",
      author: "Lohitha Manisha",
      date: "January 31, 2021",
      avatar: "LM"
    },
    {
      content: "\"Super! Loved the safety precautions at this place.\"",
      author: "Sreevijayraj Kondru",
      date: "January 30, 2021",
      avatar: "SK"
    },
    {
      content: "\"Good. Loved the range of products, knowledgeable & well-trained staff, and promotions & discounts at this place.\"",
      author: "Maheshwari",
      date: "December 26, 2020",
      avatar: "M"
    }
  ];

  const extendedTestimonials = [
    {
      content: "\"My keyboard was not working properly, so I went to this Service Centre. They checked it thoroughly and found the problem. They repaired it very quickly. Service charge was very modest. Now it is working very nicely. I am satisfied with their service.\"",
      author: "Customer Review",
      date: "November 27, 2016",
      avatar: "CR"
    },
    {
      content: "\"Bought a Samsung desktop from this dealer. They quoted me Rs.38,000 for the computer. It was an assembled one which has the configuration as per my requirement. I am happy with the purchasing.\"",
      author: "Customer Review",
      date: "November 22, 2016",
      avatar: "CR"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#162035] relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-stripe bg-[length:200%_200%] animate-gradient-animation opacity-[0.03] z-0"></div>
      
      <div className="container mx-auto max-w-[1280px] px-6 relative z-[1]">
        <div className="text-center mb-12">
          <div className="text-[#4e88ca] section-tag text-sm mb-3">CUSTOMER FEEDBACK</div>
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-4 text-white tracking-tight">WHAT OUR <span className="text-[#4e88ca]">CUSTOMERS</span> SAY</h2>
          <p className="text-white/70 max-w-2xl mx-auto">Hear from customers who've experienced the Prodigy difference.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Top row testimonials */}
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
          
          {/* Bottom row with two testimonials */}
          <div className="lg:col-span-3 md:col-span-2 relative">
            <div className="absolute top-[20%] left-0 w-[10%] h-[60%] rounded-r-full bg-[#4e88ca]/20 -z-1"></div>
            <div className="absolute top-[20%] right-0 w-[10%] h-[60%] rounded-l-full bg-[#4e88ca]/20 -z-1"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {extendedTestimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 