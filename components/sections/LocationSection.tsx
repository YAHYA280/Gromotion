const LocationSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Onze Locatie
          </h2>
          <p className="text-gray-600 text-lg">
            Makkelijk te vinden op de kaart
          </p>
        </div>

        {/* Map Container */}
        <div className="w-full  mx-auto">
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2463.8159847831544!2d4.638771315965445!3d51.84399527969542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c4345ef6b4c6c7%3A0x3b4a4e8f8e8b8a8a!2sAvelingen%202B%2C%203341%20LZ%20Hendrik-Ido-Ambacht%2C%20Netherlands!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
