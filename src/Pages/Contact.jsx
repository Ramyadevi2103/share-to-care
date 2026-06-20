import { useState } from "react";

function Contact() {
    const [successMessage, setSuccessMessage] = useState("false");
    const submitForm = (e) => {
        e.preventDefault();
        setSuccessMessage("true");
        e.target.reset();
        setTimeout(() => {
            setSuccessMessage("false");
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-green-50 py-16">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">

                <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
                    Contact Us
                </h1>
                {successMessage === "true" && (
                    <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-4 text-center">
                        <h1>✅ Your message has been sent successfully!</h1>
                    </div>
                )}

                <form className="space-y-5" onSubmit={submitForm}>

                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full border p-3 rounded-lg"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full border p-3 rounded-lg"
                    />

                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full border p-3 rounded-lg"
                    />

                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        className="w-full border p-3 rounded-lg"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
                    >
                        Send Message
                    </button>

                </form>

            </div>
        </div>
    );
}

export default Contact;