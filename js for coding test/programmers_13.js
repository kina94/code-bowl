function solution(left, right) {
    var answer = 0;
    for(let i=left; i<=right; i++){
        let cnt=0;
        for(let j=1; j<=i; j++){
            if(i%j===0){
                cnt++
            }
        }
        if(cnt%2===0){
            answer+=i
        } else{
            answer-=i
        }
    }
    return answer;
}

let left = 13
let right = 17
solution(left, right)