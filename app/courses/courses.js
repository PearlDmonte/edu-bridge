import React from "react";
import {
  Star,
  Bookmark,
  ChevronDown,
  ShoppingCart,
  Search,
} from "lucide-react";
import Image from "next/image";

export default function Component() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/placeholder.svg"
              alt="EduBridge Logo"
              width={100}
              height={40}
              className="h-8 w-auto"
            />
            <nav className="hidden md:flex space-x-8 ml-10">
              <a
                href="#"
                className="text-gray-900 hover:text-black font-semibold"
              >
                Explore Courses
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-black font-semibold"
              >
                Webinars
              </a>
            </nav>
          </div>
          <div className="flex items-center">
            <div className="relative mr-4">
              <input
                type="text"
                placeholder="What would you like to learn today?"
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
            </div>
            <a
              href="#"
              className="text-gray-900 hover:text-black mr-4 font-semibold"
            >
              My Learning
            </a>
            <ShoppingCart className="h-6 w-6 text-gray-900 mr-4" />
            <div className="h-8 w-8 rounded-full bg-gray-200"></div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Featured Courses
        </h1>
        <div className="flex">
          <aside className="w-64 mr-8">
            <div className="bg-white shadow rounded-lg p-4 mb-4">
              <h2 className="font-semibold text-lg mb-4 text-gray-900">
                Filters
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2 text-gray-900">
                    All Courses
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-gray-900 hover:text-black">
                        Recommended Courses
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-900 hover:text-black">
                        Career Path Packages
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex-1">
            <div className="mb-4 flex justify-between items-center">
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-200">
                  Featured
                </button>
                <button className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-200">
                  Free Courses
                </button>
                <button className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-200">
                  Highly Rated
                </button>
              </div>
              <button className="flex items-center text-sm font-medium text-gray-900">
                Sort by
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Basic English Speaking",
                  description: "Develop conversational English skills.",
                  instructor: "Taylor Eve",
                  rating: 4.97,
                  reviews: 223,
                  price: 0,
                },
                {
                  title: "Basic Computer Skills & Typing",
                  description:
                    "Learn essential computer skills, including typing and internet browsing.",
                  instructor: "Lutfi Adi",
                  rating: 4.92,
                  reviews: 252,
                  price: 0,
                },
                {
                  title: "Tailoring and Sewing",
                  description:
                    "Master the art of stitching and tailoring clothes.",
                  instructor: "John Doe",
                  rating: 4.98,
                  reviews: 213,
                  price: 0,
                },
                {
                  title: "Pottery and Handicrafts",
                  description:
                    "Learn the craft of pottery and traditional handicrafts.",
                  instructor: "Mega Tri",
                  rating: 4.99,
                  reviews: 132,
                  price: 0,
                },
                {
                  title: "Agriculture and Sustainable Farming",
                  description:
                    "Improve your farming skills with sustainable techniques.",
                  instructor: "Keith Kinzie",
                  rating: 4.98,
                  reviews: 184,
                  price: 0,
                },
                {
                  title: "Mobile Repairing and Servicing",
                  description:
                    "Become skilled at mobile phone repairing and servicing.",
                  instructor: "Surya Intan",
                  rating: 4.97,
                  reviews: 212,
                  price: 0,
                },
              ].map((course, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow overflow-hidden"
                >
                  <Image
                    src="/placeholder.svg"
                    alt={course.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 text-gray-900">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-700 mb-2">
                      {course.description}
                    </p>
                    <p className="text-sm text-gray-900 mb-2">
                      {course.instructor}
                    </p>
                    <div className="flex items-center mb-2">
                      <span className="text-yellow-400 mr-1">
                        {course.rating}
                      </span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-1">
                        ({course.reviews})
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-gray-900">Free</span>
                      <button className="px-4 py-2 bg-red-500 text-white rounded-md text-sm font-medium hover:bg-red-600">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
