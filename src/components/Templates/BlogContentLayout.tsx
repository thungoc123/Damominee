import React from "react";

const BlogContentLayout = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 font-sans text-gray-900">
      {/* Date */}
      <p className="text-sm text-center text-gray-200 mb-2">October 18, 2016</p>

      {/* Title */}
      <h1 className="text-3xl text-gray-200 font-bold leading-tight mb-6">
        6 Technical Skills A Non-Technical Startup Founder Needs to Have
      </h1>

      {/* Subtitle */}
      <p className="text-base text-gray-200 mb-6">
        By learning a small amount of technical skills, you, as a non-technical startup founder,
        can support your company in smaller ways. Here's our list of need-to-know technical skills.
      </p>

      {/* Author Info */}
      {/* <div className="flex mx-auto items-center mb-8">
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-4" />
        <div>
          <p className="text-sm text-gray-200 font-semibold">John Griebel</p>
          <p className="text-xs text-gray-200">Self-taught Designer &amp; Developer</p>
        </div>
      </div> */}

      {/* Introduction */}
      <div className="mb-6 text-gray-200 text-[15px] leading-relaxed">
        <p className="mb-4 first-letter:float-left first-letter:text-4xl first-letter:font-bold first-letter:pr-1">
          When you set up your business, you do so because you have a great idea that will be a hit in
          your market, or there’s a problem to fix and you have the solution. But as a non-technical
          startup founder, with no development skills, making your dream a reality can be a whole lot harder.
        </p>
        <p className="mb-4">
          For example, if a non-technical startup founder doesn’t have a development team, they can’t
          make an MVP. The founder won’t be able to add features or fix bugs or make a tangible product
          at all. But that doesn’t mean that you can’t aid that development.
        </p>
        <p>
          By learning a small amount of technical skills, you, as a non-technical startup founder, can
          support your company in smaller ways. Here's our list of need-to-know technical skills – feel
          free to ask us questions about this post in the comments.
        </p>
      </div>

      {/* Section 1 */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-gray-200 mb-4">1. Wireframing</h2>
        <p className="mb-4 text-gray-200 text-[15px] leading-relaxed">
          The first vital skill that all non-technical startup founders need to have is wireframing.
          <span className="text-indigo-600 font-medium"> Wireframing is an essential part of the development process as it gives everybody on the team a general idea </span>
          of what the end product is supposed to be like.
        </p>
        <p className="text-[15px] text-gray-200 leading-relaxed">
          Typically, wireframes are a really basic sketch or image of what the end product might look or
          feel like. For example, if your team is going to make a website, then you can draw menus and a
          picture of what the layout will be like (e.g. where are the ad banners, how many columns are
          there etc.).
        </p>
      </div>
    </div>
  );
};

export default BlogContentLayout;
