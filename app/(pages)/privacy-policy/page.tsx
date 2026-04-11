import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Seraniai",
  description: "Learn how Seraniai collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4  pt-20">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className=" text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Privacy Policy
          </h1>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-gray-200 divide-y divide-gray-100">

          {/* Intro */}
          <div className="px-6 py-5">
            <p className=" text-sm sm:text-lg text-gray-800 leading-relaxed">
              Seraniai is a task management application integrated with an AI-powered
              chatbot that helps users manage tasks, receive reminders, and improve
              productivity. This policy explains how we handle your information.
            </p>
          </div>
    
          {/* 1 */}
          <div className="px-6 py-5">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
              1. Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-600">
              <li>Name and email address</li>
              <li>Task data and productivity records</li>
              <li>Voice inputs used during chatbot interaction</li>
              <li>Basic device information (device type, operating system)</li>
            </ul>
          </div>

          {/* 2 */}
          <div className="px-6 py-5">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-600">
              <li>To provide and operate task management features</li>
              <li>To improve chatbot responses and AI accuracy</li>
              <li>To enable voice-based interactions</li>
              <li>To enhance the overall user experience</li>
            </ul>
          </div>

          {/* 3 */}
          <div className="px-6 py-5">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
              3. Third-Party Services
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-2">
              We use the following third-party services:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-600">
              <li>
                <span className="font-medium text-gray-800">Firebase</span> — authentication and database
              </li>
              <li>
                <span className="font-medium text-gray-800">AI Providers</span> — chatbot and voice processing
              </li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-2">
              These providers process data under their own privacy policies.
            </p>
          </div>

          {/* 4 */}
          <div className="px-6 py-5">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
              4. Data Security
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We use appropriate technical and organizational measures to protect your
              data, stored securely in cloud-based infrastructure.
            </p>
          </div>

          {/* 5 */}
          <div className="px-6 py-5">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
              5. Your Rights
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-600">
              <li>You may stop using the application at any time.</li>
              <li>You may request deletion of your personal data.</li>
            </ul>
          </div>

          {/* 6 */}
          <div className="px-6 py-5">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
              6. Data Sharing
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We do not sell or share your data with third parties except as required
              to operate the Seraniai service.
            </p>
          </div>

          {/* 7 */}
          <div className="px-6 py-5">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
              7. Contact
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-2">
              For questions about this Privacy Policy, contact us at:
            </p>
            <a
              href="mailto:Viruthshaan30@gmail.com"
              className="text-sm sm:text-base font-medium text-blue-600 hover:underline"
            >
              Viruthshaan30@gmail.com
            </a>
          </div>

        </div>

        {/* Footer */}
        <p className="text-center text-xs sm:text-sm text-gray-400 mt-6">
          This policy may be updated. Continued use of Seraniai means you accept any changes.
        </p>

      </div>
    </main>
  );
}