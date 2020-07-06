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
      result = (top ? result + eol : '') + input + (bottom ? eol + result : '');
   }

   return result;
}
