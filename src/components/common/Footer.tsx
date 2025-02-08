import { navItems } from "../../data/globals";
import { ScrollToButton } from "./ScrollToButton";
export function Footer() {
  return (
    <footer className=" text-gray-400 py-5 border-t border-[#2d2d2d]">
      <div className=" mx-auto ">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white text-black w-8 h-8 flex items-center justify-center rounded">
                C
              </div>
              <h2 className="text-white text-xl font-semibold">Crypto Daily</h2>
            </div>
            <div className="space-y-2">
              <p>
                A product by{" "}
                <a
                  href="https://martinsoft-v2-0.vercel.app/"
                  target="_blank"
                  className="text-[#0066FF] hover:text-[#0066FF]/90"
                >
                  martinsoft
                </a>
              </p>
              <p>
                Building in public at{" "}
                <a href="#" className="text-[#0066FF] hover:text-[#0066FF]/90">
                  @pammpatacsil
                </a>
              </p>
            </div>
          </div>

          {/* Right Section - Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20">
            {/* Column 1 */}
            <ul className="space-y-4">
              {navItems.map((item) => {
                return (
                  <li key={item.id} className="text-sm mx-7">
                    <ScrollToButton section={item.href}>
                      {item.label}
                    </ScrollToButton>
                  </li>
                );
              })}
            </ul>

            {/* Column 2 */}
            <div className="space-y-4">
              <a href="#" className="block hover:text-white">
                Twitter
              </a>
              <a href="#" className="block hover:text-white">
                Discord
              </a>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <a href="#" className="block hover:text-white">
                CryptoDaily Pro
              </a>
              <a href="#" className="block hover:text-white">
                CryptoDaily
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
