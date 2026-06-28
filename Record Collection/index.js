const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  // If value is an empty string, delete the given prop property from the album
  if (value === "") {
    delete records[id][prop];
  } 
  // If prop isn't "tracks" and value isn't an empty string, assign the value to that album's prop
  else if (prop !== "tracks") {
    records[id][prop] = value;
  } 
  // If prop is "tracks" and value isn't an empty string
  else {
    // If the album doesn't have a tracks property, create an empty array
    if (!records[id].hasOwnProperty("tracks")) {
      records[id].tracks = [];
    }
    // Add value to the end of the album's existing (or newly created) tracks array
    records[id].tracks.push(value);
  }
  
  // Always return the entire records object
  return records;
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

// Test 2: artist should be "ABBA"
updateRecords(recordCollection, 5439, "artist", "ABBA");

// Test 3: tracks should have "Take a Chance on Me" as the last and only element
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");

// Test 4: artist should not be set (deleted)
updateRecords(recordCollection, 2548, "artist", "");

// Test 5: tracks should have "Addicted to Love" as the last element
updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");

// Test 6: tracks should have "1999" as the first element, and "Free" as the last
updateRecords(recordCollection, 2468, "tracks", "Free");

// Test 7: tracks should not be set (deleted)
updateRecords(recordCollection, 2548, "tracks", "");

// Test 8: albumTitle should be "Riptide"
updateRecords(recordCollection, 1245, "albumTitle", "Riptide");

console.log(recordCollection);