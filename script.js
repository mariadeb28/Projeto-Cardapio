const list = document.querySelector('ul')

const buttonShowAll = document.querySelector('.show-all')

const buttonMapAll = document.querySelector('.map-all')

const buttonSumAll = document.querySelector('.sum-all')

const buttonFilterAll = document.querySelector('.filter-all')

let myLi = ''

function showAll(productsArray){
    myLi = ''

    productsArray.forEach(product =>{
        myLi +=
    
        `
        <li>
        <img src=${product.src}>
        <p>${product.name}</p>
        <p class="item-price">R$ ${product.price.toFixed(2)}</p>
        </li>
    
        `
        list.innerHTML = myLi
    })
    

}


function mapAllItens(){
    const newPrices = menuOptions.map ((product) => ({

        ... product, // spread operator
        price: product.price * 0.9, // 10% desconto
        
    }))

                    
      showAll(newPrices) 
       
    
    }




function sumAllItens(){
    const totalValue = menuOptions.reduce((acc, curr)=> acc + curr.price, 0)

    
    list.innerHTML= `
    <li>
    <p>O valor total dos itens são: R$ ${totalValue.toFixed(2)}</p>
    </li>

    `

}


function filterAllItens(){
    const filterJustVegan = menuOptions.filter((product)=>product.vegan)

    showAll(filterJustVegan)
}


buttonShowAll.addEventListener('click', () => showAll(menuOptions))

buttonMapAll.addEventListener('click', mapAllItens)

buttonSumAll.addEventListener('click', sumAllItens)

buttonFilterAll.addEventListener('click', filterAllItens)




