import React from 'react'
import Image from '@/components/Image'

const TechnicalArsenal: React.FC = () => {
  return (
    <div className="mb-12">
      {/* Header */}
      <div className="mb-8 flex items-center">
        <span className="text-3xl">🛠️</span>
        <h2 className="ml-4 text-4xl font-bold text-gray-900">Technical Arsenal</h2>
      </div>

      {/* Main Grid - Languages & Core Skills + Blockchain Ecosystems */}
      <div className="mb-12 grid gap-12 lg:grid-cols-2">
        {/* Languages & Core Skills Column */}
        <div>
          <h3 className="mb-6 text-2xl font-bold text-gray-900">Languages & Core Skills</h3>

          {/* Hero Image */}
          <div className="relative mb-6 h-64 overflow-hidden rounded-xl">
            <Image
              src="/static/images/landing/web3-architecture.png"
              alt="Systems Programming"
              fill
              className="object-cover"
            />
          </div>

          {/* Skills Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Systems Programming */}
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h4 className="mb-2 font-bold text-gray-900">Systems Programming</h4>
              <p className="text-sm text-gray-700">
                <span className="font-bold text-pink-600">Rust (Advanced)</span> - Building
                performant, secure backend systems
              </p>
            </div>

            {/* Smart Contracts */}
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h4 className="mb-2 font-bold text-gray-900">Smart Contracts</h4>
              <p className="text-sm text-gray-700">
                <span className="font-bold text-pink-600">Solidity (Intermediate)</span> - DeFi,
                governance, and utility contracts
              </p>
            </div>

            {/* Full Stack */}
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h4 className="mb-2 font-bold text-gray-900">Full Stack</h4>
              <p className="text-sm text-gray-700">
                <span className="font-bold text-pink-600">TypeScript (Advanced)</span> - End-to-end
                application development
              </p>
            </div>

            {/* Version Control */}
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h4 className="mb-2 font-bold text-gray-900">Version Control</h4>
              <p className="text-sm text-gray-700">
                <span className="font-bold text-pink-600">Git (Advanced)</span> - Collaborative
                development and CI/CD
              </p>
            </div>
          </div>
        </div>

        {/* Blockchain Ecosystems Column */}
        <div>
          <h3 className="mb-6 text-2xl font-bold text-gray-900">Blockchain Ecosystems</h3>

          {/* Hero Image */}
          <div className="relative mb-6 h-64 overflow-hidden rounded-xl">
            <Image
              src="/static/images/landing/coding-landscape.png"
              alt="Blockchain Ecosystems"
              fill
              className="object-cover"
            />
          </div>

          {/* Blockchain Skills Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Ethereum & L2s */}
            <div className="flex items-start space-x-3 rounded-lg border border-gray-200 bg-gray-50 p-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center">
                {/* Ethereum Logo */}
                <svg className="h-6 w-6 text-gray-600" fill="currentColor" viewBox="0 0 320 512">
                  <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                </svg>
              </div>
              <div>
                <h4 className="mb-1 font-bold text-gray-900">Ethereum & L2s</h4>
                <p className="text-sm text-gray-700">Optimism, Arbitrum, Base</p>
              </div>
            </div>

            {/* Data Availability */}
            <div className="flex items-start space-x-3 rounded-lg border border-gray-200 bg-gray-50 p-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center">
                {/* Database Icon */}
                <svg className="h-6 w-6 text-gray-600" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z" />
                </svg>
              </div>
              <div>
                <h4 className="mb-1 font-bold text-gray-900">Data Availability</h4>
                <p className="text-sm text-gray-700">Celestia, Avail</p>
              </div>
            </div>

            {/* Alternative L1s */}
            <div className="flex items-start space-x-3 rounded-lg border border-gray-200 bg-gray-50 p-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center">
                {/* Network Icon */}
                <svg className="h-6 w-6 text-gray-600" fill="currentColor" viewBox="0 0 640 512">
                  <path d="M256 64C256 28.7 284.7 0 320 0s64 28.7 64 64V288c0 35.3-28.7 64-64 64s-64-28.7-64-64V64zM240 352c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32H240zM64 192c35.3 0 64 28.7 64 64v96c0 35.3-28.7 64-64 64s-64-28.7-64-64V256c0-35.3 28.7-64 64-64zM448 128c0 35.3 28.7 64 64 64s64-28.7 64-64V64c0-35.3-28.7-64-64-64s-64 28.7-64 64v64z" />
                </svg>
              </div>
              <div>
                <h4 className="mb-1 font-bold text-gray-900">Alternative L1s</h4>
                <p className="text-sm text-gray-700">Cosmos, Polkadot</p>
              </div>
            </div>

            {/* Bitcoin L2s */}
            <div className="flex items-start space-x-3 rounded-lg border border-gray-200 bg-gray-50 p-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center">
                {/* Bitcoin Icon */}
                <svg className="h-6 w-6 text-gray-600" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z" />
                </svg>
              </div>
              <div>
                <h4 className="mb-1 font-bold text-gray-900">Bitcoin L2s</h4>
                <p className="text-sm text-gray-700">Arbitrum, Lightning Network</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infrastructure & Architecture Section */}
      <div className="mb-12">
        <h3 className="mb-6 text-2xl font-bold text-gray-900">Infrastructure & Architecture</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Decentralised */}
          <div className="relative">
            <div className="relative overflow-hidden border border-gray-200 bg-gray-100 p-6">
              {/* Arrow shape using clip-path */}
              <div
                className="absolute inset-0 border-r border-gray-300 bg-gray-100"
                style={{
                  clipPath:
                    'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%)',
                }}
              />
              <div className="relative z-10 flex items-start space-x-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center">
                  {/* Speech bubble icon */}
                  <svg
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-2 font-bold text-gray-900">Decentralised</h4>
                  <p className="text-sm text-gray-700">
                    IPFS, Libp2p, The Graph, WebSocket Management
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Traditional */}
          <div className="relative">
            <div className="relative overflow-hidden border border-gray-200 bg-gray-100 p-6">
              {/* Arrow shape using clip-path */}
              <div
                className="absolute inset-0 border-r border-gray-300 bg-gray-100"
                style={{
                  clipPath:
                    'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%)',
                }}
              />
              <div className="relative z-10 flex items-start space-x-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center">
                  {/* Cloud Icon */}
                  <svg className="h-6 w-6 text-gray-600" fill="currentColor" viewBox="0 0 640 512">
                    <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-50.1-112-112-112c-8.8 0-16-7.2-16-16s7.2-16 16-16c79.5 0 144 64.5 144 144c0 9.7-.8 19.2-2.4 28.4C665.5 392.8 640 428.1 640 464c0 26.5 21.5 48 48 48s48-21.5 48-48c0-61.9-50.1-112-112-112c-15.3 0-30.1 3.1-43.5 8.7C556.7 270.9 501.4 224 435.2 224c-49.6 0-93.8 29.8-113.1 75.6C303.5 285.2 280.9 272 256 272c-35.3 0-64 28.7-64 64c0 8.8 7.2 16 16 16s16-7.2 16-16c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 35.3 28.7 64 64 64c23.2 0 43.5-12.4 54.7-31C346.1 458.2 389.9 480 437.3 480c79.5 0 144-64.5 144-144c0-26.5-21.5-48-48-48H144c-26.5 0-48 21.5-48 48z" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-2 font-bold text-gray-900">Traditional</h4>
                  <p className="text-sm text-gray-700">AWS, DigitalOcean, PostgreSQL, Redis</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hybrid */}
          <div className="relative">
            <div className="relative overflow-hidden border border-gray-200 bg-gray-100 p-6">
              {/* Arrow shape using clip-path */}
              <div
                className="absolute inset-0 border-r border-gray-300 bg-gray-100"
                style={{
                  clipPath:
                    'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%)',
                }}
              />
              <div className="relative z-10 flex items-start space-x-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center">
                  {/* Mercury/Hybrid Icon */}
                  <svg className="h-6 w-6 text-gray-600" fill="currentColor" viewBox="0 0 384 512">
                    <path d="M89.2 4.8C83-1.5 72.8-1.6 66.5 4.6s-6.4 16.3-.2 22.6C81.2 42.4 98.9 55 118.6 64C58 91.8 16 153 16 224c0 91.8 70.3 167.2 160 175.3V432H128c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v32c0 8.8 7.2 16 16 16s16-7.2 16-16V464h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H208V399.3c89.7-8.1 160-83.5 160-175.3c0-71-42-132.2-102.6-160c19.6-9 37.3-21.6 52.3-36.8c6.2-6.3 6.1-16.4-.2-22.6s-16.4-6.1-22.6 .2C268.7 31.5 232.3 48 192 48S115.3 31.5 89.2 4.8zM192 80a144 144 0 1 1 0 288 144 144 0 1 1 0-288z" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-2 font-bold text-gray-900">Hybrid</h4>
                  <p className="text-sm text-gray-700">
                    Event-Driven Architecture, Microservices, API Gateway patterns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frameworks & Tools Section */}
      <div>
        <h3 className="mb-6 text-2xl font-bold text-gray-900">Frameworks & Tools</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Blockchain */}
          <div className="rounded-lg border-2 border-gray-200 bg-white p-4">
            <h4 className="mb-2 font-bold text-gray-900">Blockchain</h4>
            <p className="text-sm text-gray-700">Polkadot SDK, Hardhat, Foundry</p>
          </div>

          {/* Backend */}
          <div className="rounded-lg border-2 border-gray-200 bg-white p-4">
            <h4 className="mb-2 font-bold text-gray-900">Backend</h4>
            <p className="text-sm text-gray-700">Actix-Web (Rust), Express/NestJS (Node)</p>
          </div>

          {/* Frontend */}
          <div className="rounded-lg border-2 border-gray-200 bg-white p-4">
            <h4 className="mb-2 font-bold text-gray-900">Frontend</h4>
            <p className="text-sm text-gray-700">ReactJS, Next.js, React Native, Tauri</p>
          </div>

          {/* Emerging */}
          <div className="rounded-lg border-2 border-gray-200 bg-white p-4">
            <h4 className="mb-2 font-bold text-gray-900">Emerging</h4>
            <p className="text-sm text-gray-700">Iroh, Earthstar (distributed systems)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnicalArsenal
