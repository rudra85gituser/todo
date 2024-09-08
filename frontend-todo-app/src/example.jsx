import { title } from "process";
import React from "react";
import {useState} from 'react'
import fs from "fs"


//1
//understanding state and conponents



//this is state
function App()
{
    const [todoForToday , setTodoForToday] = React.useState({
        title: "go to the gym" , 
        description: "hit the gym at 5pm",
        id: 1
    }
)


setInterval(()=>{
    setTodoForToday({
        title: " not -> go to the gym",
        description: "not -> go to eat 5pm",
        id:1
      })
    },2000)


    //wee are returnning component
    //we are rendering the data
return 
{
    <div>
    {todoForToday.title}
    <br/>
    {todoForToday.description}
    <br/>
    {todoForToday.id}
    </div>
}

return 
{
    <div>
        <RenderTodo todoForToday={todoForToday}></RenderTodo>
    </div>
}
}

//we can pass satte variables to functions/components using props

function RenderTodo(props)
{
    return
    {
    <div>
    {props.todoForToday.title}
    <br/>
    {props.todoForToday.description}
    <br/>
    {props.todoForToday.id}
    </div>

    }
}
export default App;



//2
//rendering arrays
//maps and filters


//example 1
//doubling eack element of array or multiplying the each element by 2 using array
let arr= [2,4,5,6];
let newArr=[];
for(let i=0;i<arr.length;i++)
{
     newArr.push(arr[i]*2);
}
console.log(newArr);


//doing the same thing using maps
let newArr2 = arr.map((value)=>{
    return value * 2
})
console.log(newArr2);

//or
//without arrow function
function callback(value)
{
    console.log(value);
    return value*2;
}
let newArr3 = arr.map(callback)
console.log(newArr3);


//when we have to pass list of elements and data to render or to display then we use array and maps
//example 2
// manipulating values using array and maps

var array =[
    {
    name: "rudra",
    age:21
    },
    {
        name: "rudra",
        age:21
        },
        {
            name: "rudra",
            age:21
            }
];

const array2= map.array((value)=>
{
    if(values.age < 25)
    {
        return {
            name:value.name,
            age:value.age,
            isAllowed: true
        }
    }
        else
        {
            return {
                name:value.name,
                age:value.age,
                isAllowed: false
            }
        }
    })

    console.log(array2);