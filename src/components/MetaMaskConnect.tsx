import { useEffect } from 'react'

import { useMetamask } from 'use-metamask'
import Web3 from 'web3'

export default function MetaMaskConnect() {
  const { connect, metaState, getAccounts } = useMetamask()

  useEffect(() => {
    (async () => {
      try {
        await connect(Web3)
        console.log('Connect success!')

        const account = await getAccounts()
        console.log(account)
      } catch(e) {
        console.log('Connect fail')
      }
    })()
  }, [])

  return (
    <div>
      Hello!!
    </div>
  )
}