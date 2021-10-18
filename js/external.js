function ConvertMinutes(num){
    d = Math.floor(num/1440); // 60*24
    h = Math.floor((num-(d*1440))/60);
    m = Math.round(num%60);
  
    if(d>0){
      if(h==0 && m==0)
        return(d + dictionary[secili_dil]['day']);
      else
        if(h>0 && m==0)
          return(d + dictionary[secili_dil]['day'] + " , " + h + dictionary[secili_dil]['hour']);
        else
          return(d + dictionary[secili_dil]['day'] + h + dictionary[secili_dil]['hour'] + ", "+ m + dictionary[secili_dil]['minute']);
    }
    else if(h>0){
      if(m>0)
      return(h + dictionary[secili_dil]['hour'] + ", " + m + dictionary[secili_dil]['minute']);
        else
      return(h + dictionary[secili_dil]['hour']);

    }
    else {
        return(m+ dictionary[secili_dil]['minute']);
    }
  }

  