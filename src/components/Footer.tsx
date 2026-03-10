import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-sapphire text-base/70">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div>
            <span className="font-heading text-lg font-bold text-base uppercase tracking-tight">
              Plot Points Travel
            </span>
            <p className="mt-2 font-body text-sm text-base/50 max-w-xs">
              City guides to real filming locations. Walk the scenes. Know the
              spots.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div>
              <h4 className="font-sub text-xs font-semibold uppercase tracking-widest text-electric mb-3">
                Guides
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/guides/new-orleans"
                    className="text-sm hover:text-electric transition-colors"
                  >
                    New Orleans
                  </Link>
                </li>
                <li>
                  <span className="text-sm text-base/30">
                    More cities coming soon
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-sub text-xs font-semibold uppercase tracking-widest text-electric mb-3">
                Connect
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:hello@plotpointstravel.com"
                    className="text-sm hover:text-electric transition-colors"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-electric transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-base/10 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-base/40">
            &copy; {new Date().getFullYear()} Plot Points Travel. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-xs text-base/40 hover:text-electric transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-xs text-base/40 hover:text-electric transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
