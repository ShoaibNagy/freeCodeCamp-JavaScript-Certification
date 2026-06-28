// ==========================================
// PROVIDED CODEBASE
// ==========================================
const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

// ==========================================
// REMIX ENGINE FUNCTIONS
// ==========================================

/**
 * 1. Flattens an array of playlists into a single array of tracks,
 * adding a 'source' property indicating where each track originated.
 */
function flattenPlaylists(playlists) {
  if (!Array.isArray(playlists)) {
    return [];
  }

  const flatTracks = [];

  for (let i = 0; i < playlists.length; i++) {
    const playlist = playlists[i];
    
    if (Array.isArray(playlist)) {
      for (let j = 0; j < playlist.length; j++) {
        const track = playlist[j];
        flatTracks.push({
          ...track,
          source: [i, j]
        });
      }
    }
  }

  return flatTracks;
}

/**
 * 2. Calculates and adds a 'score' property to each track based on votes and BPM.
 */
function scoreTracks(tracks) {
  return tracks.map(track => {
    return {
      ...track,
      score: track.votes * 10 - Math.abs(track.bpm - 120)
    };
  });
}

/**
 * 3. Removes duplicate tracks based on trackId, keeping only the first occurrence.
 */
function dedupeTracks(tracks) {
  const seenIds = new Set();
  const uniqueTracks = [];

  for (const track of tracks) {
    if (!seenIds.has(track.trackId)) {
      seenIds.add(track.trackId);
      uniqueTracks.push(track);
    }
  }

  return uniqueTracks;
}

/**
 * 4. Ensures no artist appears more than maxPerArtist times, keeping earliest occurrences.
 */
function enforceArtistQuota(tracks, maxPerArtist) {
  const artistCounts = {};
  const quotaTracks = [];

  for (const track of tracks) {
    const artist = track.artist;
    artistCounts[artist] = (artistCounts[artist] || 0) + 1;

    if (artistCounts[artist] <= maxPerArtist) {
      quotaTracks.push(track);
    }
  }

  return quotaTracks;
}

/**
 * 5. Builds the final broadcast schedule with 1-based slot numbers.
 */
function buildSchedule(tracks) {
  return tracks.map((track, index) => {
    return {
      slot: index + 1,
      trackId: track.trackId
    };
  });
}

/**
 * 6. Orchestrates the entire remix process by calling the helper functions in order.
 */
function remixPlaylist(playlists, maxPerArtist) {
  const flattened = flattenPlaylists(playlists);
  const scored = scoreTracks(flattened);
  const deduped = dedupeTracks(scored);
  const quotaEnforced = enforceArtistQuota(deduped, maxPerArtist);
  const schedule = buildSchedule(quotaEnforced);
  
  return schedule;
}

// ==========================================
// TESTING WITH YOUR CODEBASE
// ==========================================

// Let's process your playlists, allowing a maximum of 1 track per artist to see the quota in action
const maxTracksPerArtist = 1; 
const finalSchedule = remixPlaylist(playlists, maxTracksPerArtist);

console.log("Final Broadcast Schedule:");
console.log(finalSchedule);

/* 
Expected Output with maxPerArtist = 1:
[
  { slot: 1, trackId: 'trk101' }, // Velvet Comet (1st occurrence kept)
  { slot: 2, trackId: 'trk102' }, // Neon Harbor
  { slot: 3, trackId: 'trk103' }, // Lunar Arcade
  { slot: 4, trackId: 'trk201' }  // Solar Echo
  // Note: 'trk202' (Velvet Comet) is dropped because Velvet Comet already has 1 track in the playlist.
]
*/

// If we allow 2 tracks per artist, all 5 tracks will make it to the final schedule:
console.log("\nFinal Broadcast Schedule (max 2 per artist):");
console.log(remixPlaylist(playlists, 2));