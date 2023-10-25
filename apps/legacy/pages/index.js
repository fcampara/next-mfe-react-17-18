import React from 'react'

export default function Home() {
  return <div style={{ borderStyle: "dashed", border: "4px dashed red", padding: 16, margin: 16 }}>
    <strong>App1</strong> - Versão do react <strong>{React.version}</strong>
  </div>
}
