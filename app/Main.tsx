'use client'

import Link from '@/components/Link'
import Image from '@/components/Image'
import ProfessionalEvolution from '@/components/ProfessionalEvolution'
import UniqueValueProposition from '@/components/UniqueValueProposition'
import TechnicalArsenal from '@/components/TechnicalArsenal'

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
        <div className="absolute inset-0 z-10 bg-stone-100/30 bg-gradient-to-b from-black/60 via-black/40 to-black/70 p-8 backdrop-blur-sm"></div>

        {/* Hero Content */}
        <div className="relative z-20 flex min-h-screen items-center justify-center">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
              <div className="lg:flex-1">
                <h1 className="mb-4 text-4xl font-bold text-stone-100 lg:text-6xl">
                  Road to Web3, v.india
                </h1>
                <p className="mb-6 text-lg leading-relaxed text-gray-100 lg:text-xl">
                  Full-stack blockchain engineer with a unique journey from traditional web
                  development to decentralised systems architecture. Over 4+ years, I've evolved
                  from building frontend interfaces to architecting blockchain solutions across
                  Ethereum, Bitcoin L2s, and Polkadot ecosystems. Currently pioneering Web3
                  infrastructure for India's digital economy through innovative agent-based systems
                  and decentralised identity solutions.
                </p>
                <div className="bg-brand-card/30 rounded-lg p-6 backdrop-blur-sm">
                  <p className="text-white">
                    <strong>Core Philosophy:</strong> Inspired by Pandit Deendayal's Integral
                    Humanism, I'm committed to building a decentralised, swadeshi economy that
                    empowers every Indian citizen to express their unique{' '}
                    <a href="https://www.chiti.network" className="text-brand-accent">
                      Chiti
                    </a>{' '}
                    through sovereign digital infrastructure.
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
          <ProfessionalEvolution />

          <UniqueValueProposition />

          <TechnicalArsenal />

          {/* Current Focus & Future Direction */}
          <div className="bg-brand-card mb-12 rounded-2xl p-8 shadow-lg">
            <div className="mb-8 flex items-center">
              <span className="text-2xl">🎯</span>
              <h2 className="text-brand-text ml-3 text-3xl font-bold">
                Current Focus & Future Direction
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-brand-text mb-6 text-xl font-bold">Immediate Goals</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-accent text-brand-card flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl">
                      <span className="text-sm font-bold">01</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-brand-text mb-2 font-semibold">
                        Deploying production-ready Chiti-Agent
                      </h4>
                      <p className="text-brand-text text-sm leading-relaxed">
                        Building for ONDC ecosystem integration
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-accent text-brand-card flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl">
                      <span className="text-sm font-bold">02</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-brand-text mb-2 font-semibold">
                        Building Web-of-Trust infrastructure
                      </h4>
                      <p className="text-brand-text text-sm leading-relaxed">
                        Targeting 1 million+ users
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-accent text-brand-card flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl">
                      <span className="text-sm font-bold">03</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-brand-text mb-2 font-semibold">
                        Contributing to India's CBDC initiatives
                      </h4>
                      <p className="text-brand-text text-sm leading-relaxed">
                        Supporting digital rupee development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div className="relative h-48 overflow-hidden rounded-xl">
                  <Image
                    src="/static/images/landing/future-vision.png"
                    alt="Web3 Architecture Vision"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-brand-text mb-6 text-xl font-bold">Long-term Vision</h3>
                  <p className="text-brand-text mb-6 text-sm leading-relaxed">
                    Creating the technological foundation for a truly decentralised Bharat where:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-brand-bg flex items-center gap-4 rounded-lg p-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                        <span className="text-xl">👁️</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-brand-text font-semibold">Digital Sovereignty</h4>
                        <p className="text-brand-text text-sm">
                          Every citizen owns their digital identity and data
                        </p>
                      </div>
                    </div>
                    <div className="bg-brand-bg flex items-center gap-4 rounded-lg p-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                        <span className="text-xl">💰</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-brand-text font-semibold">Financial Freedom</h4>
                        <p className="text-brand-text text-sm">
                          Financial services accessible without intermediaries
                        </p>
                      </div>
                    </div>
                    <div className="bg-brand-bg flex items-center gap-4 rounded-lg p-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                        <span className="text-xl">🔄</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-brand-text font-semibold">Local Economies</h4>
                        <p className="text-brand-text text-sm">
                          Communities thrive through peer-to-peer digital infrastructure
                        </p>
                      </div>
                    </div>
                    <div className="bg-brand-bg flex items-center gap-4 rounded-lg p-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                        <span className="text-xl">☸️</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-brand-text font-semibold">Technology for Dharma</h4>
                        <p className="text-brand-text text-sm">
                          Technology serves dharma, not just profit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Let's Build Together */}
          <div className="bg-brand-card mb-12 rounded-2xl p-8 shadow-lg">
            <div className="mb-8 flex items-center">
              <span className="text-2xl">🤝</span>
              <h2 className="text-brand-text ml-3 text-3xl font-bold">Let's Build Together</h2>
            </div>

            <p className="text-brand-text mb-8 text-lg leading-relaxed">
              I'm seeking opportunities to collaborate with teams and organisations that share the
              vision of a decentralised, equitable digital future. Whether you're building DeFi
              protocols, digital identity systems, or reimagining commerce through blockchain, I
              bring:
            </p>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* <div className="grid grid-cols-2 gap-4"> */}
              <div className="bg-brand-bg rounded-lg p-6 text-center">
                <div className="bg-brand-accent mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                  <span className="text-white">⭐</span>
                </div>
                <h3 className="text-brand-text mb-2 text-lg font-bold">Technical Excellence</h3>
                <p className="text-brand-text text-sm">Across the full stack</p>
              </div>
              <div className="bg-brand-bg rounded-lg p-6 text-center">
                <div className="bg-brand-accent mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                  <span className="text-white">🧠</span>
                </div>
                <h3 className="text-brand-text mb-2 text-lg font-bold">Deep Understanding</h3>
                <p className="text-brand-text text-sm">Of both Web2 and Web3 paradigms</p>
              </div>
              <div className="bg-brand-bg rounded-lg p-6 text-center">
                <div className="bg-brand-accent mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                  <span className="text-white">👤</span>
                </div>
                <h3 className="text-brand-text mb-2 text-lg font-bold">Commitment</h3>
                <p className="text-brand-text text-sm">
                  To building for India and emerging markets
                </p>
              </div>
              <div className="bg-brand-bg rounded-lg p-6 text-center">
                <div className="bg-brand-accent mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                  <span className="text-white">🎯</span>
                </div>
                <h3 className="text-brand-text mb-2 text-lg font-bold">Systems Thinking</h3>
                <p className="text-brand-text text-sm">Considering technology's societal impact</p>
              </div>
              {/* </div> */}
              {/* <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/static/images/landing/future-vision.png"
                alt="Future Vision"
                fill
                className="object-cover"
              />
            </div> */}
            </div>

            <div className="bg-brand-accent mt-8 rounded-lg p-6">
              <p className="text-center text-white">
                "The future of India lies not in copying Western models, but in building swadeshi
                solutions that honour our civilisational values whilst embracing technological
                progress. Blockchain gives us the tools to build this future - let's build it
                together."
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-brand-card rounded-2xl p-8 shadow-lg">
            <h2 className="text-brand-text mb-8 text-3xl font-bold">Contact Information</h2>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="border-brand-accent rounded-lg border-2 p-6">
                <h3 className="text-brand-text mb-4 text-lg font-bold">Email</h3>
                <p className="text-brand-text mb-4 text-lg">nelliairesh@gmail.com</p>
              </div>
              <div className="border-brand-accent rounded-lg border-2 p-6">
                <h3 className="text-brand-text mb-4 text-lg font-bold">GitHub</h3>
                <p className="text-brand-text mb-4 text-lg underline">
                  https://github.com/AireshBhat
                </p>
              </div>
              <div className="border-brand-accent rounded-lg border-2 p-6">
                <h3 className="text-brand-text mb-4 text-lg font-bold">Current Location</h3>
                <p className="text-brand-text mb-4 text-lg">Bengaluru, India</p>
              </div>
            </div>

            <div className="mt-8 flex justify-center space-x-4">
              <a
                href="mailto:nelliairesh@gmail.com"
                className="bg-brand-accent rounded-lg px-6 py-3 font-medium text-white transition-colors hover:opacity-90"
              >
                Get in Touch
              </a>
              <a
                href="https://github.com/AireshBhat"
                target="_blank"
                rel="noopener noreferrer"
                className="border-brand-accent text-brand-text rounded-lg border-2 px-6 py-3 font-medium transition-colors hover:bg-gray-50"
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
