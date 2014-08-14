var stringsearch = "B"
   ,str = "BBBBBC";
for(var i=count=0; i<str.length; count+=+(stringsearch===str[i++]));
console.log(count);