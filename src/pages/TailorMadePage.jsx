import { useState } from "react";

const TailorMadeForm = () => {
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    duration: "",
    groupSize: "",
    withChildren: false,
    budget: "",
    preferences: "",
    name: "",
    title: "",
    email: "",
    phone: "",
    contactMethod: [],
    consent: false,
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.destination || !formData.startDate || !formData.email) {
      alert("Veuillez remplir tous les champs obligatoires !");
      return;
    }

    console.log("Formulaire envoyé :", formData);
    setSuccessMessage("Votre demande a été soumise avec succès !");
    setFormData({
      destination: "",
      startDate: "",
      duration: "",
      groupSize: "",
      withChildren: false,
      budget: "",
      preferences: "",
      name: "",
      title: "",
      email: "",
      phone: "",
      contactMethod: [],
      consent: false,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?travel')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Plan Your Dream Adventure</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Tailor your trip to your exact needs and interests with our personalized travel planning service. From exotic destinations to unique local experiences, we ll make it unforgettable.
          </p>
          <a
            href="#form-section"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-lg text-lg"
          >
            Start Planning Now
          </a>
        </div>
      </div>

      {/* Service Description */}
      <div className="bg-gray-100 py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Tailor-Made Travel Service?</h2>
          <p className="text-gray-600 text-lg mb-6">
            Whether you re seeking a luxury retreat, an adventurous expedition, or a cultural journey, we craft travel experiences that are as unique as you are. Let our experts design an itinerary based on your preferences, budget, and timeline.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-yellow-500">Personalized Itineraries</h3>
              <p className="text-gray-600">We listen to your needs and craft a journey that s uniquely yours.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-yellow-500">Local Expertise</h3>
              <p className="text-gray-600">Our local guides ensure you experience the hidden gems of each destination.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-yellow-500">Unforgettable Adventures</h3>
              <p className="text-gray-600">From luxury stays to thrilling activities, we make your trip extraordinary.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div id="form-section" className="bg-gray-50 py-10 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-6">
            Start Planning Your Tailor-Made Trip
          </h2>
          {successMessage && (
            <p className="text-green-600 text-center font-medium mb-6">
              {successMessage}
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Destination */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Where would you like to go? *
              </label>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleInputChange}
                placeholder="Enter your dream destination"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-500"
                required
              />
            </div>

            {/* Dates */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                When would you like to go? *
              </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-500"
                required
              />
            </div>

            {/* Duration */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                For how long? *
              </label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                placeholder="e.g., 7 nights, 2 weeks"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-500"
              />
            </div>

            {/* Group Size */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                How many people in your group? *
              </label>
              <input
                type="number"
                name="groupSize"
                value={formData.groupSize}
                onChange={handleInputChange}
                min="1"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-500"
              />
            </div>

            {/* Budget */}
            <div>
            <label className="block text-gray-700 font-medium mb-2">
            Budget per person
            </label>
            <select
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-500"
            >
            <option value="">Select budget</option>
            <option>Below $1000</option>
            <option>$1000 - $3000</option>
            <option>Above $3000</option>
            </select>
            </div>

            {/* Preferences */}
            <div>
            <label className="block text-gray-700 font-medium mb-2">
            Tell us about your travel plans
            </label>
            <textarea
            name="preferences"
            value={formData.preferences}
            onChange={handleInputChange}
            placeholder="Any specific preferences, activities, or accommodations?"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-500"
            rows="5"
            ></textarea>
            </div>

            {/* Contact Information */}
            <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Your Contact Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block text-gray-700 font-medium mb-2">
                Title
                </label>
                <select
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-500"
                >
                <option value="">Select title</option>
                <option>Mr</option>
                <option>Ms</option>
                <option>Mrs</option>
                <option>Dr</option>
                </select>
            </div>
            <div>
                <label className="block text-gray-700 font-medium mb-2">
                Name *
                </label>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-500"
                required
                />
            </div>
            </div>

            <div className="mt-4">
            <label className="block text-gray-700 font-medium mb-2">
                Email address *
            </label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-500"
                required
            />
            </div>

            <div className="mt-4">
            <label className="block text-gray-700 font-medium mb-2">
                Phone number
            </label>
            <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Contact number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-500"
            />
            </div>
            </div>

            {/* Contact Preference */}
            <div>
            <label className="block text-gray-700 font-medium mb-2">
            Preferred contact method
            </label>
            <div className="flex items-center space-x-4">
            <label className="flex items-center">
                <input
                type="checkbox"
                name="contactMethod"
                value="email"
                onChange={(e) => {
                    const isChecked = e.target.checked;
                    setFormData((prevData) => ({
                    ...prevData,
                    contactMethod: isChecked
                        ? [...prevData.contactMethod, e.target.value]
                        : prevData.contactMethod.filter(
                            (method) => method !== e.target.value
                        ),
                    }));
                }}
                className="mr-2"
                />
                Email
            </label>
            <label className="flex items-center">
                <input
                type="checkbox"
                name="contactMethod"
                value="phone"
                onChange={(e) => {
                    const isChecked = e.target.checked;
                    setFormData((prevData) => ({
                    ...prevData,
                    contactMethod: isChecked
                        ? [...prevData.contactMethod, e.target.value]
                        : prevData.contactMethod.filter(
                            (method) => method !== e.target.value
                        ),
                    }));
                }}
                className="mr-2"
                />
                Phone
            </label>
            </div>
            </div>

            {/* Consent */}
            <div>
            <label className="flex items-center">
            <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleInputChange}
                className="mr-2"
                required
            />
            I agree to receive travel updates and promotional emails.
            </label>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TailorMadeForm;


