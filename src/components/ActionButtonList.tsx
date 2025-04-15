'use client'
import { useDisconnect, useAppKit, useAppKitNetwork } from '@reown/appkit/react'
import { networks } from '@/config'

export const ActionButtonList = () => {
    const { disconnect } = useDisconnect();
    const { open } = useAppKit();
    const { caipNetwork, switchNetwork } = useAppKitNetwork()
    
    const handleDisconnect = async () => {
      try {
        await disconnect();
      } catch (error) {
        console.error("Failed to disconnect:", error);
      }
    }
  return (
    <div>
        <button onClick={() => open()}>Open</button>
        <button onClick={handleDisconnect}>Disconnect</button>
        <button onClick={() => 
          {
            const len = networks.length;
            let net_index: number =0;
            const networkName = caipNetwork?.name;
            for(let i=0; i < len ; i++){
              if(networks[i].name==networkName){
                net_index = i;
                break;
              }
            }
            switchNetwork(networks[(net_index+1) % len]); 
          }
        } >Switch Network</button>
    </div>
  )
}
