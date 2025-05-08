{
   //
   
function formatString(input: string, toUpper?: boolean): string{
if( toUpper===false){
    return input.toLowerCase()
}else{
    return input.toUpperCase()
}
}




const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 9.0 }
  ]; 
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
   
const rating =items.filter(item=>item.rating >=4)
return rating
    
}




  function concatenateArrays<T>(...arrays: T[][]): T[]{
  return arrays.reduce((acc,curr)=>acc.concat(curr),[])

  }

 const result= concatenateArrays(["a", "b"], ["c"]);  
 const result1=concatenateArrays([1, 2], [3, 4], [5]); 



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



function processValue(value: string | number): number{
    if( typeof value === "string"){
        return value.length
    }else ( typeof value === "number")
       return value*2
}



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
    if(day === Day.Saturday ||day === Day.Sunday){
        return "Weekend"
    }else{
        return "Weekday"
    }

}


 async function squareAsync(n: number): Promise<number>{
 
  return new Promise((resolve,reject)=>{
    if(n >0){
        setTimeout(() => {
            resolve(n*n)
            
        }, 1000);
    }
    else if(n < 0){
        reject("Negative number not allowed")
      }
  })
 }    

 
//
}