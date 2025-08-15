import './App.css'
import data from '../public/data.json'
function App() {

  return (

    <div className='container'>
      <h1>Users</h1>

      <div className='cards'>
      {data.map((item)=>(
        <div key={item.id} className='card'>
          <div className='img-box'>
            <img src={item.img} />            
          </div>
          <div className='user-data'>
            <p>{item.name}</p>
            <span>{item.position}</span>
          </div>

        </div>
      ))}
      </div>
    </div>
  )
}

export default App