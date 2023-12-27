import { faker } from '@faker-js/faker';



const generateFakeData = () => {
    return Array.from({ length: 500 }, () => ({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
    }));
  };
  
  // API function to fetch suggestions
  const fetchSuggestions = (query) => {
    // Simulate an API call delay (e.g., 500ms)
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredData = generateFakeData().filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );
        resolve(filteredData);
      }, 500);
    });
  };
  
  export { fetchSuggestions };