
// rendome uniq id generatore funciona
export function generateRandomUniqueId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const textLength = 10; // You can adjust the length of the text part
    const numberLength = 15; // You can adjust the length of the number part
    let randomText = '';
  
    // Generate random text part
    for (let i = 0; i < textLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomText += characters.charAt(randomIndex);
    }
  
    // Generate random number part
    const randomNumber = Math.floor(Math.random() * Math.pow(10, numberLength));
  
    // Combine text and number
    const uniqueId = randomText + randomNumber;
  
    return uniqueId;
  }
  

  // product sloge functions 
  export function ProductSlug(name) {
    // Convert the name to lowercase and replace spaces with hyphens
    const slug = name.toLowerCase().replace(/\s+/g, '-');
    return slug;
  }
  
  
  

  