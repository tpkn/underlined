module.exports = (input = '', options = {}) => {
   let { 
      top = false,
      bottom = true, 
      symbol = '-',
      with_string = true,
      eol = '\n',
   } = options;

   let i = 0;
   let result = '';

   while(i < input.length){
      result += symbol;
      i++;
   }

   if(with_string){
      if(top && bottom){
         result = result + eol + input + eol + result;
      }else if(top){
         result += result + eol + input;
      }else if(bottom){
         result = input + eol + result;
      }
   }

   return result;
}
