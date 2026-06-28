function convertHTML(str) {
  // We must replace "&" first! 
  // If we do it later, we would accidentally convert the "&" in "&lt;" to "&amp;lt;"
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log(convertHTML("Dolce & Gabbana"));
// Output: Dolce &amp; Gabbana

console.log(convertHTML("Hamburgers < Pizza < Tacos"));
// Output: Hamburgers &lt; Pizza &lt; Tacos

console.log(convertHTML("Sixty > twelve"));
// Output: Sixty &gt; twelve

console.log(convertHTML('Stuff in "quotation marks"'));
// Output: Stuff in &quot;quotation marks&quot;

console.log(convertHTML("Schindler's List"));
// Output: Schindler&apos;s List

console.log(convertHTML("<>"));
// Output: &lt;&gt;

console.log(convertHTML("abc"));
// Output: abc