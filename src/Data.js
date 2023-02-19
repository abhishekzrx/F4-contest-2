const Data=[];

fetch("https://jsonplaceholder.typicode.com/posts?_page=$%7Bpage%7D&_limit=20")
  .then(response=>response.json())
  .then((data)=>{
    data.forEach(element => {
      Data.push(element)
    });
  })

  export default Data;
    