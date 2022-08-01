export function Counter(n,s1,s2,s3, b = false) 
{
    var m = n % 10; 
    var j = n % 100;
    if(b) {n = n;}
    if(m==0 || m>=5 || (j>=10 && j<=20)) {return s3;}
    if(m>=2 && m<=4) {return s2;}

    return s1;
}