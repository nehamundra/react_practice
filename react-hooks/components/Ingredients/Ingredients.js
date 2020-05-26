import React, {useState} from 'react';

import IngredientForm from './IngredientForm';
import IngredienList from './IngredientList';
import Search from './Search';

const Ingredients=()=> {
  const [ingredients,setIng]=useState([]);

  const addIngs=(ingredients)=>{
    setIng(prevIng=>[...prevIng, {id:Math.random().toString(), ...ingredients}])
  }

  const onRemoveItem=(id)=>{
    let newIng=ingredients.filter(ele=>ele.id!==id);
    setIng(newIng);
  }
  return (
    <div className="App">
      <IngredientForm addIngs={addIngs}/>

      <section>
        <Search />
        {/* Need to add list here! */}
        <IngredienList ingredients={ingredients} onRemoveItem={onRemoveItem}/>
      </section>
    </div>
  );
}

export default Ingredients;
