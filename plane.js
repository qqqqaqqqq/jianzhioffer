// // class Plane{
// //     constructor(x,y){
// //         this.nowX = x
// //         this.nowY = y
// //     }
 
// //     shoot(){
// //         console.log('shott');
// //     }
// // }
// // var drone = new Plane(0,0)
// // drone.shoot()


//假设输入数据input:[G-GH-,WHWWG,GGG--,-----,GWH-G,WHWGW,G-WHG,-----,H--HW,----W,HH--H],3,3
//起点在[0，0]
const strList =['G-GH-','WHWWG','GGG--','-----','GWH-G','WHWGW','G-WHG','-----','H--HW','----W','HH--H']
function printMap(strList,m,n){
    //起点
    let x=0
    let y=0
    let flag = true
    //生成二维数组存储地图信息
    let map = new Array(m)
    for(let i=0;i<n;i++){
        map[i] = new Array(n)
    }
    //检验输入字符串能否正常输出
    // strList.forEach(el => {
    //     console.log(el[4]);       
    // });
    //二维数组赋值
    for(let i=0;i<strList.length;i++){        
            if(x>=0 &&x<m && y>=0 && y<n){
                map[x][y] = strList[i][0]
                debugger
                //仅在数组范围内时赋值
                if(y>=1 && !map[x][y-1]) map[x][y-1] = strList[i][1]
                if(x<4 && !map[x+1][y]) map[x+1][y] = strList[i][2]
                if(y<4 && !map[x][y+1]) map[x][y+1] = strList[i][3]
                if(x>=1 && !map[x-1][y]) map[x-1][y] = strList[i][4]  
            }
 
            
        if(y<0||y>4){
             flag = !flag
             x=x+2
        }
       
        if(i%2==0) {
            x=x+1
            if(flag) y=y+2
            else y=y-2
        }
        else{
            x=x-1
            if(flag) y=y+2
            else y=y-2
        }
        

    }

    console.log(map)
}

 printMap(strList,5,5)

// function getNow(m,n){
//     let x=0
//     let y=0
//     let flag = 1

//     for(let i=0;i<15;i++){
//         if(flag) x=x+3
//         else x=x-3
//         if(x>8){
//             x=8-(Math.abs(x)%9)
//             y=y+1
//             flag =!flag
//         }
//         else if(x<0){
//             x=((Math.abs(x)-1)%9)
//             y=y+1
//             flag =!flag
//         }
        
//         console.log(x,y);

//     }
// }
// getNow(6,6)