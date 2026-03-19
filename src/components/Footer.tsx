import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-charcoal border-t border-white/[0.06]">
      {/* Top neon line */}
      <div className="h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand */}
          <div>
            <span className="font-heading text-lg font-bold text-white uppercase tracking-tight">
              Plot Points{" "}
              <span className="text-electric">Travel</span>
            </span>
            <p className="mt-2 font-body text-sm text-white/30 max-w-xs leading-relaxed">
              City guides to real filming locations. Walk the scenes. Know the
              spots.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-14">
            <div>
              <h4 className="font-sub text-xs font-semibold uppercase tracking-[0.25em] text-hotpink mb-3">
                Guides
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/guides/new-orleans"
                    className="text-sm text-white/40 hover:text-electric transition-colors"
                  >
                    New Orleans
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides/seattle"
                    className="text-sm text-white/40 hover:text-hotpink transition-colors"
                  >
                    Seattle
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-sub text-xs font-semibold uppercase tracking-[0.25em] text-lime mb-3">
                Connect
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="mailto:hello@plotpointstravel.com"
                    className="text-sm text-white/40 hover:text-electric transition-colors"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-white/40 hover:text-hotpink transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Plot Points Travel. All rights
            reserved.
          </p>
          <div className="flex gap-5">
            <Link href="#" className="text-xs text-white/20 hover:text-electric transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-xs text-white/20 hover:text-electric transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
