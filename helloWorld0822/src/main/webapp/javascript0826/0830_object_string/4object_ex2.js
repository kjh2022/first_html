//4object_ex2.js

function Estimate(param) {
    this.unit = param;
    
    this.getEstimate = function(unitType, width, height) {
        let priceInfo = this.unit.find(
            val => val.type == unitType);
    return priceInfo.price * width * height;
    }

    this.addUnit = function(unit){
        this.unit.push(unit); //새 배열 추가 위한 함수
    }
}


let unitInfo = [
    {type : 'wood', price : 100},
    {type : 'iron', price : 300},
    {type : 'plastic', price : 200}
]

let estimate = new Estimate(unitInfo);
let result = estimate.getEstimate('wood', 20, 30);

estimate.addUnit({type:'carbon', price: 400});
result = estimate.getEstimate('wood', 30, 30);

console.log(`계산 결과 : ${result} 원`);