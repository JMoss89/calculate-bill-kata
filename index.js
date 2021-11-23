const calculateBill=(price, vat, tip)=>{
    if (typeof price !== "number" || typeof vat !== "number" || typeof tip !== "number"){
        return "error";
    }else{
        let totalToPay="";
const totalVat=price*(vat/100);
const totalTip=price*(tip/100);
const totalNumber=price+totalVat+totalTip;

totalToPay="£"+totalNumber;
return totalToPay;
    }
}

module.exports=calculateBill;
