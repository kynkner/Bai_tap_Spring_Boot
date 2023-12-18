//Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất
function StringHasMaxLength(arr) {
   
    if (arr.length == 0) {
      return [];
    }
  
    const maxLength = arr.reduce((max, str) => Math.max(max, str.length), 0);
  
    const result = arr.filter(str => str.length == maxLength);
  
    return result;
  }
  
  // Ví dụ 
  const getStringHasMaxLength = ['aba', 'aa', 'ad', 'c', 'vcd'];
  const result = StringHasMaxLength(getStringHasMaxLength);
  
  console.log(result); 
  