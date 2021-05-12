// Minimum Deletions to make the occurrence of each character unique.

const minDeletions = (s) =>{
  let freq = [...new Array(26)].map(()=>0);
  let arr = s.split('');
  for(let i = 0; i < arr.length; i++)
  {
      freq[arr[i].charCodeAt() - 'a'.charCodeAt()]++;
  }
  freq.sort((a,b)=>a-b);
  let exp = freq[25];
  let res = 0;
  for(let i = 25; i >-1; i--)
  {
      if( freq[i] == 0 )
          break;
      if(freq[i] > exp)
      {
          res += freq[i] - exp;
      }else
      {
          exp = freq[i];        
      }
      if(exp > 0)
          exp--;
  }
  return res;
};

// minDeletions('ccaaffddecee')