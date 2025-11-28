//https://www.hackerrank.com/challenges/compare-the-triplets/problem

let num1,num2;
num1=0;num2=0;
for(let i=0;i<3;i++)
{
    if (a[i] < b[i])
    {
        num1+=1;
        a[i]++;
        b[i]++;
    }
    else if (a[i] > b[i])
    {
        num2+=1;
        a[i]++;
        b[i]++;
    }
    else
    {
        a[i]++;
        b[i]++;
        continue;
    }
}
return [num2, num1];