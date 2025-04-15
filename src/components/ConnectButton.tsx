'use client'
import "@reown/appkit-wallet-button/react";

export const ConnectButton = () => {
  return (
    <div >
        <appkit-button /> <br/> <br/>
        <appkit-wallet-button wallet="metamask" /> <br/> <br/>
        <appkit-network-button /> <br/> <br/>
    </div>
  )
}
