let tetris = document.createElement("div");
tetris.classList.add("tetris");

for (let i = 1; i < 181; i++){
	let excel = document.createElement("div");
	excel.classList.add("excel");
	tetris.appendChild(excel);
}
let main = document.getElementsByClassName("main")[0];
main.appendChild(tetris);

let excel = document.getElementsByClassName("excel");
let i = 0;

for(let y =18; y > 0; y--){
	for(let x = 1; x < 11; x++){
		excel[i].setAttribute("posX", x);
		excel[i].setAttribute("posY", y);
		i++;
	}
}

let x = 5, y = 15;
let mainArr = [
	//line
	[
		[0,1],
		[0,2],
		[0,3],
        //  90 degree
        [
            [-1,1],
            [0,0],
            [1,-1],
            [2,-2],
        ],
        // 180 degree
         [
            [1,-1],
            [0,0],
            [-1,1],
            [-2,2],
        ],
         //  270 degree
        [
            [-1,1],
            [0,0],
            [1,-1],
            [2,-2],
        ],
        // 360 degree
         [
            [1,-1],
            [0,0],
            [-1,1],
            [-2,2],
        ],
	],
	//squer
	[
		[1,0],
		[0,1],
		[1,1],
        //  90 degree
        [
            [0,0],
            [0,0],
            [0,0],
            [0,0],
        ],
        // 180 degree
         [
            [0,0],
            [0,0],
            [0,0],
            [0,0],
        ],
         //  270 degree
        [
            [0,0],
            [0,0],
            [0,0],
            [0,0],
        ],
        // 360 degree
         [
            [0,0],
            [0,0],
            [0,0],
            [0,0],
        ], 
	],
	//L right
	[
		[1,0],
		[0,1],
		[0,2],
        //  90 degree
        [
            [0,0],
            [-1,1],
            [1,0],
            [2,-1],
        ],
        // 180 degree
         [
            [0,0],
            [0,0],
            [-2,1],
            [-2,1],
        ],
         //  270 degree
        [
            [0,0],
            [1,-1],
            [3,-2],
            [2,-1],
        ],
        // 360 degree
         [
            [0,0],
            [0,0],
            [-2,1],
            [-2,1],
        ], 
	],
	// L left 
	[
		[1,0],
		[1,1],
		[1,2],
         //  90 degree
        [
            [0,0],
            [0,0],
            [1,-1],
            [-1,-1],
        ],
        // 180 degree
         [
            [0,0],
            [-1,1],
            [-2,-2],
            [1,1],
        ],
         //  270 degree
        [
            [0,0],
            [-2,0],
            [-1,-1],
            [-1,-1],
        ],
        // 360 degree
         [
            [0,0],
            [3,-1],
            [2,0],
            [1,1],
        ], 
	],
	// normal z
	[
		[1,0],
		[1,1],
		[2,1],
         //  90 degree
        [
            [2,1],
            [0,0],
            [1,1],
            [-1,0],
        ],
        // 180 degree
         [
            [-2,-1],
            [0,0],
            [-1,-1],
            [1,0],
        ],
         //  270 degree
        [
            [2,1],
            [0,0],
            [1,1],
            [-1,0],
        ],
        // 360 degree
         [
            [-2,-1],
            [0,0],
            [-1,-1],
            [1,0],
        ], 
	],
	//not normal z
	[
		[1,0],
		[-1,1],
		[0,1],
            //  90 degree
        [
            [1,1],
            [-1,0],
            [2,1],
            [0,0],
        ],
        // 180 degree
         [
            [-1,-1],
            [1,0],
            [-2,-1],
            [0,0],
        ],
         //  270 degree
        [
            [-1,-1],
            [1,0],
            [-2,-1],
            [0,0],
        ],
        // 360 degree
         [
            [-2,-1],
            [0,0],
            [-1,-1],
            [1,0],
        ],
	],
	[
		[1,0],
		[2,0],
		[1,1],
        //  90 degree
        [
            [1,1],
            [0,0],
            [0,0],
            [0,0],
        ],
        // 180 degree
         [
            [-1,-1],
            [0,0],
            [0,0],
            [0,2],
        ],
         //  270 degree
        [
            [2,1],
            [0,0],
            [0,0],
            [1,-2],
        ],
        // 360 degree
         [
            [-2,-1],
            [0,0],
            [0,0],
            [-1,0],
        ],
	],
]

let currentFigure = 0;
let figureBody = 0;
let rotate = 1;

function creat (){
	function getRandom(){
		return Math.round(Math.random() * (mainArr.length - 1));
	}
    rotate = 1;
	currentFigure = getRandom();
	
	figureBody = [
		document.querySelector(`[posX = "${x}"][posY = "${y}"]`),
		document.querySelector(`[posX = "${x + mainArr[currentFigure][0][0]}"][posY = "${y + mainArr[currentFigure][0][1]}"]`),
		document.querySelector(`[posX = "${x + mainArr[currentFigure][1][0]}"][posY = "${y + mainArr[currentFigure][1][1]}"]`),
		document.querySelector(`[posX = "${x + mainArr[currentFigure][2][0]}"][posY = "${y + mainArr[currentFigure][2][1]}"]`)
	]
	for (let i = 0; i < figureBody.length; i++){
		figureBody[i].classList.add("figure");
	}
}

creat();


function move(){
    let moveFlag = true;
    let cordinate = [
        [figureBody[0].getAttribute('posX'), figureBody[0].getAttribute('posY')],
        [figureBody[1].getAttribute('posX'), figureBody[1].getAttribute('posY')],
        [figureBody[2].getAttribute('posX'), figureBody[2].getAttribute('posY')],
        [figureBody[3].getAttribute('posX'), figureBody[3].getAttribute('posY')],
    ];
    for (let i = 0; i < cordinate.length; i++){
        if (cordinate[i][1] == 1 || document.querySelector(`[posX = "${cordinate[i][0]}"][posY = "${cordinate[i][1] - 1}"]`).classList.contains('set')){
            moveFlag = false;
            break;
        }
    }
    if(moveFlag){
        for (let i = 0; i < figureBody.length; i++){
		      figureBody[i].classList.remove("figure");
        }
        figureBody = [
            document.querySelector(`[posX = "${cordinate[0][0]}"][posY = "${cordinate[0][1] - 1}" ]`),
            document.querySelector(`[posX = "${cordinate[1][0]}"][posY = "${cordinate[1][1] - 1}" ]`),
            document.querySelector(`[posX = "${cordinate[2][0]}"][posY = "${cordinate[2][1] - 1}" ]`),
            document.querySelector(`[posX = "${cordinate[3][0]}"][posY = "${cordinate[3][1] - 1}" ]`),
        ];
         for (let i = 0; i < figureBody.length; i++){
		      figureBody[i].classList.add("figure");
         }
    }else{
         for (let i = 0; i < figureBody.length; i++){
		     figureBody[i].classList.remove("figure");
             figureBody[i].classList.add('set');
        }
        for (let i = 1; i < 15; i++){
            let count  = 0;
            for(let k = 1; k < 11; k++){
                if(document.querySelector(`[posX = "${k}"][posY = "${i}"]`).classList.contains('set')){
                    count++;
                    if(count == 10){
                        for(let m = 1; m < 11; m++){
                            document.querySelector(`[posX = "${m}"][posY = "${i}"]`).classList.remove('set')
                        }
                        let set =document.querySelectorAll('.set');
                        let newSet = [];
                        for(let s = 0; s < set.length; s++){
                            let setCordinates = [set[s].getAttribute('posX'),set[s].getAttribute('posY')];
                            if (setCordinates[1] > i){
                                set[s].classList.remove('set');
                                newSet.push(document.querySelector(`[posX = "${setCordinates[0]}"][posY = "${setCordinates[1] - 1}"]`));
                            }
                            
                        }
                        for(let a = 0; a < newSet.length; a++){
                                newSet[a].classList.add('set');
                            }
                        i--;
                    }
                }
            }
        }
        creat();
    }
}

let interval = setInterval(move,500)
let flag  =true;

window.addEventListener('keydown',function(event){
    
    let cordinate1 = [figureBody[0].getAttribute('posX'), figureBody[0].getAttribute('posY')];
    let cordinate2 = [figureBody[1].getAttribute('posX'), figureBody[1].getAttribute('posY')];
    let cordinate3 = [figureBody[2].getAttribute('posX'), figureBody[2].getAttribute('posY')];
    let cordinate4 = [figureBody[3].getAttribute('posX'), figureBody[3].getAttribute('posY')];
    
    function getNewState(a){
        flag = true;
        let figureNew =[
            document.querySelector(`[posX = "${+cordinate1[0] + a}"][posY = "${cordinate1[1]}"]`),
            document.querySelector(`[posX = "${+cordinate2[0] + a}"][posY = "${cordinate2[1]}"]`),
            document.querySelector(`[posX = "${+cordinate3[0] + a}"][posY = "${cordinate3[1]}"]`),
            document.querySelector(`[posX = "${+cordinate4[0] + a}"][posY = "${cordinate4[1]}"]`),
        ];
        
        for(let i = 0; i < figureNew.length; i++){
            if(!figureNew[i] || figureNew[i].classList.contains('set')){
                flag =false
            }
        }
        if(flag){
            for(let i = 0; i < figureBody.length; i++){
                figureBody[i].classList.remove('figure');
            }
            figureBody = figureNew;
            
             for(let i = 0; i < figureBody.length; i++){
                figureBody[i].classList.add('figure');
            }
        }
    }
    if(event.keyCode == 37){
        getNewState(-1);
    }else if(event.keyCode == 39){
        getNewState(1);
    }else if(event.keyCode == 40){
        move();
    }else if(event.keyCode == 38){
        
          flag = true;
        
        let figureNew =[
            document.querySelector(`[posX = "${+cordinate1[0] + mainArr[currentFigure][rotate + 2][0][0]}"][posY = "${+cordinate1[1] + mainArr[currentFigure][rotate + 2][0][1]}"`),
            document.querySelector(`[posX = "${+cordinate2[0] + mainArr[currentFigure][rotate + 2][1][0]}"][posY = "${+cordinate2[1] + mainArr[currentFigure][rotate + 2][1][1]}"]`),
            document.querySelector(`[posX = "${+cordinate3[0] + mainArr[currentFigure][rotate + 2][2][0]}"][posY = "${+cordinate3[1] + mainArr[currentFigure][rotate + 2][2][1]}"]`),
            document.querySelector(`[posX = "${+cordinate4[0] + mainArr[currentFigure][rotate + 2][3][0]}"][posY = "${+cordinate4[1] + mainArr[currentFigure][rotate + 2][3][1]}"]`),
        ];
        
        for(let i = 0; i < figureNew.length; i++){
            if(!figureNew[i] || figureNew[i].classList.contains('set')){
                flag =false
            }
        }
        if(flag){
            for(let i = 0; i < figureBody.length; i++){
                figureBody[i].classList.remove('figure');
            }
            figureBody = figureNew;
            
             for(let i = 0; i < figureBody.length; i++){
                figureBody[i].classList.add('figure');
            }
            if (rotate < 4){
                rotate++;
            }else{
                rotate = 1;
            }
        }
    }
});









































