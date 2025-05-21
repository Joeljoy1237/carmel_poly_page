import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const courses = [
  {
    title: "Civil Engineering",
    link: "/departments/civil",
    imageUrl: "/civil.png"
  },
  {
    title: "Mechanical Engineering",
    link: "/departments/mechanical",
    imageUrl: "/mechanical.png"
  },
  {
    title: "Electrical & Electronics Engineering",
    link: "/departments/electrical",
    imageUrl: "/electrical_and_electronics.png"
  },
  {
    title: "Automobile Engineering",
    link: "/departments/automobile",
    imageUrl: "/automobile.png"
  },
  {
    title: "Computer Engineering",
    link: "/departments/computer",
    imageUrl: "/computer.png"
  },
  {
    title: "Electronics Engineering",
    link: "/departments/electronics",
    imageUrl: "/electronics.png"
  }
];

const CourseHighlights = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-carmel-primary mb-10 border-b-2 border-carmel-primary inline-block pb-2">
          OUR COURSES
        </h2>

        {/* GOVERNMENT AIDED */}
        <div className=" mb-6">
          <h3 className="text-xl font-bold text-center text-gray-800 uppercase tracking-wide mb-4">Government Aided</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.slice(0, 3).map((course, index) => (
              <Link href={course.link} key={index}>
                <div className="rounded-xl overflow-hidden bg-white shadow-md transition-transform transform hover:scale-[1.02] hover:shadow-lg">
                  <Image 
                    src={course.imageUrl}
                    alt={course.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-carmel-primary group-hover:underline">
                      {course.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* SELF FINANCING */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-center text-gray-800 uppercase tracking-wide mb-4">Self Financing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.slice(3).map((course, index) => (
              <Link href={course.link} key={index} className="group block">
                <div className="rounded-xl overflow-hidden bg-white shadow-md transition-transform transform hover:scale-[1.02] hover:shadow-lg">
                  <Image 
                    src={course.imageUrl}
                    alt={course.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-carmel-primary group-hover:underline">
                      {course.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;
