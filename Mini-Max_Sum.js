//https://www.hackerrank.com/challenges/mini-max-sum/problem

    let numb1,numb2,sum;
    numb1=arr[0];numb2=arr[0];sum=0;
    for(let i=0;i<arr.length;i++)
    {
        if(numb1<arr[i])
        {
            numb1=arr[i];
        }
        else if(numb2>arr[i])
        {
            numb2=arr[i];
        }
        sum+=arr[i];
    }
    let mex,min;
    min=sum-numb1;
    mex=sum-numb2;
    console.log(min,  mex);
