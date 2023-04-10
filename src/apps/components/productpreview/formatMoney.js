function formatPrice(money) {
    let moneyArray = [...String(money)].reverse();
    let moneyArray2 = [];

    let start = 0;
    let end = start + 3;
    let i=0;
    while(i<moneyArray.length) {
        moneyArray2.push(moneyArray.slice(start,end).reverse())
        
        start = end;
        end = start + 3;
        
        i++;
    }


    // filter for empty arrays
    moneyArray2 = moneyArray2.filter(arr => arr.length>=1)
    

    let toJoinMoney = moneyArray2.reverse();

    let formartedMoney = '';
    toJoinMoney.forEach((arr,i) => {
        let comma = i===toJoinMoney.length-1?'':',';
        formartedMoney += arr.join('') + comma;
    });

    return formartedMoney;
   }

   export default formatPrice;