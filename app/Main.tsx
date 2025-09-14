import Link from '@/components/Link'
import Image from '@/components/Image'

export default function Home({ posts, projects }) {
  return (
    <>
      {/* Full-width Hero Section with Background Image */}
      <div className="hero-section relative min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/static/images/landing/blockchain-network.png"
            alt="Blockchain Network Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Background Overlay for Content Readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/70 bg-stone-100/60 p-8 backdrop-blur-sm"></div>

        {/* Hero Content */}
        <div className="relative z-20 flex min-h-screen items-center justify-center">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
              <div className="lg:flex-1">
                <h1 className="mb-4 text-4xl font-bold text-stone-100 lg:text-6xl">
                  Road to Web3, v.india
                </h1>
                <p className="mb-6 text-lg leading-relaxed text-gray-100 lg:text-xl">
                  Full-stack blockchain engineer with a unique journey from traditional web development to decentralised systems architecture.
                  Over 4+ years, I've evolved from building frontend interfaces to architecting blockchain solutions
                  across Ethereum, Bitcoin L2s, and Polkadot ecosystems. Currently pioneering Web3 infrastructure for India's digital economy
                  through innovative agent-based systems and decentralised identity solutions.
                </p>
                <div className="rounded-lg bg-brand-card/30 p-6 backdrop-blur-sm">
                  <p className="text-white">
                    <strong>Core Philosophy:</strong> Inspired by Pandit Deendayal's Integral Humanism, I'm committed to building a decentralised,
                    swadeshi economy that empowers every Indian citizen to express their unique Chiti through sovereign digital
                    infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of Content with Background */}
      <div className="bg-brand-bg">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Professional Evolution */}
        <div className="mb-12 rounded-2xl p-8 shadow-lg bg-brand-card">
          <div className="mb-6 flex items-center">
            <span className="text-2xl">📈</span>
            <h2 className="ml-3 text-3xl font-bold text-brand-text">
              Professional Evolution
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Phase 1 */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-brand-text">
                  Phase 1: Foundation in Enterprise Web Development
                </h3>
                <span className="rounded-full px-3 py-1 text-sm font-medium bg-brand-accent text-brand-card">
                  1
                </span>
              </div>
              <p className="text-sm text-brand-text">Jul 2020 - Nov 2022</p>
              <p className="font-medium text-brand-text">
                Bajaj Finserv Health | Software Engineer → Senior Software Engineer
              </p>
              <p className="text-sm leading-relaxed text-brand-text">
                Started my journey building user-facing applications that served millions in India's healthcare sector:
              </p>
              <ul className="space-y-2 text-sm text-brand-text">
                <li><strong>Frontend Mastery:</strong> Developed and scaled ReactJS web applications and React Native mobile apps, ensuring seamless healthcare access across devices</li>
                <li><strong>System Architecture:</strong> In my final year, I was architecting integration solutions for the appointments division, connecting Bajaj Finserv Health interface (UHI) protocols</li>
                <li><strong>Scale & Impact:</strong> Gained understanding of handling high-volume healthcare transactions, learning the importance of reliability in user-centric design</li>
              </ul>
              <div className="rounded-lg p-3 bg-brand-bg">
                <p className="text-xs font-medium text-brand-text">
                  Key Insight: This period taught me how centralised systems work at scale - knowledge that would prove invaluable when designing decentralised alternatives.
                </p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-brand-text">
                  Phase 2: The Blockchain Awakening
                </h3>
                <span className="rounded-full px-3 py-1 text-sm font-medium bg-brand-accent text-brand-card">
                  2
                </span>
              </div>
              <p className="text-sm text-brand-text">Apr 2022 - Dec 2023</p>
              <p className="font-medium text-brand-text">
                Parallel Learning → PRXNTS Labs → Gnosis
              </p>
              <p className="text-sm leading-relaxed text-brand-text">
                While completing my tenure at Bajaj, I discovered blockchain's transformative potential and began demonstrating blockchain's ability to create immutable digital systems:
              </p>
              <ul className="space-y-2 text-sm text-brand-text">
                <li><strong>Self-Directed Learning:</strong> Participated in Ethereum hackathons, building proof-of-concepts that demonstrated blockchain's ability to create immutable digital systems</li>
                <li><strong>First Blockchain Role (PRXNTS Labs, Part-time):</strong> Applied emerging knowledge while maintaining full-time responsibilities, showcasing commitment to the technology</li>
                <li><strong>Full Backend Engineering (Gnosis):</strong> Developed smart contracts in Solidity for DeFi and governance applications, built decentralised data infrastructure using The Graph Protocol, created seamless Web3 UX experiences</li>
              </ul>
              <div className="rounded-lg p-3 bg-green-400">
                <p className="text-xs font-medium text-brand-text">
                  Transformation Moment: Witnessed firsthand how decentralised systems could eliminate intermediaries and create trust through code rather than institutions.
                </p>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-brand-text">
                  Phase 3: Multi-Chain Expertise & Systems Design
                </h3>
                <span className="rounded-full px-3 py-1 text-sm font-medium bg-brand-accent text-brand-card">
                  3
                </span>
              </div>
              <p className="text-sm text-brand-text">Mar 2024 - Present</p>
              <p className="font-medium text-brand-text">
                LayerEdge → Independent Innovation
              </p>
              <p className="text-sm leading-relaxed text-brand-text">
                Expanded beyond Ethereum to become a multi-chain architect:
              </p>
              <ul className="space-y-2 text-sm text-brand-text">
                <li><strong>LayerEdge Contributions:</strong> Built high-performance Rust backend systems, developed NextJS frontends for complex Web3 applications, gained expertise across Layer 2 solutions</li>
                <li><strong>Current Innovation - Chiti-Agent:</strong> Architecting agent-based systems using Polkadot SDK, building DeSci-agent for ONDC integration, creating foundational infrastructure for India's decentralised digital economy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Unique Value Proposition */}
        <div className="mb-12 rounded-2xl p-8 shadow-lg bg-brand-card">
          <div className="mb-8 flex items-center">
            <span className="text-2xl">💡</span>
            <h2 className="ml-3 text-3xl font-bold text-brand-text">
              Unique Value Proposition
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-lg p-6 bg-brand-bg">
              <h3 className="mb-4 text-xl font-bold text-brand-text">The Bridge Builder</h3>
              <p className="mb-4 text-sm leading-relaxed text-brand-text">
                My journey from Web2 to Web3 isn't just a career transition - it's a strategic advantage. I understand:
              </p>
              <ul className="space-y-2 text-sm text-brand-text">
                <li><strong>Where traditional systems excel</strong> and where they create bottlenecks</li>
                <li><strong>How to migrate users</strong> from familiar interfaces to blockchain-powered backends</li>
                <li><strong>The importance of UX</strong> in making decentralised systems accessible to billions</li>
              </ul>
            </div>

            <div className="rounded-lg p-6 bg-brand-bg">
              <h3 className="mb-4 text-xl font-bold text-brand-text">Technical Depth Meets System Thinking</h3>
              <ul className="space-y-2 text-sm text-brand-text">
                <li><strong>Frontend to Protocol:</strong> Can build from user interface to consensus mechanism</li>
                <li><strong>Multi-chain Fluency:</strong> From EVM chains to Substrate, from Solidity to Rust</li>
                <li><strong>Infrastructure Architect:</strong> Experience with both centralised (AWS, PostgreSQL) and decentralised (IPFS, Libp2p) systems</li>
              </ul>
            </div>

            <div className="rounded-lg p-6 bg-brand-bg">
              <h3 className="mb-4 text-xl font-bold text-brand-text">Vision for India's Web3 Future</h3>
              <p className="mb-4 text-sm leading-relaxed text-brand-text">
                Building technology that serves Bharat's unique needs:
              </p>
              <ul className="space-y-2 text-sm text-brand-text">
                <li><strong>Financial Sovereignty:</strong> Reimagining money and value exchange through DLT</li>
                <li><strong>Digital Identity:</strong> Creating self-sovereign identity systems respecting individual agency</li>
                <li><strong>Economic Decentralisation:</strong> Enabling peer-to-peer commerce without gatekeepers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Arsenal */}
        <div className="mb-12 rounded-2xl p-8 shadow-lg bg-brand-card">
          <div className="mb-8 flex items-center">
            <span className="text-2xl">🛠️</span>
            <h2 className="ml-3 text-3xl font-bold text-brand-text">
              Technical Arsenal
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Languages & Core Skills */}
            <div>
              <h3 className="mb-4 text-lg font-bold text-brand-text">Languages & Core Skills</h3>
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="relative h-48 overflow-hidden rounded-xl">
                  <Image
                    src="/static/images/landing/coding-landscape.png"
                    alt="Systems Programming"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 overflow-hidden rounded-xl">
                  <Image
                    src="/static/images/landing/blockchain-network.png"
                    alt="Blockchain Ecosystems"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-brand-text">Systems Programming</h4>
                  <p className="text-sm text-brand-text">
                    <span className="text-brand-accent">Rust (Advanced)</span> - Building performant, secure backend systems
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-text">Smart Contracts</h4>
                  <p className="text-sm text-brand-text">
                    <span className="text-brand-accent">Solidity (Intermediate)</span> - DeFi, governance, and utility contracts
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-text">Full Stack</h4>
                  <p className="text-sm text-brand-text">
                    <span className="text-brand-accent">TypeScript (Advanced)</span> - End-to-end application development
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-text">Version Control</h4>
                  <p className="text-sm text-brand-text">
                    <span className="text-brand-accent">Git (Advanced)</span> - Collaborative development and CI/CD
                  </p>
                </div>
              </div>
            </div>

            {/* Blockchain Ecosystems */}
            <div>
              <h3 className="mb-4 text-lg font-bold text-brand-text">Blockchain Ecosystems</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-lg">⟡</span>
                  <div className="ml-3">
                    <h4 className="font-semibold text-brand-text">Ethereum & L2s</h4>
                    <p className="text-sm text-brand-text">Optimism, Arbitrum, Base</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-lg">🗄️</span>
                  <div className="ml-3">
                    <h4 className="font-semibold text-brand-text">Data Availability</h4>
                    <p className="text-sm text-brand-text">Celestia, Avail</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-lg">🔗</span>
                  <div className="ml-3">
                    <h4 className="font-semibold text-brand-text">Alternative L1s</h4>
                    <p className="text-sm text-brand-text">Cosmos, Polkadot</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-lg">₿</span>
                  <div className="ml-3">
                    <h4 className="font-semibold text-brand-text">Bitcoin L2s</h4>
                    <p className="text-sm text-brand-text">Arbitrum, Lightning Network</p>
                  </div>
                </div>
              </div>

              <h3 className="mb-4 mt-8 text-lg font-bold text-brand-text">Infrastructure & Architecture</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="rounded-lg p-4 bg-brand-bg">
                  <span className="text-lg">💬</span>
                  <h4 className="mt-2 text-sm font-semibold text-brand-text">Decentralised</h4>
                  <p className="text-xs text-brand-text">IPFS, Libp2p, The Graph, WebSocket Management</p>
                </div>
                <div className="rounded-lg p-4 bg-brand-bg">
                  <span className="text-lg">☁️</span>
                  <h4 className="mt-2 text-sm font-semibold text-brand-text">Traditional</h4>
                  <p className="text-xs text-brand-text">AWS, DigitalOcean, PostgreSQL, Redis</p>
                </div>
                <div className="rounded-lg p-4 bg-brand-bg">
                  <span className="text-lg">🔄</span>
                  <h4 className="mt-2 text-sm font-semibold text-brand-text">Hybrid</h4>
                  <p className="text-xs text-brand-text">Event-Driven Architecture, Microservices, API Gateway patterns</p>
                </div>
              </div>

              <h3 className="mb-4 mt-8 text-lg font-bold text-brand-text">Frameworks & Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg p-4 bg-brand-bg">
                  <h4 className="mb-2 text-sm font-semibold text-brand-text">Blockchain</h4>
                  <p className="text-xs text-brand-text">Polkadot SDK, Hardhat, Foundry</p>
                </div>
                <div className="rounded-lg p-4 bg-brand-bg">
                  <h4 className="mb-2 text-sm font-semibold text-brand-text">Backend</h4>
                  <p className="text-xs text-brand-text">Actix-Web (Rust), Express/NestJS (Node)</p>
                </div>
                <div className="rounded-lg p-4 bg-brand-bg">
                  <h4 className="mb-2 text-sm font-semibold text-brand-text">Frontend</h4>
                  <p className="text-xs text-brand-text">ReactJS, NextJS, React Native, Tauri</p>
                </div>
                <div className="rounded-lg p-4 bg-brand-bg">
                  <h4 className="mb-2 text-sm font-semibold text-brand-text">Emerging</h4>
                  <p className="text-xs text-brand-text">Iron, Earthstar (distributed systems)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Focus & Future Direction */}
        <div className="mb-12 rounded-2xl p-8 shadow-lg bg-brand-card">
          <div className="mb-8 flex items-center">
            <span className="text-2xl">🎯</span>
            <h2 className="ml-3 text-3xl font-bold text-brand-text">
              Current Focus & Future Direction
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-xl font-bold text-brand-text">Immediate Goals</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="mr-4 rounded-full px-3 py-1 text-sm font-medium bg-brand-accent text-brand-card">
                    01
                  </span>
                  <div>
                    <h4 className="font-semibold text-brand-text">Deploying production-ready Chiti-Agent</h4>
                    <p className="text-sm text-brand-text">Building for ONDC ecosystem integration</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="mr-4 rounded-full px-3 py-1 text-sm font-medium bg-brand-accent text-brand-card">
                    02
                  </span>
                  <div>
                    <h4 className="font-semibold text-brand-text">Building Web-of-Trust infrastructure</h4>
                    <p className="text-sm text-brand-text">Targeting 1 million+ users</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="mr-4 rounded-full px-3 py-1 text-sm font-medium bg-brand-accent text-brand-card">
                    03
                  </span>
                  <div>
                    <h4 className="font-semibold text-brand-text">Contributing to India's CBDC initiatives</h4>
                    <p className="text-sm text-brand-text">Supporting digital rupee development</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-xl lg:h-full">
              <Image
                src="/static/images/landing/web3-architecture.png"
                alt="Web3 Architecture Vision"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="mb-6 text-xl font-bold text-brand-text">Long-term Vision</h3>
            <p className="mb-6 text-lg leading-relaxed text-brand-text">
              Creating the technological foundation for a truly decentralised Bharat where:
            </p>

            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              <div className="rounded-lg p-4 text-center bg-brand-bg">
                <span className="text-2xl">🛡️</span>
                <h4 className="mt-2 font-semibold text-brand-text">Digital Sovereignty</h4>
                <p className="mt-1 text-sm text-brand-text">Every citizen owns their digital identity and data</p>
              </div>
              <div className="rounded-lg p-4 text-center bg-brand-bg">
                <span className="text-2xl">💰</span>
                <h4 className="mt-2 font-semibold text-brand-text">Financial Freedom</h4>
                <p className="mt-1 text-sm text-brand-text">Financial services accessible without intermediaries</p>
              </div>
              <div className="rounded-lg p-4 text-center bg-brand-bg">
                <span className="text-2xl">⚖️</span>
                <h4 className="mt-2 font-semibold text-brand-text">Technology for Dharma</h4>
                <p className="mt-1 text-sm text-brand-text">Technology serves dharma, not just profit</p>
              </div>
              <div className="rounded-lg p-4 text-center bg-brand-bg">
                <span className="text-2xl">🏘️</span>
                <h4 className="mt-2 font-semibold text-brand-text">Local Economies</h4>
                <p className="mt-1 text-sm text-brand-text">Communities thrive through peer-to-peer digital infrastructure</p>
              </div>
            </div>
          </div>
        </div>

        {/* Let's Build Together */}
        <div className="mb-12 rounded-2xl p-8 shadow-lg bg-brand-card">
          <div className="mb-8 flex items-center">
            <span className="text-2xl">🤝</span>
            <h2 className="ml-3 text-3xl font-bold text-brand-text">
              Let's Build Together
            </h2>
          </div>

          <p className="mb-8 text-lg leading-relaxed text-brand-text">
            I'm seeking opportunities to collaborate with teams and organisations that share the vision of a decentralised, equitable digital
            future. Whether you're building DeFi protocols, digital identity systems, or reimagining commerce through blockchain, I bring:
          </p>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg p-6 text-center bg-brand-bg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full mx-auto bg-brand-accent">
                  <span className="text-white">⭐</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-brand-text">Technical Excellence</h3>
                <p className="text-sm text-brand-text">Across the full stack</p>
              </div>
              <div className="rounded-lg p-6 text-center bg-brand-bg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full mx-auto bg-brand-accent">
                  <span className="text-white">🧠</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-brand-text">Deep Understanding</h3>
                <p className="text-sm text-brand-text">Of both Web2 and Web3 paradigms</p>
              </div>
              <div className="rounded-lg p-6 text-center bg-brand-bg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full mx-auto bg-brand-accent">
                  <span className="text-white">👤</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-brand-text">Commitment</h3>
                <p className="text-sm text-brand-text">To building for India and emerging markets</p>
              </div>
              <div className="rounded-lg p-6 text-center bg-brand-bg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full mx-auto bg-brand-accent">
                  <span className="text-white">🎯</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-brand-text">Systems Thinking</h3>
                <p className="text-sm text-brand-text">Considering technology's societal impact</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/static/images/landing/future-vision.png"
                alt="Future Vision"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-8 rounded-lg p-6 bg-brand-accent">
            <p className="text-center text-white">
              "The future of India lies not in copying Western models, but in building swadeshi solutions that honour our civilisational
              values whilst embracing technological progress. Blockchain gives us the tools to build this future - let's build it together."
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="rounded-2xl p-8 shadow-lg bg-brand-card">
          <h2 className="mb-8 text-3xl font-bold text-brand-text">
            Contact Information
          </h2>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-lg border-2 p-6 border-brand-accent">
              <h3 className="mb-4 text-lg font-bold text-brand-text">Email</h3>
              <p className="mb-4 text-lg text-brand-text">nelliairesh@gmail.com</p>
            </div>
            <div className="rounded-lg border-2 p-6 border-brand-accent">
              <h3 className="mb-4 text-lg font-bold text-brand-text">GitHub</h3>
              <p className="mb-4 text-lg underline text-brand-text">https://github.com/AireshBhat</p>
            </div>
            <div className="rounded-lg border-2 p-6 border-brand-accent">
              <h3 className="mb-4 text-lg font-bold text-brand-text">Current Location</h3>
              <p className="mb-4 text-lg text-brand-text">Bengaluru, India</p>
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="mailto:nelliairesh@gmail.com"
              className="rounded-lg px-6 py-3 font-medium text-white transition-colors hover:opacity-90 bg-brand-accent"
            >
              Get in Touch
            </a>
            <a
              href="https://github.com/AireshBhat"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 px-6 py-3 font-medium transition-colors hover:bg-gray-50 border-brand-accent text-brand-text"
            >
              View GitHub
            </a>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}