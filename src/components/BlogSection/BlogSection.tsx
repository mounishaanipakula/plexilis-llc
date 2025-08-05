const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/assets/images/blog-1.png",
      date: "10 June 2025",
      comments: "Comment (06)",
      title: "Structure a Development Plan in the Digital Market",
      excerpt: "Blog Structure a Development Plan in the Digital Market The challenges faced by the retail industry",
      readMoreLink: "/blog/development-plan-digital-market"
    },
    {
      id: 2,
      image: "/assets/images/blog-2.png",
      date: "10 June 2025",
      comments: "Comment (06)",
      title: "Key Trends for 2020: AR/VR, Blockchain and S/4HANA",
      excerpt: "Blog Key Trends for 2020: AR/VR, Blockchain and S/4HANA Enterprises",
      readMoreLink: "/blog/key-trends-ar-vr-blockchain"
    },
    {
      id: 3,
      image: "/assets/images/blog-3.png",
      date: "10 June 2025",
      comments: "Comment (06)",
      title: "Structure a Development Plan in the Digital Market",
      excerpt: "Blog Structure a Development Plan in the Digital Market The challenges faced by the retail industry",
      readMoreLink: "/blog/development-plan-digital-market-2"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="px-6 md:px-12 lg:px-16 xl:px-20 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[36px] font-bold leading-[180%] tracking-[0%] text-center text-primary">
            Blog <span className="text-secondary">Posts</span>
          </h2>
          <div className="w-48 h-0.5 bg-secondary mx-auto mb-8"></div>
        </div>

        {/* Blog Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-neutral-100 rounded-[5px] overflow-hidden p-6 md:p-8 lg:p-[30px] w-full max-w-sm md:max-w-md lg:max-w-[424px] h-auto lg:h-[506px] mx-auto lg:mx-0 flex flex-col gap-2 md:gap-3 lg:gap-[10px]">
                {/* Blog Image */}
                <div>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 md:h-52 lg:h-[207.5px] object-cover rounded-[10px]"
                  />
                </div>

                {/* Meta Information */}
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-secondary rounded-sm"></div>
                    <span className="text-neutral-600">{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-secondary rounded-sm"></div>
                    <span className="text-neutral-600">{post.comments}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg xl:text-[18px] font-semibold leading-[26.6px] tracking-[0%] text-primary text-left">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-neutral-600 text-xs md:text-sm xl:text-[14px] font-normal leading-[26.6px] tracking-[0%] text-left flex-grow">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <div className="text-left mt-auto">
                  <a 
                    href={post.readMoreLink}
                    className="bg-secondary hover:bg-secondary/90 text-white pl-4 rounded-full font-normal transition-colors duration-300 flex items-center space-x-2 w-fit text-sm"
                  >
                    <span>Read More</span>
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Blog Post Button */}
        <div className="text-center">
          <a 
            href="/blog"
            className="bg-white text-secondary border-2 border-secondary font-normal pl-4 rounded-full inline-flex items-center space-x-3"
          >
            <span>All Blog Post</span>
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;