// Prettier 3.5.3
// Updated 05.06.2025

const config = {
  experimentalTernaries: false, // Try prettier's new ternary formatting
  experimentalOperatorPosition: 'end', // Where operators are printed when binary expressions wrap lines
  printWidth: 120, // Specify the line length that the printer will wrap on
  tabWidth: 2, // Specify the number of spaces per indentation-level
  useTabs: false, // Indent lines with tabs instead of spaces
  semi: false, // Print semicolons at the ends of statements
  singleQuote: true, // Use single quotes instead of double quotes
  quoteProps: 'as-needed', // Change when properties in objects are quoted
  trailingComma: 'all', // Print trailing commas wherever possible in multi-line comma-separated syntactic structures
  bracketSpacing: true, // Print spaces between brackets in object literals
  objectWrap: 'preserve', // Configure how Prettier wraps object literals
  bracketSameLine: false, // Put the > of a multi-line HTML element at the end of the last line
  arrowParens: 'always', // Include parentheses around a sole arrow function parameter
  rangeStart: 0, // Format only a segment of a file
  rangeEnd: Infinity, // Format only a segment of a file
  // parser: 'typescript', // Specify which parser to use
  // filepath: '', // Specify the file name to use to infer which parser to use
  requirePragma: false, // Restrict Prettier to only format files that contain a special comment
  insertPragma: false, // Insert a special @format marker at the top of formatted files
  proseWrap: 'always', // Change wrapping in markdown text
  htmlWhitespaceSensitivity: 'css', // Specify the global whitespace sensitivity for HTML
  endOfLine: 'lf', // Ensure that files only contains Linux-style line endings
  embeddedLanguageFormatting: 'auto', // Control whether Prettier formats quoted code embedded in the file
  singleAttributePerLine: false, // Enforce single attribute per line in HTML
}

export default config
