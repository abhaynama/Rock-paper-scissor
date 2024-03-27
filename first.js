let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let choices = document.querySelectorAll(".circle");
let result = document.querySelector(".msg");

let humanscore = document.querySelector(".huns");
let compscore = document.querySelector(".comps");

function playmusic() {
    let audio= new Audio("aud.mp3") ;
    audio.play() ;
}

const getcompchoice = () =>  
{    playmusic
    let x =  Math.round(Math.random()*2)
    //console.log(x);
    let compchoice = choices[x].getAttribute("id");
    console.log("computer choice is ")
    console.log(compchoice);
    return compchoice ;

}

const gethumanchoice = () => {

              for(let val of choices) {

             val.onclick = () => {   playmusic() ;
                                     let humanchoice = val.getAttribute("id");
                                     console.log("your choice is ")
                                     console.log(humanchoice);
                                     decision(humanchoice,getcompchoice());
                                     scoreboard() ;
                                     
                                 }
                             
                                      }
                                }


const decision = (human,comp) => {
      
                        if(human==="rock")    {
                                                   if(comp==="rock")
                                                   {
                                                    result.innerText = "DRAW" ;
                                                   }
                                                   if(comp==="paper")
                                                   {
                                                    result.innerText = "COMP WIN" ;
                                                   }
                                                   if(comp==="scissor")
                                                   {
                                                    result.innerText = "YOU WIN" ;
                                                   }
                                               }
                        if(human==="paper")
                                                    {
                                                        if(comp==="rock")
                                                        {
                                                         result.innerText = "YOU WIN" ;
                                                        }
                                                        if(comp==="paper")
                                                        {
                                                         result.innerText = "DRAW" ;
                                                        }
                                                        if(comp==="scissor")
                                                        {
                                                         result.innerText = "COMP WIN" ;
                                                        }
                                                      }                        
                       if(human==="scissor")
                                                     {
                                                        if(comp==="rock")
                                                        {
                                                         result.innerText = "COP WIN" ;
                                                        }
                                                        if(comp==="paper")
                                                        {
                                                         result.innerText = "YOU WIN" ;
                                                        }
                                                        if(comp==="scissor")
                                                        {
                                                         result.innerText = "DRAW" ;
                                                        }
                                                      }
                       }

 const scoreboard = () => { 

    
    
                              if(result.innerText==="YOU WIN")
                              {
                                humanscore.innerText++;
                                console.log('no. of times human win is ');
                                console.log(humanscore.innerText)
                                
                               
                                
                                
                              }
                              if(result.innerText==="COMP WIN")
                              {
                                compscore.innerText++;
                                console.log('no. of times computer win is ');
                                console.log(compscore.innerText)
                               
                               
                              }

                           }



gethumanchoice();
