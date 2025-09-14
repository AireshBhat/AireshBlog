import React from 'react'

const UniqueValueProposition: React.FC = () => {
  return (
    <div className="mb-12">
      {/* Header */}
      <div className="mb-8 flex items-center">
        <span className="text-3xl">💡</span>
        <h2 className="ml-4 text-4xl font-bold text-gray-900">Unique Value Proposition</h2>
      </div>

      {/* Three-column grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Card 1: The Bridge Builder */}
        <div className="bg-brand-card/30 rounded-lg border border-gray-200 p-6">
          <h3 className="mb-4 text-xl font-bold text-gray-900">The Bridge Builder</h3>
          <p className="mb-4 leading-relaxed text-gray-700">
            My journey from Web2 to Web3 isn't just a career transition - it's a strategic
            advantage. I understand:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mt-1 mr-2">•</span>
              <div>
                <strong>Where traditional systems excel</strong> and where they create bottlenecks
              </div>
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2">•</span>
              <div>
                <strong>How to migrate users</strong> from familiar interfaces to blockchain-powered
                backends
              </div>
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2">•</span>
              <div>
                <strong>The importance of UX</strong> in making decentralised systems accessible to
                billions
              </div>
            </li>
          </ul>
        </div>

        {/* Card 2: Technical Depth Meets System Thinking */}
        <div className="bg-brand-card/30 rounded-lg border border-gray-200 p-6">
          <h3 className="mb-4 text-xl font-bold text-gray-900">
            Technical Depth Meets System Thinking
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mt-1 mr-2">•</span>
              <div>
                <strong>Frontend to Protocol</strong>: Can build from user interface to consensus
                mechanism
              </div>
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2">•</span>
              <div>
                <strong>Multi-chain Fluency</strong>: From EVM chains to Substrate, from Solidity to
                Rust
              </div>
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2">•</span>
              <div>
                <strong>Infrastructure Architect</strong>: Experience with both centralised (AWS,
                PostgreSQL) and decentralised (IPFS, Libp2p) systems
              </div>
            </li>
          </ul>
        </div>

        {/* Card 3: Vision for India's Web3 Future */}
        <div className="bg-brand-card/30 rounded-lg border border-gray-200 p-6">
          <h3 className="mb-4 text-xl font-bold text-gray-900">Vision for India's Web3 Future</h3>
          <p className="mb-4 leading-relaxed text-gray-700">
            Building technology that serves Bharat's unique needs:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mt-1 mr-2">•</span>
              <div>
                <strong>Financial Sovereignty</strong>: Reimagining money and value exchange through
                DLT
              </div>
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2">•</span>
              <div>
                <strong>Digital Identity</strong>: Creating self-sovereign identity systems
                respecting individual agency
              </div>
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2">•</span>
              <div>
                <strong>Economic Decentralisation</strong>: Enabling peer-to-peer commerce without
                gatekeepers
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UniqueValueProposition
