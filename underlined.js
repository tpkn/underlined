module.exports = (input = '', options = {}) => {
   let { 
      top = false,
      bottom = true, 
      symbol = '-',
      with_string = false,
   } = options;

   let i = 0;
   let result = '';

   while(i < input.length){
      result += symbol;
      i++;
   }

   if(with_string){
      if(top && bottom){
         result = result + '\n' + input + '\n' + result;
      }else if(top){
         result += result + '\n' + input;
      }else if(bottom){
         result = input + '\n' + result;
      }
   }

   return result;
}
