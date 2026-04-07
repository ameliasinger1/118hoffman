import React, { useState } from "react";
import {
  Phone,
  Wifi,
  Flame,
  MapPin,
  AlertTriangle,
  Car,
  Utensils,
  Home,
  Info,
  Tv,
  Trash2,
  ShieldAlert,
  ShoppingBag,
  TreePine,
  Lock,
} from "lucide-react";

export default function HouseGuide() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const correctPassword = "hoffman118";

  const handleLogin = (e) => {
    e.preventDefault();
    if (password.toLowerCase() === correctPassword) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect access code.");
      setPassword("");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 font-sans">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-emerald-900 p-8 text-center">
            <h1 className="text-3xl font-serif text-white tracking-tight mb-2">
              118 Hoffman Road
            </h1>
            <p className="text-emerald-200 text-sm uppercase tracking-widest">
              Guest Access
            </p>
          </div>
          <div className="p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Enter Guest Code
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 text-slate-900"
                    placeholder="Access Code"
                    autoFocus
                  />
                </div>
                {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-emerald-800 hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
              >
                View Guide
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f4f5] py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-emerald-900 text-white pt-12 pb-6 px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight mb-2">
            118 Hoffman Road
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light mb-4">
            Pine Plains, NY 12567
          </p>
          <p className="text-sm md:text-base text-slate-400 font-medium tracking-widest uppercase">
            Guest Guide
          </p>
        </div>

        <div className="p-8 space-y-10">
          {/* Emergency and Safety */}
          <section>
            <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-2">
              <AlertTriangle className="text-red-600 w-6 h-6" />
              <h2 className="text-2xl font-serif text-slate-900">
                Emergency & Safety Contacts
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700">
              <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Immediate Assistance
                </h3>
                <p className="font-medium">
                  Dial 911 for Medical, Fire, or Police.
                </p>
                <div className="mt-4">
                  <span className="block font-semibold text-red-900">
                    Property Contacts:
                  </span>
                  <ul className="mt-1 space-y-1">
                    <li>Amelia Singer: 646-659-8521</li>
                    <li>Morty Singer: 917-449-8743</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="block font-semibold text-slate-900">
                    Fire Safety
                  </span>
                  <p className="text-sm">
                    Extinguishers sit in the twin bedroom and the kitchen
                    cabinet adjacent to the pots and pans. Fire ladders sit
                    under the master bathroom sofa and in the twin bedroom
                    closet.
                  </p>
                </div>
                <div>
                  <span className="block font-semibold text-slate-900">
                    Medical Facilities
                  </span>
                  <ul className="text-sm space-y-2 mt-1">
                    <li>
                      <strong>Northern Dutchess Hospital:</strong> 6511 Spring
                      Brook Ave, Rhinebeck, NY; 845-876-3001; 25 minutes away.
                    </li>
                    <li>
                      <strong>Sharon Hospital:</strong> 50 Hospital Hill Rd,
                      Sharon, CT; 860-364-4000; 25 minutes away.
                    </li>
                    <li>
                      <strong>Urgent Care:</strong> CMH Rapid Care at 283
                      Mountain View Rd, Copake, NY.
                    </li>
                    <li>
                      <strong>Pharmacy:</strong> Pine Plains Pharmacy at 2965
                      Church St, Pine Plains, NY; 518-398-5588.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Technology and Network */}
          <section>
            <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-2">
              <Wifi className="text-blue-600 w-6 h-6" />
              <h2 className="text-2xl font-serif text-slate-900">
                Technology & Network
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="block font-semibold text-slate-900 mb-1">
                  Wi-Fi Network
                </span>
                <p>
                  Network: <strong>7e874a</strong>
                </p>
                <p>
                  Password: <strong>enjoy.540.grasp</strong>
                </p>
                <p className="text-sm mt-2 text-slate-500">
                  The 5G network provides the best connection.
                </p>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="block font-semibold text-slate-900 flex items-center gap-2">
                    <Tv className="w-4 h-4" /> Entertainment
                  </span>
                  <p className="text-sm">
                    The basement television operates directly via the Apple TV
                    remote. Cable requires the TV remote for power and the Cable
                    remote for channels.
                  </p>
                </div>
                <div>
                  <span className="block font-semibold text-slate-900">
                    Audio System
                  </span>
                  <p className="text-sm">
                    A Yamaha Bluetooth sound system sits in the family room
                    white cabinet. Press the Memory button for three seconds to
                    pair a device. Physical dials control audio zones for the
                    Sun Room, Family Room, Kitchen, Dining Room, and Living
                    Room.
                  </p>
                </div>
                <div>
                  <span className="block font-semibold text-slate-900">
                    Printer
                  </span>
                  <p className="text-sm">
                    The office printer connects via Wi-Fi at
                    g9ttjcm76@hpeprint.com.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Property Amenities */}
          <section>
            <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-2">
              <Home className="text-emerald-600 w-6 h-6" />
              <h2 className="text-2xl font-serif text-slate-900">
                Property Amenities
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-700 text-sm">
              <div className="space-y-6">
                <div>
                  <span className="block font-semibold text-slate-900 mb-1">
                    Climate Control
                  </span>
                  <p>
                    Thermostats feature heating and cooling switches with
                    directional arrows for temperature adjustment. Downstairs
                    units control the Living Room, Kitchen, and Sunroom.
                    Upstairs units control the Master bathroom, the Blue King
                    Bedroom, and the rear double bedroom.
                  </p>
                </div>
                <div>
                  <span className="block font-semibold text-slate-900 mb-1">
                    Hot Tub
                  </span>
                  <p>
                    The permanently heated hot tub sits left of the outdoor
                    patio. Towels sit in the basket right of the kitchen family
                    room French doors.
                  </p>
                </div>
                <div>
                  <span className="block font-semibold text-slate-900 mb-1">
                    Indoor Recreation
                  </span>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>
                      <strong>Board Games:</strong> Mah Jongg, Scrabble,
                      Backgammon, and Chess are in the living room. Additional
                      games are in the upstairs playroom.
                    </li>
                    <li>
                      <strong>Library:</strong> Books for all ages are located
                      in the upstairs library.
                    </li>
                    <li>
                      <strong>Basement:</strong> A ping pong table is available
                      for use.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="block font-semibold text-slate-900 mb-1">
                    Fireplaces
                  </span>
                  <p>
                    Functioning fireplaces sit in the living room and family
                    room. Wood rests on the left side of the patio. Open the
                    flue during use.
                  </p>
                </div>
                <div>
                  <span className="block font-semibold text-slate-900 mb-1">
                    Outdoor Gear & Amenities
                  </span>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>
                      <strong>Grill:</strong> A propane grill sits left of the
                      downstairs porch.
                    </li>
                    <li>
                      <strong>Bicycles:</strong> Bikes and helmets sit in the
                      garage for local transit.
                    </li>
                    <li>
                      <strong>Muck Boots:</strong> Boots sit in the nook across
                      from the pantry.
                    </li>
                    <li>
                      <strong>Pool:</strong> The pool is open from end of May to
                      early October and kept at 85 degrees.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Property Operations */}
          <section>
            <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-2">
              <Info className="text-indigo-600 w-6 h-6" />
              <h2 className="text-2xl font-serif text-slate-900">
                Property Operations
              </h2>
            </div>
            <ul className="space-y-4 text-slate-700 text-sm">
              <li className="flex gap-3">
                <Flame className="w-5 h-5 text-indigo-400 shrink-0" />
                <div>
                  <strong className="text-slate-900">Lighting & Doors:</strong>{" "}
                  Driveway lights activate upon vehicle entry and deactivate
                  after one minute. Patio light switches sit behind curtains in
                  the living room and family room. To open French doors; lift
                  the handle upward, turn the lock knob, and pull the handle
                  downward. Reverse to lock.
                </div>
              </li>
              <li className="flex gap-3">
                <ShieldAlert className="w-5 h-5 text-indigo-400 shrink-0" />
                <div>
                  <strong className="text-slate-900">Security & Garage:</strong>{" "}
                  An indoor alert system beeps when a vehicle enters the
                  driveway. Garage door controls sit on the mudroom desk.
                </div>
              </li>
              <li className="flex gap-3">
                <Trash2 className="w-5 h-5 text-indigo-400 shrink-0" />
                <div>
                  <strong className="text-slate-900">Waste Management:</strong>{" "}
                  Collections occur weekly on Tuesdays. Use the blue bin with
                  the black lid for garbage. Use the blue bin with the orange
                  lid for recycling. Bins belong at the top right of the
                  driveway entrance on the main road.
                </div>
              </li>
            </ul>
          </section>

          {/* Local Area Guide */}
          <section>
            <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-2">
              <MapPin className="text-amber-600 w-6 h-6" />
              <h2 className="text-2xl font-serif text-slate-900">
                Local Area Guide
              </h2>
            </div>

            <div className="space-y-6 text-slate-700">
              <div>
                <h3 className="font-semibold text-lg text-slate-900 flex items-center gap-2 mb-2">
                  <Utensils className="w-5 h-5" /> Dining
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="block font-medium text-slate-900">
                      Five Minute Drive
                    </span>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>
                        <a
                          href="https://champetrepineplains.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-700 hover:text-emerald-900 hover:underline"
                        >
                          Champetre
                        </a>{" "}
                        (French cuisine)
                      </li>
                      <li>
                        <a
                          href="https://stissinghouse.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-700 hover:text-emerald-900 hover:underline"
                        >
                          Stissing House
                        </a>{" "}
                        (American fare)
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/storybookcafepineplains/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-700 hover:text-emerald-900 hover:underline"
                        >
                          Storybook Cafe
                        </a>{" "}
                        (Sandwiches & breakfast)
                      </li>
                      <li>
                        <a
                          href="https://elguacamolepineplains.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-700 hover:text-emerald-900 hover:underline"
                        >
                          El Guacamole
                        </a>{" "}
                        (Mexican takeout)
                      </li>
                      <li>
                        <a
                          href="https://towerpizzapineplains.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-700 hover:text-emerald-900 hover:underline"
                        >
                          Tower Pizza
                        </a>{" "}
                        (Italian takeout)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <span className="block font-medium text-slate-900">
                      Extended Drive
                    </span>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>
                        <a
                          href="https://tenmiledistillery.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-700 hover:text-emerald-900 hover:underline"
                        >
                          Ten Mile Distillery
                        </a>{" "}
                        (Thai food)
                      </li>
                      <li>
                        <a
                          href="https://houseofstefas.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-700 hover:text-emerald-900 hover:underline"
                        >
                          House of Stefas
                        </a>{" "}
                        (Greek food in Millbrook)
                      </li>
                      <li>
                        <a
                          href="https://troutbeck.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-700 hover:text-emerald-900 hover:underline"
                        >
                          Troutbeck
                        </a>{" "}
                        (Farm dining in Amenia)
                      </li>
                      <li>
                        <a
                          href="https://beekmandelamaterinn.com/dining/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-700 hover:text-emerald-900 hover:underline"
                        >
                          The Tavern at Beekman Arms
                        </a>{" "}
                        (American food in Rhinebeck)
                      </li>
                      <li>
                        <a
                          href="https://oakhurstdiner.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-700 hover:text-emerald-900 hover:underline"
                        >
                          Oakhurst Diner
                        </a>{" "}
                        (Lunch in Millerton)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 flex items-center gap-2 mb-2">
                    <ShoppingBag className="w-5 h-5" /> Groceries & Retail
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>Supermarket:</strong> Freshtown in Amenia sits 20
                      minutes away.
                    </li>
                    <li>
                      <strong>Prepared Foods:</strong>{" "}
                      <a
                        href="https://thefarmerswife.us"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:text-emerald-900 hover:underline"
                      >
                        The Farmer's Wife
                      </a>{" "}
                      offers takeout.
                    </li>
                    <li>
                      <strong>Local Farms:</strong>{" "}
                      <a
                        href="https://chaseholmfarm.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:text-emerald-900 hover:underline"
                      >
                        Chaseholm Farm
                      </a>
                      ,{" "}
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Sugar+Hill+Farms+Pine+Plains+NY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:text-emerald-900 hover:underline"
                      >
                        Sugar Hill Farms
                      </a>
                      , and{" "}
                      <a
                        href="https://www.bigrockmarketny.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:text-emerald-900 hover:underline"
                      >
                        Big Rock Community Farms Market
                      </a>{" "}
                      provide small scale provisions.
                    </li>
                    <li>
                      <strong>Specialty Goods:</strong> Pine Plains Fine Wines
                      delivers upon request. Hammertown sells local home goods.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 flex items-center gap-2 mb-2">
                    <TreePine className="w-5 h-5" /> Local Hikes
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Thompson+Pond+Preserve+Pine+Plains+NY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:text-emerald-900 hover:underline"
                      >
                        Thompson Pond
                      </a>
                      : Offers flat terrain.
                    </li>
                    <li>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Stissing+Mountain+Fire+Tower+Pine+Plains+NY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:text-emerald-900 hover:underline"
                      >
                        Stissing Mountain
                      </a>
                      : Features steep elevation.
                    </li>
                    <li>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Poets+Walk+Park+Red+Hook+NY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:text-emerald-900 hover:underline"
                      >
                        Poet's Walk Park
                      </a>
                      : Provides peaceful trails.
                    </li>
                    <li>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Wethersfield+Estate+and+Garden+Amenia+NY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:text-emerald-900 hover:underline"
                      >
                        Wethersfield Estate
                      </a>
                      : Features extensive gardens.
                    </li>
                    <li>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Bash+Bish+Falls+State+Park"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:text-emerald-900 hover:underline"
                      >
                        Bash Bish Fall
                      </a>
                      : Offers waterfall access 20 minutes away.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Regional Operations */}
          <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <Car className="text-slate-600 w-6 h-6" />
              <h2 className="text-xl font-serif text-slate-900">
                Upstate Eccentricities
              </h2>
            </div>
            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <strong className="text-slate-900 block">
                  Traffic Enforcement
                </strong>
                <p>
                  Local police strictly enforce speed limits. Drivers must
                  reduce speed to 35 mph within Pine Plains and other local
                  municipalities. Speed traps are common on the Taconic State
                  Parkway.
                </p>
              </div>
              <div>
                <strong className="text-slate-900 block">Noise Notice</strong>
                <p>
                  A neighboring farm operates a below grade shooting range.
                  Gunfire is audible on late Saturday afternoons but poses no
                  physical hazard.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
