var store=document.getElementById("container")
var storeWater=document.getElementById("river")
var l1=0
var m1=300


var red = document.getElementById("water-red");
var change = document.getElementById("tap-one")
var waterflow=document.getElementById("flow-red")

waterflow.style.backgroundColor="white"

var level=400;
var Margin=0;

var tapStatus="OFF"
var flow="ON"

function tapOpenone(){
    if(tapStatus=="OFF"){
        change.style.background="green"
        tapStatus="ON"
       
   
    if(level>0)
    {
        waterflow.style.background="red"
        var interval=setInterval(function(){
            level=level-1
            Margin=Margin+1
            red.style.height=level+"px"
            red.style.marginTop=Margin+"px"
            

            if(level==0||Margin==400||flow=="OFF"){
                clearInterval(interval);
                waterflow.style.background="white";
                flow="ON"
            }  
        },50)
    }
    if(flow=="ON"||tapStatus=="ON"){
        storeWater.style.backgroundColor="white"
        var intervalOne=setInterval(function(){
            l1=l1+1
            m1=m1-1
            storeWater.style.background="skyblue"
            storeWater.style.height=l1+"px"
            storeWater.style.marginTop=m1+"px"
             
    
            if(level==0||Margin==400||flow=="OFF"||tapStatus=="OFF"){
                clearInterval(intervalOne);
                flow="ON"
            }
        },500)
    }
}
else if(tapStatus=="ON"){
    flow="OFF"
    change.style.background="red"
    tapStatus="OFF"
    waterflow.style.background="white";
}
}



var green = document.getElementById("water-green");
var changeone = document.getElementById("tap-two")
var waterflowone=document.getElementById("flow-green")

waterflowone.style.backgroundColor="white"

var level1=400;
var Margin1=0;

var tapStatus1="OFF"
var flow1="ON"

function tapOpentwo(){
    if(tapStatus1=="OFF"){
        changeone.style.background="green"
        tapStatus1="ON"
       
   
    if(level1>0)
    {
        waterflowone.style.background="green"
        var intervalToo=setInterval(function(){
            level1=level1-1
            Margin1=Margin1+1
            green.style.height=level1+"px"
            green.style.marginTop=Margin1+"px"
            

            if(level1==0||Margin1==400||flow1=="OFF"){
                clearInterval(intervalToo);
                waterflowone.style.background="white";
                flow1="ON"
            }  
        },50)
    }
    
if(flow1=="ON"||tapStatus1=="ON"){
    storeWater.style.backgroundColor="white"
    var intervalTwo=setInterval(function(){
        l1=l1+1
        m1=m1-1
        storeWater.style.background="skyblue"
        storeWater.style.height=l1+"px"
        storeWaterater.style.marginTop=m1+"px"
         

        if(level1==0||Margin1==400||flow1=="OFF"||tapStatus1=="OFF"){
            clearInterval(intervalTwo);
            flow="ON"
        }
    },500)
}
}
else if(tapStatus1=="ON"){
    flow1="OFF"
    changeone.style.background="red"
    tapStatus1="OFF"
    waterflowone.style.background="white";
}
}



var blue = document.getElementById("water-blue");
var changetwo = document.getElementById("tap-three")
var waterflowtwo=document.getElementById("flow-blue")

waterflowtwo.style.backgroundColor="white"

var level2=400;
var Margin2=0;

var tapStatus2="OFF"
var flow2="ON"

function tapOpenthree(){
    if(tapStatus2=="OFF"){
        changetwo.style.background="green"
        tapStatus2="ON"
       
   
    if(level2>0)
    {
        waterflowtwo.style.background="blue"
        var intervalTee=setInterval(function(){
            level2=level2-1
            Margin2=Margin2+1
            blue.style.height=level2+"px"
            blue.style.marginTop=Margin2+"px"
            

            if(level2==0||Margin2==400||flow2=="OFF"){
                clearInterval(intervalTee);
                waterflowtwo.style.background="white";
                flow2="ON"
            }  
        },50)
    }
    if(flow2=="ON"||tapStatus2=="ON"){
        storeWater.style.backgroundColor="white"
        var intervalThree=setInterval(function(){
            l1=l1+1
            m1=m1-1
            storeWater.style.background="skyblue"
            storeWater.style.height=l1+"px"
            storeWater.style.marginTop=m1+"px"
             
    
            if(level2==0||Margin2==400||flow2=="OFF"||tapStatus2=="OFF"){
                clearInterval(intervalThree);
                flow="ON"
            }
        },500)
    }
}
else if(tapStatus2=="ON"){
    flow2="OFF"
    changetwo.style.background="red"
    tapStatus2="OFF"
    waterflowtwo.style.background="white";
}
}



