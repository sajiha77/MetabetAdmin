 export function useArray(data) {
     // Get array of inputted images
     //  const images = Object.values(data);
     return new Promise((resolve, reject) => {

         var file = data
         var reader = new FileReader();

         reader.onload = function () {
             resolve(reader.result)
         }

         reader.readAsDataURL(file);

         reader.onerror = (error) => reject(error);
     })
 }