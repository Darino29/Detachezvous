"use client"
import { BasicCard } from '../components/Cards/BasicCard/BasicCard'
import { Featured } from '../components/Featured/Featured'
import { Navbar } from '../components/Navbar/Navbar'


export default function Home() {
  return (
    <main>
      <div>
       <Navbar/>
       <div style={{padding:'92px',display: 'flex'}}>
       <Featured/> 
       </div>
       <div style={{padding:'20px',display: 'flex', alignItems: 'center',marginLeft: '100px'}}>
        <h1>Latest Products</h1>
       </div>
        <div style={{padding: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px'}}>
          <BasicCard title='Kit distribution Blablabla'
            subtitle='Pièces peugeot, 3008'
            note={3}
            raters={263}
          />
          <BasicCard title='Kit distribution Blablabla'
            subtitle='Pièces peugeot, 3008'
            note={3}
            raters={263}
          />
          <BasicCard title='Kit distribution Blablabla'
            subtitle='Pièces peugeot, 3008'
            note={3}
            raters={263}
          />
          <BasicCard title='Kit distribution Blablabla'
            subtitle='Pièces peugeot, 3008'
            note={3}
            raters={263}
          />
        </div>
      </div>
    </main>
  )
}