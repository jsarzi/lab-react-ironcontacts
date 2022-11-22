import contacts from './contacts.json';
import './App.css';
import React, {useState} from 'react';


function App() {


   
 
      

      const [fiveContact, setContact] =useState([...contacts].splice(0,5))


      const addRandom = () => {
       
      let random = contacts[Math.floor(Math.random()* contacts.length)]
       let copyFive = [...fiveContact];
       copyFive.push(random);

        setContact(copyFive)
       
      }

      const sortByName = ()=> {
        const copyTable = [...fiveContact]
        copyTable.sort((a, b )=> a.name.localeCompare(b.name))
        setContact(copyTable)
      }
    
      const sortByPop = ()=> {
        const copyPop = [...fiveContact]
        copyPop.sort((a, b ) => {

        return b.popularity - a.popularity
      
       })
        setContact(copyPop)
      }

      const deleteButton = (id)  => 
      setContact(fiveContact.filter((e) => e.id !== id))
      
      
    
  return (
    
    <div className="App">

    <h1>IronContacts</h1>

    <button onClick={addRandom}>Add Random Contact</button>
    <button onClick={sortByPop}>Sort by popularity</button>
    <button onClick={sortByName}>Sort by name</button>

    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Action</th>
        </tr>
      </thead>
     
        {fiveContact.map((contact, i )=>{
          const wonOscar = contact.wonOscar;

          
          return (

            <tbody className='contact' key={i}>
            <tr>
              <td className='image'><img src={contact.pictureUrl} alt={contact.name}/></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
             
             <td>{wonOscar ? '🏆' : ' ' }</td>
             <td>{contact.wonEmmy ? '🏆' : ' ' }</td>
             <td><button onClick={() => deleteButton(contact.id)}>Delete</button></td>
            </tr>
            </tbody>
          )
        })}
     
    </table>



  

      
    </div>
  )
}

export default App;
