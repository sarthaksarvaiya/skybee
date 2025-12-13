function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-slate-700">
      <h1 className="text-2xl font-semibold mb-6 text-slate-900">
        Privacy Policy
      </h1>

      <p className="mb-4">
        At <strong>Bisbee Technology India Private Limited</strong>, we are
        committed to maintaining the privacy and security of your personal
        information. This Privacy Policy explains how we collect, use, store,
        and protect your data when you use our website or contact our team.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">
        1. Information We Collect
      </h2>
      <p>
        We may collect personal information when you contact us or submit
        inquiries, including:
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Company details</li>
        <li>Project requirements</li>
        <li>Any information submitted through our forms</li>
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-2">
        2. How We Use Your Information
      </h2>
      <p>We use your information to:</p>
      <ul className="list-disc ml-6 mt-2">
        <li>Respond to your inquiries</li>
        <li>Provide quotations and product details</li>
        <li>Improve our services and website performance</li>
        <li>Maintain communication regarding ongoing projects</li>
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-2">
        3. Data Protection & Security
      </h2>
      <p>
        We implement strict technical and organizational measures to protect
        your data from unauthorized access, loss, or misuse.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">
        4. Sharing of Information
      </h2>
      <p>
        We do <strong>not</strong> sell or rent your data. We may share your
        information only with internal departments or verified partners for
        project-related purposes.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">5. Cookies</h2>
      <p>
        Our website may use cookies to improve user experience and website
        analytics.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">6. Your Rights</h2>
      <p>You may request to:</p>
      <ul className="list-disc ml-6 mt-2">
        <li>Access your stored data</li>
        <li>Correct inaccurate information</li>
        <li>Request deletion of your data</li>
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-2">7. Contact Us</h2>
      <p>
        For any privacy-related questions: <br />
        <strong>Email:</strong> info@skybeepufpanel.com <br />
        <strong>Phone:</strong> +91 96873 96878
      </p>

      <p className="mt-8 text-sm text-slate-500">
        Last updated: {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default Privacy;
