//---Cash Machine
// var AC = 50449921
// var PN = 7054
// var AM = 765
// const CW = (PIN,AMOUNT) => {
//     if (PIN != PN || AM > AMOUNT)
//     console.log ('INSUFFIENT FUNDS')
//     }

//      else {
//         console.log ("PIN CORRECT, PLEASE WITHDRAW YOUR CASH")
//      }
// CW (500, 70)


//---Cash Machine - Alternative Version
let balance = 1000
let pinnumbercorrect = 7777
const CashWithdrawal = (pinnumber, cash) => { 

    if (balance < cash || pinnumbercorrect != pinnumber) {
        console.log ("Sorry Transaction Failed, please try again"); 
    }
    else {
        console.log  (`You have withdrawn £${cash}, your new account balance is £${balance-cash}`);
}
}
CashWithdrawal (7777, 1000)