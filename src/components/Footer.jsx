function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-10 py-6 text-center text-sm text-slate-600 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <p>
          © {new Date().getFullYear()} Bisbee Technology India Private Limited.
          All rights reserved.
        </p>

        <div className="flex gap-6 text-slate-500">
          <a href="/privacy" className="hover:text-sky-700 transition-colors">
            Privacy Policy
          </a>

          <a href="/terms" className="hover:text-sky-700 transition-colors">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
