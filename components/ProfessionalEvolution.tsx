import React from 'react'

interface PhaseData {
  number: number
  title: string
  period: string
  company: string
  description: string
  achievements: string[]
  insight?: string
  isTransformationMoment?: boolean
}

const phases: PhaseData[] = [
  {
    number: 1,
    title: 'Foundation in Enterprise Web Development',
    period: 'Jul 2020 - Nov 2022',
    company: 'Bajaj Finserv Health | Software Engineer → Software Development Engineer',
    description:
      "Started my journey building user-facing applications that served millions in India's healthcare sector:",
    achievements: [
      'Frontend Mastery: Developed and scaled ReactJS web applications and React Native mobile apps, ensuring seamless healthcare access across devices',
      'System Architecture: By my final year, I was architecting integration solutions for the appointments division, implementing Unified Health Interface (UHI) protocols',
      'Scale & Impact: Worked on systems handling high-volume healthcare transactions, learning the importance of reliability and user-centric design',
    ],
    insight:
      'Key Insight: This period taught me how centralised systems work at scale - knowledge that would prove invaluable when designing decentralised alternatives.',
  },
  {
    number: 2,
    title: 'The Blockchain Awakening',
    period: 'Apr 2022 - Dec 2023',
    company: 'Parallel Learning → PRNTS Labs → Gnosis',
    description:
      "While completing my tenure at Bajaj, I discovered blockchain's transformative potential:",
    achievements: [
      "Self-Directed Learning: Participated in Ethereum hackathons, building proof-of-concepts that demonstrated blockchain's ability to create immutable, transparent systems",
      'First Blockchain Role (PRNTS Labs, Part-time): Applied emerging knowledge whilst maintaining full-time responsibilities, showcasing commitment to the technology',
      'Full Stack Blockchain Engineering (Gnosis): Developed smart contracts in Solidity for DeFi and governance applications, built decentralised data infrastructure using The Graph Protocol, created seamless Web3 frontend experiences',
    ],
    insight:
      'Transformation Moment: Witnessed firsthand how decentralised systems could eliminate intermediaries and create trust through code rather than institutions.',
    isTransformationMoment: true,
  },
  {
    number: 3,
    title: 'Multi-Chain Expertise & Systems Design',
    period: 'Mar 2024 - Present',
    company: 'LayerEdge → Independent Innovation',
    description: 'Expanded beyond Ethereum to become a multi-chain architect:',
    achievements: [
      'LayerEdge Contributions: Built high-performance Rust backend systems, developed NextJS frontends for complex Web3 applications, gained expertise across Layer 2 solutions',
      "Current Innovation - Chiti-Agent: Architecting agent-based systems using Polkadot SDK, building beckn-agent for ONDC integration, creating foundational infrastructure for India's decentralised digital economy",
    ],
  },
]

// Timeline item component matching reference design
const TimelineItem: React.FC<{ phase: PhaseData; isLast?: boolean }> = ({ phase, isLast }) => (
  <div className="relative flex items-start">
    {/* Timeline Line */}
    {!isLast && <div className="absolute top-12 left-6 z-0 h-full w-px bg-gray-300" />}

    {/* Number Circle */}
    <div className="relative z-10 mr-6 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-700 text-lg font-bold text-white">
      {phase.number}
    </div>

    {/* Content */}
    <div className="flex-1 pb-12">
      {/* Phase Title */}
      <h3 className="mb-2 text-xl font-bold text-gray-900">{phase.title}</h3>

      {/* Period */}
      <p className="mb-3 inline-block rounded-md bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-800">
        {phase.period}
      </p>

      {/* Company */}
      <p className="mb-3 text-sm font-semibold text-gray-800">{phase.company}</p>

      {/* Description */}
      <p className="mb-4 leading-relaxed text-gray-700">{phase.description}</p>

      {/* Achievements */}
      <ul className="mb-6 space-y-2">
        {phase.achievements.map((achievement, index) => {
          const [title, ...rest] = achievement.split(': ')
          const description = rest.join(': ')

          return (
            <li key={index} className="flex items-start">
              <span className="mt-1 mr-3 text-gray-400">•</span>
              <div className="text-sm leading-relaxed text-gray-700">
                <strong>{title}:</strong> {description}
              </div>
            </li>
          )
        })}
      </ul>

      {/* Key Insight */}
      {phase.insight && (
        <div
          className={`rounded-lg border-l-4 p-4 ${
            phase.isTransformationMoment
              ? 'border-green-400 bg-green-50'
              : 'border-yellow-400 bg-yellow-50'
          }`}
        >
          <div className="flex items-start">
            <span className="mt-1 mr-3">{phase.isTransformationMoment ? '✅' : '📝'}</span>
            <div>
              <p className="text-sm leading-relaxed text-gray-700 italic">{phase.insight}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
)

const ProfessionalEvolution: React.FC = () => {
  return (
    <div className="mb-12">
      {/* Header */}
      <div className="mb-12 flex items-center">
        <span className="text-3xl">📈</span>
        <h2 className="text-brand-text ml-4 text-4xl font-bold">Professional Evolution</h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {phases.map((phase, index) => (
          <TimelineItem key={phase.number} phase={phase} isLast={index === phases.length - 1} />
        ))}
      </div>
    </div>
  )
}

export default ProfessionalEvolution
