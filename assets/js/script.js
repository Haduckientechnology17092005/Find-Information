let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');
//Form submit
form.addEventListener('submit', addItem);
//Delete item
itemList.addEventListener('click', removeItem);
//Filter item
filter.addEventListener('keyup', filterItems);
//Add Items
function addItem(e){
    e.preventDefault();
    
    //Get input value
    let newItem = document.getElementById('item').value;
    if(newItem === ""){
        alert("Không được để trống");
        return;
    }
    //Create new li element
    let li = document.createElement('li');
    //Add class
    li.className = 'list-group-item'; console.log(li);
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //Create del button element
    let deleteBtn = document.createElement('button');
    //Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    //Append button to li
    li.appendChild(deleteBtn);
    //Append li to list
    itemList.appendChild(li);
    //Dua ve gia tri trong input;
    document.getElementById('item').value = '';
}

//Remove Items
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            let li = e.target.parentElement;
            console.log(li);
            itemList.removeChild(li);
        }
    }
}

//Filter Items
function filterItems(e){
    //convert text to lowercase
    let text = e.target.value.toLowerCase();
    console.log(text);
    //Get lis
    let items = itemList.getElementsByTagName('li');
    console.log(items)
    //Convert to an array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1)
        {
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
        }
    )
}