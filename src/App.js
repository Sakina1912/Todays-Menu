import React,{useState} from 'react'
import items from './Data'
import './App.css';
import Categories from './Categories';
import Menu from './Menu';

const allCategories = ['all',...new Set(items.map((item) => item.category))]
console.log(allCategories)

function App() {
  const [menu,setMenu] = useState(items)
  const [categories,setCategories] = useState(allCategories)

  const filterItems = (category) =>{
    if(category === 'all'){
      setMenu(items)
      return
    }
    const newItems = items.filter((item)=>
      item.category === category)
      setMenu(newItems)
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline' />
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menu}/>
      </section>
    </main>
  );
}

export default App;
