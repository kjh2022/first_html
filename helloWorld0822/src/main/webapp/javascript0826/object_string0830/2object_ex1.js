//2object_ex1.js

//클래스 Estimate. 속성: 재료, 단가 : 재료와 부피 => 총 금액을 return해주는 클래스 선언

class Estimate {
    constructor(param) {
        this.unit = param;
    }
    getEstimate(unitType, width, height){ //wood, 20, 20의 값이 들어오면 => 100 * 20 * 20;
        //find()는 어떤 조건에 만족하는 첫번째 값을 반환하는 메소드
        let priceInfo = this.unit.find(function(val){
            return val.type == unitType;
        });
        return priceInfo.price * width * height;
    }
    addUnit(unit){
        //새로운 배열 추가하기위한 생성자
        this.unit.push(unit);
        //push()는 배열을 추가해줄 수 있는 함수
    }
}
let unitInfo = [
    {type : 'wood', price : 100},
    {type : 'iron', price : 300},
    {type : 'plastic', price : 200}
]

let estimate = new Estimate(unitInfo);
let result = estimate.getEstimate('wood', 30, 50);

estimate.addUnit({type: 'ceramic', price: 400});

result = estimate.getEstimate('ceramic', 10,20)

// console.log(estimate.unit);
console.log(`선택한 제품의 계산 값은 ${result}원 입니다.`);