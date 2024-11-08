

const getStoredItems = () => {

  const storedItems=localStorage.getItem('cart');
  if(storedItems)
  {
    const ItemList=JSON.parse(storedItems);
    if(Array.isArray(ItemList))
    {
        return ItemList;
    }
    else
    {
        return [];
    }
  }else
  {
    return [];
  }
   
};

 const AddToLocalCart=(id)=>
{
    const ItemList=getStoredItems()
    if(ItemList.includes(id))
    {
        alert('already exist do not add');
    }
    else
    {
        ItemList.push(id);
        const storedItems=JSON.stringify(ItemList);
        localStorage.setItem('cart',storedItems)
    }
}

export {AddToLocalCart,getStoredItems}