function formatValue(value:string | number | boolean):string|number|boolean{

    if(typeof value === "number"){
        return value * 10;
    }
    else if(typeof value === "string"){
        return value.toUpperCase();
    }
    else if(typeof value === "boolean"){
        return !value;
    }
    return value

}

formatValue('samir');




function getLength(value:string | any[] ):number{

    if(typeof value === "string"){
        return value.length;
    }
    else if(Array.isArray(value)===true){
        return value.length;
    }
   return 0;
}

getLength([2,3,4]);




class Person{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }

    getDetails():string{
        return  `'Name: ${this.name}, Age: ${this.age}'`;
    }
}

const person1 = new Person('sam',24);
person1.getDetails()




type Item ={
    title:string;
    rating:number;
}

function  filterByRating(books:Item[]):Item[]{

    let filteredArray:Item[] = [];
    for(const book of books){
        if(book.rating>=4){
            filteredArray.push(book);
        }
    }
    return filteredArray;
    
}

const Books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
    ];

filterByRating(Books)




type User = {
    id:number;
    name:string;
    email:string;
    isActive:boolean;
}

function filterActiveUsers(users:User[]):User[]{
    let activeUsers:User[] = [];
    for(const user of users){
        if(user.isActive === true){
           activeUsers.push(user);
        }
    }
    return activeUsers;
}

const Users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

filterActiveUsers(Users);




interface Book{
    title:string;
    author:string;
    publishedYear:number;
    isAvailable:boolean;
}

function printBookDetails(books:Book):string{
   
    const available = books.isAvailable?"Yes":"No";
    
    return `Title: ${books.title}, Author: ${books.author}, PublishedYear: ${books.publishedYear}, Available:${available}`

}
    
const myBook = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);




type genericTypeArray<T> = Array<T>

function getUniqueValues<T>(arr1:genericTypeArray<T>,arr2:genericTypeArray<T>):genericTypeArray<T>{
   let newUniqueArray:genericTypeArray<T> = [];

   for(const element of arr1){
    let duplicateValue = false;
    for(const value of newUniqueArray){
        if(value === element){
            duplicateValue = true;
            break;
        }
    }
    if(duplicateValue === false){
        newUniqueArray.push(element)
    }
   }
   for(const element of arr2){
    let duplicateValue = false;
    for(const value of newUniqueArray){
        if(value === element){
            duplicateValue = true;
            break;
        }
    }
    if(duplicateValue === false){
        newUniqueArray.push(element)
    }
   }

   return newUniqueArray;
   
}
const num1:genericTypeArray<number> = [1, 2, 3, 4, 5];
const num2:genericTypeArray<number> = [3, 4, 5, 6, 7];

const str1:genericTypeArray<string> = ['1','2','3','4','5'];
const str2:genericTypeArray<string> = ['3','4','5','6','7']

getUniqueValues(num1,num2);
getUniqueValues(str1,str2)




type Items = {
    name:string;
    price:number;
    quantity:number;
    discount?:number;
}

function calculateTotalPrice(products:Items[]):number{

    const allProductTotals = products.map(product=>{
        const total = product.price*product.quantity;
        if(product.discount){
            const price = total*(1-product.discount/100);
            return price;
        }
        return total
        
    })
    const totalPrice = allProductTotals.reduce((p,c)=>p+c,0);
    return totalPrice;

}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

calculateTotalPrice(products);




