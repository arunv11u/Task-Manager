// Student Name: Arun Varadharajalu
// Student Number: 8896434

// Class for interacting with local storage
class LocalStorage {

    // Method to retrieve item from local storage by key
    getItem(key) {
        // Parsing the retrieved item as JSON and returning it
        return JSON.parse(localStorage.getItem(key));
    }

    // Method to set an item in local storage with a key-value pair
    setItem(key, value) {
        // Stringifying the value as JSON and storing it with the given key
        localStorage.setItem(key, JSON.stringify(value));
    }
}

// Exporting the LocalStorage class
export {
    LocalStorage
};