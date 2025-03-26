
const Footer = () => {
  return (
    <footer className="py-16 bg-bank-light border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-1 mb-4">
              <div className="h-6 w-6 rounded-full bg-bank-accent"></div>
              <h1 className="text-xl font-semibold">Bankopia</h1>
            </div>
            <p className="text-muted-foreground max-w-xs mb-6">
              The modern banking platform that helps you manage your finances with ease and security.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-bank-dark text-white hover:bg-black transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 7.42C21.28 7.72 20.52 7.92 19.72 8.02C20.56 7.52 21.18 6.72 21.48 5.76C20.72 6.24 19.84 6.58 18.92 6.78C18.16 5.96 17.08 5.5 15.88 5.5C13.58 5.5 11.72 7.36 11.72 9.68C11.72 10 11.76 10.32 11.82 10.62C8.28 10.46 5.14 8.8 3.04 6.26C2.7 6.88 2.5 7.58 2.5 8.34C2.5 9.76 3.24 11.04 4.36 11.78C3.68 11.76 3.04 11.58 2.48 11.28V11.32C2.48 13.36 3.92 15.08 5.82 15.46C5.5 15.54 5.16 15.58 4.8 15.58C4.54 15.58 4.28 15.56 4.04 15.5C4.56 17.18 6.12 18.4 7.94 18.42C6.48 19.56 4.66 20.22 2.7 20.22C2.38 20.22 2.06 20.2 1.74 20.16C3.56 21.38 5.72 22.08 8.04 22.08C15.86 22.08 20.1 15.64 20.1 10.04C20.1 9.88 20.1 9.72 20.08 9.56C20.86 9 21.5 8.28 22 7.42Z" fill="currentColor" />
                </svg>
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-bank-dark text-white hover:bg-black transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.53 17.5 2.04 12 2.04Z" fill="currentColor" />
                </svg>
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-bank-dark text-white hover:bg-black transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 7.06C9.31 7.06 7.12 9.25 7.12 11.94C7.12 14.63 9.31 16.82 12 16.82C14.69 16.82 16.88 14.63 16.88 11.94C16.88 9.25 14.69 7.06 12 7.06ZM12 15.04C10.29 15.04 8.9 13.65 8.9 11.94C8.9 10.23 10.29 8.84 12 8.84C13.71 8.84 15.1 10.23 15.1 11.94C15.1 13.65 13.71 15.04 12 15.04ZM17.73 6.88C17.73 7.6 17.15 8.18 16.43 8.18C15.71 8.18 15.13 7.6 15.13 6.88C15.13 6.16 15.71 5.58 16.43 5.58C17.15 5.58 17.73 6.16 17.73 6.88ZM20.97 8.19C20.9 6.71 20.56 5.41 19.49 4.34C18.42 3.27 17.12 2.93 15.64 2.86C14.11 2.78 9.89 2.78 8.36 2.86C6.88 2.93 5.58 3.27 4.51 4.34C3.44 5.41 3.1 6.71 3.03 8.19C2.95 9.72 2.95 13.94 3.03 15.47C3.1 16.95 3.44 18.25 4.51 19.32C5.58 20.39 6.88 20.73 8.36 20.8C9.89 20.88 14.11 20.88 15.64 20.8C17.12 20.73 18.42 20.39 19.49 19.32C20.56 18.25 20.9 16.95 20.97 15.47C21.05 13.94 21.05 9.72 20.97 8.19ZM18.91 17.12C18.58 18.05 17.85 18.78 16.92 19.11C15.57 19.61 12.84 19.5 12 19.5C11.16 19.5 8.43 19.61 7.08 19.11C6.15 18.78 5.42 18.05 5.09 17.12C4.59 15.77 4.7 13.04 4.7 11.94C4.7 10.84 4.59 8.11 5.09 6.76C5.42 5.83 6.15 5.1 7.08 4.77C8.43 4.27 11.16 4.38 12 4.38C12.84 4.38 15.57 4.27 16.92 4.77C17.85 5.1 18.58 5.83 18.91 6.76C19.41 8.11 19.3 10.84 19.3 11.94C19.3 13.04 19.41 15.77 18.91 17.12Z" fill="currentColor" />
                </svg>
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-bank-dark text-white hover:bg-black transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H6.5V10H9V17ZM7.7 8.7C6.8 8.7 6.1 8 6.1 7.1C6.1 6.2 6.8 5.5 7.7 5.5C8.6 5.5 9.3 6.2 9.3 7.1C9.3 8 8.6 8.7 7.7 8.7ZM18 17H15.5V13.5C15.5 12.6 14.8 11.9 13.9 11.9C13 11.9 12.3 12.6 12.3 13.5V17H9.8V10H12.3V11.3C12.7 10.4 13.7 9.8 14.8 9.8C16.5 9.8 18 11.3 18 13V17Z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-bank-accent transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-bank-accent transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-bank-accent transition-colors">Press</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-bank-accent transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-bank-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-bank-accent transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-bank-accent transition-colors">API Reference</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-bank-accent transition-colors">Status</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-bank-accent transition-colors">Privacy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-bank-accent transition-colors">Terms</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-bank-accent transition-colors">Security</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-bank-accent transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Bankopia. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-bank-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-bank-accent transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-bank-accent transition-colors">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
