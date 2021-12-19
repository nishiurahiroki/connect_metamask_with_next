import dynamic from 'next/dynamic'

import { MetamaskStateProvider } from 'use-metamask'

const MetaMaskConnect = dynamic(
  () =>
    import("../components/MetaMaskConnect"),
  { ssr: false }
)

 export default function Index() {
  return (
    <MetamaskStateProvider>
      <MetaMaskConnect/>
    </MetamaskStateProvider>
  )
}