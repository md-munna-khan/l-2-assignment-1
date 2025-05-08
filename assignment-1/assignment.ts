{
    //
    // problem 1 
function formatString(input: string, toUpper?: boolean): string{
if( toUpper===false){
    return input.toLowerCase()
}else{
    return input.toUpperCase()
}
}
// console.log(formatString("munna",))

// problem 2

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 9.0 }
  ]; 
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
   
const rating =items.filter(item=>item.rating >=4)
return rating
    
}
// console.log( filterByRating(books))
  // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]


  // problem 3

  function concatenateArrays<T>(...arrays: T[][]): T[]{
  return arrays.reduce((acc,curr)=>acc.concat(curr),[])

  }

 const result= concatenateArrays(["a", "b"], ["c"]);  
 const result1=concatenateArrays([1, 2], [3, 4], [5]); 
//  console.log(result,result1)

// problem 4
class Vehicle{
    private  make:string;
  private  year:number
    constructor(make:string,year:number){
        this.make=make
        this.year=year
    } 
    getInfo(){
    return console.log(`Make: ${this.make} Year:${this.year}`)
    }
}


class Car extends Vehicle{
   private model:string;
   constructor(make:string,year:number,model:string){
    super(make,year)
    this.model=model
    
   }
   getModel(){
    return console.log(`Model:${this.model}`) 
   }
}
const myCar= new Car("toyota,",2022,"Corolla")
// myCar.getInfo()
// myCar.getModel()

// problem 5
function processValue(value: string | number): number{
    if( typeof value === "string"){
        return value.length
    }else ( typeof value === "number")
       return value*2
}
//  console.log( processValue("hello munna bro how  "))
//  console.log(processValue(50))

// problem 6
interface Product {
    name: string;
    price: number;
  };
  const products:Product[] = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 250 },
    { name: "Bag", price: 50 }
  ];
  function getMostExpensiveProduct(products: Product[]): Product | null{
    if(products.length=== 0 ){
        return null
    }
  let highPrice=products[0]
  for(const product of products){
    if(product.price > highPrice.price){
        highPrice = product
    }
  }
  return highPrice
  }
  console.log(getMostExpensiveProduct(products))
  // Output: { name: "Bag", price: 50 }

  // problem 7
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string{
    if(day === Day.Saturday ||day ===Day.Sunday){
        return "Weekend"
    }else{
        return "Weekday"
    }

}
//  console.log(getDayType(Day.Sunday))  ;   
//  console.log(getDayType(Day.Monday))  ; 
 
 
 // problem 8

 async function squareAsync(n: number): Promise<number>{
 
  return new Promise((resolve,reject)=>{
    if(n >0){
        setTimeout(() => {
            resolve(n*n)
            
        }, 1000);
    }
    else if(n < 0){
        reject("negative number not allowed")
      }
  })
 }    

//  squareAsync(4).then(console.log);        // Output after 1s: 16
//  squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed

      // Output after 1s: 16
    // Output: Error: Negative number not allowed  
//
}