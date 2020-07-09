const curryPow = x => y => x ** y;
const partiPow = y => x => x ** y;
Out.log(curryPow(2)(10));      
const qv = partiPow(2);
Out.log(qv(5));