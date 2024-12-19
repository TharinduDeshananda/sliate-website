import GoogleMapComponent from "@/components/GoogleMapComponent ";
import TopNavigation from "@/components/TopNavigation";
import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-blue-500 dark:text-gray-500 text-center mb-8">
          About Us
        </h1>
        <div className="space-y-12">
          <section className="text-center">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              At [Institute Name], our mission is to empower students with
              knowledge and skills that prepare them for a bright future. We are
              committed to excellence in education, innovation, and fostering a
              community of lifelong learners.
            </p>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg leading-relaxed">
              To be a leading institution recognized globally for our dedication
              to shaping the next generation of thinkers, leaders, and
              innovators.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-center mb-4">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-500 dark:text-gray-500">
                  Expert Faculty
                </h3>
                <p>
                  Our faculty are industry leaders and experts in their fields,
                  dedicated to providing personalized guidance.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-500 dark:text-gray-500">
                  State-of-the-Art Facilities
                </h3>
                <p>
                  Equipped with modern labs, libraries, and classrooms to ensure
                  a world-class learning environment.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-500 dark:text-gray-500">
                  Holistic Education
                </h3>
                <p>
                  We emphasize both academic excellence and personal development
                  to create well-rounded individuals.
                </p>
              </div>
            </div>
            <div className="flex flex-row flex-wrap max-w-4xl p-3 sm:p-6 md:p-10 rounded-lg mx-auto w-full text-gray-300 bg-gray-950 my-10">
              <div className="flex flex-col gap-x-2">
                <h1>Contact</h1>
                <div className="">
                  <h1>SLIATE Head Office</h1>
                  <p>320, T B Jayah Mawatha</p>
                  <p>Colombo, Sri Lanka</p>
                  <p>
                    <span className="font-bold">Phone: </span> (+94) 112 691307
                    / 112691572{" "}
                  </p>
                  <p>
                    <span className="font-bold">Email: </span>
                    contact@sliate.lk
                  </p>
                </div>
              </div>
              <GoogleMapComponent
                instituteName="SLIATE"
                latitude={6.8570744}
                longitude={79.8656459}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
