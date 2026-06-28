/**
 * Parses an array of raw shipment strings into an array of shipment objects.
 * Format: "sku | name | qty | expires | zone" (zone is optional)
 */
function parseShipment(rawData) {
  const parsed = [];
  const seenSkus = new Set();

  for (let i = 0; i < rawData.length; i++) {
    const parts = rawData[i].split("|");
    const trimmedParts = [];
    for (let j = 0; j < parts.length; j++) {
      trimmedParts.push(parts[j].trim());
    }

    const sku = trimmedParts[0];

    // Skip duplicate SKUs
    if (seenSkus.has(sku)) {
      continue;
    }
    seenSkus.add(sku);

    const name = trimmedParts[1];
    const qty = Number(trimmedParts[2]);
    const expires = trimmedParts[3];
    // Default zone to "general" if not provided
    const zone = trimmedParts[4] || "general";

    parsed.push({ sku, name, qty, expires, zone });
  }

  return parsed;
}

/**
 * Compares the pantry with the shipment and returns an array of actions.
 */
function planRestock(pantry, shipment) {
  const actions = [];

  for (let i = 0; i < shipment.length; i++) {
    const item = shipment[i];
    let type;

    // Rule 1: qty <= 0 -> discard (regardless of pantry)
    if (item.qty <= 0) {
      type = "discard";
    } else {
      // Rule 2: check if sku exists in pantry
      const existsInPantry = pantry.some((p) => p.sku === item.sku);
      type = existsInPantry ? "restock" : "donate";
    }

    actions.push({ type, item });
  }

  return actions;
}

/**
 * Groups actions by each item's zone property.
 */
function groupByZone(actions) {
  const grouped = {};

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    const zone = action.item.zone;

    if (!grouped[zone]) {
      grouped[zone] = [];
    }
    grouped[zone].push(action);
  }

  return grouped;
}

/**
 * Returns a deep copy of the pantry (new array with new objects).
 */
function clonePantry(pantry) {
  const cloned = [];
  for (let i = 0; i < pantry.length; i++) {
    // Spread operator creates a new object with the same properties
    cloned.push({ ...pantry[i] });
  }
  return cloned;
}

// ==========================================
// Example Usage: Process a Shipment End-to-End
// ==========================================

// Current pantry inventory
const pantry = [
  { sku: "SKU001", name: "Rice", qty: 5, expires: "2026-12-01", zone: "dry" },
  { sku: "SKU002", name: "Beans", qty: 3, expires: "2026-10-15", zone: "dry" },
  { sku: "SKU006", name: "Milk", qty: 2, expires: "2026-06-25", zone: "cold" },
];

// Raw incoming shipment data (pipe-delimited strings)
const rawData = [
  "SKU001 | Rice | 10 | 2026-12-01 | dry",          // exists in pantry -> restock
  "SKU003 | Pasta | 0 | 2026-11-30 | dry",          // qty is 0 -> discard
  "SKU004 | Oats | 8 | 2026-09-20",                 // missing zone -> general, not in pantry -> donate
  "SKU001 | Rice | 5 | 2026-12-01 | dry",           // duplicate SKU -> ignored
  "SKU005 | Canned Tuna | 12 | 2027-01-15 | cold",  // not in pantry -> donate
  "SKU002 | Beans | -3 | 2026-10-15 | dry",         // qty is negative -> discard
];

// Step 1: Clone the pantry so planning changes don't affect the original
const workingPantry = clonePantry(pantry);

// Step 2: Parse the raw shipment data
const shipment = parseShipment(rawData);

// Step 3: Plan the restock actions
const actions = planRestock(workingPantry, shipment);

// Step 4: Group the actions by storage zone
const groupedActions = groupByZone(actions);

// Step 5: Log the final grouped result
console.log(groupedActions);