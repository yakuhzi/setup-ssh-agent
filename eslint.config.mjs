// ESLint 9.28.0 / TS-ESLint 8.33.1
// Updated 05.06.2025

import tseslint from 'typescript-eslint'
import globals from 'globals'

export default tseslint.config(
  tseslint.configs.base,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
      },
    },
  },
  { files: ['src/**/*.ts'] },
  { ignores: ['dist/**', '**/*.mjs', '**/*.js'] },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // ESLint Rules
  {
    rules: {
      // Possible Problems
      // Enforce return statements in callbacks of array methods
      'array-callback-return': [
        'error',
        {
          // Whether to allow implicit returns in array method callbacks
          allowImplicit: false,
          // Whether to check forEach callbacks that return a value.
          checkForEach: false,
          // Whether to allow void in forEach callbacks
          allowVoid: false,
        },
      ],
      // Require super() calls in constructors
      'constructor-super': 'error',
      // Enforce for loop update clause moving the counter in the right direction
      'for-direction': 'error',
      // Enforce return statements in getters
      'getter-return': [
        'error',
        {
          // Whether to allow implicitly returning `undefined` with a return statement
          allowImplicit: false,
        },
      ],
      // Disallow using an async function as a Promise executor
      'no-async-promise-executor': 'error',
      // Disallow await inside of loops
      'no-await-in-loop': 'error',
      // Disallow reassigning class members
      'no-class-assign': 'error',
      // Disallow comparing against -0
      'no-compare-neg-zero': 'error',
      // Disallow assignment operators in conditional expressions
      'no-cond-assign': [
        'error',
        // Allows assignments in test conditions only if they are enclosed in parentheses
        'except-parens', // or 'always'
      ],
      // Disallow reassigning const variables
      'no-const-assign': 'error',
      // Disallow expressions where the operation doesn’t affect the value
      'no-constant-binary-expression': 'error',
      // Disallow constant expressions in conditions
      'no-constant-condition': [
        'error',
        {
          // Disallow constant expressions in all loops except while true loops
          checkLoops: 'allExceptWhileTrue', // or 'all' or 'none'
        },
      ],
      // Disallow returning value from constructor
      'no-constructor-return': 'error',
      // Disallow control characters in regular expressions
      'no-control-regex': 'error',
      // Disallow the use of debugger
      'no-debugger': 'error',
      // Disallow duplicate arguments in function definitions
      'no-dupe-args': 'error',
      // Disallow duplicate class members
      'no-dupe-class-members': 'off', // Handled by TS-ESLint
      // Disallow duplicate conditions in if-else-if chains
      'no-dupe-else-if': 'error',
      // Disallow duplicate keys in object literals
      'no-dupe-keys': 'error',
      // Disallow duplicate case labels
      'no-duplicate-case': 'error',
      // Disallow duplicate module imports
      'no-duplicate-imports': [
        'off', // Does not work together with @typescript-eslint/consistent-type-imports
        {
          // If re-exporting from an imported module, you should add the imports to the import-statement
          includeExports: true,
        },
      ],
      // Disallow empty character classes in regular expressions
      'no-empty-character-class': 'error',
      // Disallow empty destructuring patterns
      'no-empty-pattern': [
        'error',
        {
          // Allows empty object patterns as function parameters
          allowObjectPatternsAsParameters: false,
        },
      ],
      // Disallow reassigning exceptions in catch clauses
      'no-ex-assign': 'error',
      // Disallow fallthrough of case statements
      'no-fallthrough': [
        'error',
        {
          // Change the test for intentional fallthrough comment
          commentPattern: undefined,
          // Whether to allow empty case statements
          allowEmptyCase: false,
          // Whether to report unused fallthrough comments
          reportUnusedFallthroughComment: true,
        },
      ],
      // Disallow reassigning function declarations
      'no-func-assign': 'error',
      // Disallow assigning to imported bindings
      'no-import-assign': 'error',
      // Disallow variable or function declarations in nested blocks
      'no-inner-declarations': [
        'error',
        // Disallows function declarations in nested blocks
        'functions', // or 'both'
        {
          // Allows function declarations in nested blocks
          blockScopedFunctions: 'allow',
        },
      ],
      // Disallow invalid regular expression strings in RegExp constructors
      'no-invalid-regexp': [
        'error',
        {
          // Allow additional constructor flags
          allowConstructorFlags: [],
        },
      ],
      // Disallow irregular whitespace
      'no-irregular-whitespace': [
        'error',
        {
          // Allows any whitespace characters in string literals
          skipStrings: false,
          // Allows any whitespace characters in comments
          skipComments: false,
          // Allows any whitespace characters in regular expression literals
          skipRegExps: false,
          // Allows any whitespace characters in template literals
          skipTemplates: false,
          // Allows any whitespace characters in JSX text
          skipJSXText: false,
        },
      ],
      // Disallow literal numbers that lose precision
      'no-loss-of-precision': 'error',
      // Disallow characters which are made with multiple code points in character class syntax
      'no-misleading-character-class': [
        'error',
        {
          // Allows grouping of code points inside a character class as long as they are written using escape sequences
          allowEscape: false,
        },
      ],
      // Disallow new operators with global non-constructor functions
      'no-new-native-nonconstructor': 'error',
      // Disallow calling global object properties as functions
      'no-obj-calls': 'error',
      // Disallow returning values from Promise executor functions
      'no-promise-executor-return': [
        'error',
        {
          // Allow returning void values
          allowVoid: false,
        },
      ],
      // Disallow calling some Object.prototype methods directly on objects
      'no-prototype-builtins': 'error',
      // Disallow assignments where both sides are exactly the same
      'no-self-assign': [
        'error',
        {
          // Whether to warn for self-assignments of properties
          props: true,
        },
      ],
      // Disallow comparisons where both sides are exactly the same
      'no-self-compare': 'error',
      // Disallow returning values from setters
      'no-setter-return': 'error',
      // Disallow sparse arrays
      'no-sparse-arrays': 'error',
      // Disallow template literal placeholder syntax in regular strings
      'no-template-curly-in-string': 'error',
      // Disallow this/super before calling super() in constructors
      'no-this-before-super': 'error',
      // Disallow let or var variables that are read but never assigned
      'no-unassigned-vars': 'error',
      // Disallow the use of undeclared variables unless mentioned in /*global */ comments
      'no-undef': [
        'error',
        {
          // Whether to warn for variables used inside typeof check
          typeof: false,
        },
      ],
      // Disallow confusing multiline expressions
      'no-unexpected-multiline': 'error',
      // Disallow unmodified loop conditions
      'no-unmodified-loop-condition': 'error',
      // Disallow unreachable code after return, throw, continue, and break statements
      'no-unreachable': 'error',
      // Disallow loops with a body that allows only one iteration
      'no-unreachable-loop': [
        'error',
        {
          // Array of loop types that will be ignored by this rule
          ignore: [],
        },
      ],
      // Disallow control flow statements in finally blocks
      'no-unsafe-finally': 'error',
      // Disallow negating the left operand of relational operators
      'no-unsafe-negation': [
        'error',
        {
          // Whether to enforce the rule for ordering operators
          enforceForOrderingRelations: true,
        },
      ],
      // Disallow use of optional chaining in contexts where the undefined value is not allowed
      'no-unsafe-optional-chaining': [
        'error',
        {
          // Whether to enforce the rule for arithmetic operators
          disallowArithmeticOperators: true,
        },
      ],
      // Disallow unused private class members
      'no-unused-private-class-members': 'error',
      // Disallow unused variables
      'no-unused-vars': 'off', // Handled by TS-ESLint
      // Disallow the use of variables before they are defined
      'no-use-before-define': 'off', // Handled by TS-ESLint
      // Disallow variable assignments when the value is not used
      'no-useless-assignment': 'error',
      // Disallow useless backreferences in regular expressions
      'no-useless-backreference': 'error',
      // Disallow assignments that can lead to race conditions due to usage of await or yield
      'require-atomic-updates': [
        'error',
        {
          // Whether to report assignments to properties
          allowProperties: false,
        },
      ],
      // Require calls to isNaN() when checking for NaN
      'use-isnan': [
        'error',
        {
          // Whether to disallow NaN in switch statements
          enforceForSwitchCase: true,
          // Whether to disallow the use of indexOf and lastIndexOf methods with NaN
          enforceForIndexOf: true,
        },
      ],
      // Enforce comparing typeof expressions against valid strings
      'valid-typeof': [
        'error',
        {
          // Whether to allow the comparison of typeof expressions with only string literals or other typeof expressions
          requireStringLiterals: true,
        },
      ],

      // Suggestions
      // Enforce getter and setter pairs in objects and classes
      'accessor-pairs': [
        'error',
        {
          // Whether to warn for setters without getters
          setWithoutGet: true,
          // Whether to warn for getters without setters
          getWithoutSet: false,
          // Whether to ignore class declarations and class expressions
          enforceForClassMembers: true,
        },
      ],
      // Require braces around arrow function bodies
      'arrow-body-style': [
        'error',
        // Enforces no braces where they can be omitted
        'as-needed', // or 'always'
      ],
      // Enforce the use of variables within the scope they are defined
      'block-scoped-var': 'error',
      // Enforce camelcase naming convention
      camelcase: 'off', // Handled by TS-ESLint
      // Enforce or disallow capitalization of the first letter of a comment
      'capitalized-comments': [
        'error',
        // Whether capitalization of the first word of a comment should be required or forbidden
        'always', // or 'never',
        {
          line: {
            // A pattern of words that should be ignored by this rule
            ignorePattern: '.*', // Code that is commented out should not be capitalized
            // Whether to ignore comments in the middle of code
            ignoreInlineComments: false,
            // Whether to ignore consecutive comments
            ignoreConsecutiveComments: false,
          },
          block: {
            // A pattern of words that should be ignored by this rule
            ignorePattern: undefined,
            // Whether to ignore comments in the middle of code
            ignoreInlineComments: false,
            // Whether to ignore consecutive comments
            ignoreConsecutiveComments: false,
          },
        },
      ],
      // Enforce that class methods utilize this
      'class-methods-use-this': 'off', // Handled by TS-ESLint
      // Enforce a maximum cyclomatic complexity allowed in a program
      complexity: [
        'error',
        {
          // Maximum cyclomatic complexity allowed
          max: 15,
          // Modified cyclomatic complexity
          variant: 'modified', // or 'classic'
        },
      ],
      // Require return statements to either always or never specify values
      'consistent-return': 'off', // Handled by TS-ESLint
      // Enforce consistent naming when capturing the current execution context
      'consistent-this': [
        'error',
        // Designated alias names for this
        'that',
      ],
      // Enforce consistent brace style for all control statements
      curly: [
        'error',
        // Whether to warn when blocks omit curly braces
        'all',
      ],
      // Require default cases in switch statements
      'default-case': [
        'off', // Not working well with enums
        {
          // String to change the default /^no default$/i comment test pattern
          commentPattern: undefined,
        },
      ],
      // Enforce default clauses in switch statements to be last
      'default-case-last': 'error',
      // Enforce default parameters to be last
      'default-param-last': 'off',
      // Enforce dot notation whenever possible
      'dot-notation': 'off', // Handled by TS-ESLint
      // Require the use of === and !==
      eqeqeq: [
        'error',
        // Enforce the use of === and !== in every situation
        'always',
      ],
      // Require function names to match the name of the variable or property to which they are assigned
      'func-name-matching': [
        'error',
        // Enforce the use of === and !== in every situation
        'always',
        {
          // Whether property descriptors will be checked
          considerPropertyDescriptor: false,
          // Whether module.exports and module["exports"] will be checked
          includeCommonJSModuleExports: true,
        },
      ],
      // Require or disallow named function expressions
      'func-names': [
        'error',
        // Requires function expressions to have a name
        'always',
        {
          // Require named generators if the name isn’t assigned automatically per specification
          generators: 'as-needed',
        },
      ],
      // Enforce the consistent use of either function declarations or expressions assigned to variables
      'func-style': [
        'error',
        // Requires the use of function expressions instead of function declarations
        'declaration',
        {
          // Allows the use of arrow functions.
          allowArrowFunctions: true,
          // Allows the use of function expressions and arrow functions when the variable declaration has a type
          allowTypeAnnotation: false,
          overrides: { namedExports: 'declaration' },
        },
      ],
      // Require grouped accessor pairs in object literals and classes
      'grouped-accessor-pairs': [
        'error',
        // Requires the getter to be defined before the setter
        'getBeforeSet', // or 'anyOrder' or 'setBeforeGet'
      ],
      // Require for-in loops to include an if statement
      'guard-for-in': 'error',
      // Disallow specified identifiers
      'id-denylist': 'off', // Not wanted
      // Enforce minimum and maximum identifier lengths
      'id-length': [
        'error',
        {
          // Minimum length of identifiers
          min: 3,
          // Maximum length of identifiers
          max: 40,
          // Enforces identifier length convention for property names
          properties: 'always',
          // Array of exceptions that will not be checked
          exceptions: ['id', 'fs', 'to', 'a', 'b', 'x', 'y'],
          // Patterns that will not be checked
          exceptionPatterns: [],
        },
      ],
      // Require identifiers to match a specified regular expression
      'id-match': 'off', // Not wanted
      // Require or disallow initialization in variable declarations
      'init-declarations': 'off', // Handled by TS-ESLint
      // Require or disallow logical assignment operator shorthand
      'logical-assignment-operators': [
        'error',
        // Whether to require or disallow logical assignment operator shorthand
        'always', // or 'never'
        {
          // Whether to check for equivalent if statements
          enforceForIfStatements: true,
        },
      ],
      // Enforce a maximum number of classes per file
      'max-classes-per-file': [
        'error',
        {
          // Maximum number of classes allowed in a file
          max: 1,
          // Whether to ignore class expressions
          ignoreExpressions: false,
        },
      ],
      // Enforce a maximum depth that blocks can be nested
      'max-depth': [
        'error',
        {
          // Maximum depth allowed
          max: 4,
        },
      ],
      // Enforce a maximum number of lines per file
      'max-lines': [
        'error',
        {
          // Maximum number of lines allowed in a file
          max: 300,
          // Whether to ignore blank lines when counting lines
          skipBlankLines: true,
          // Whether to ignore comments when counting lines
          skipComments: true,
        },
      ],
      // Enforce a maximum number of lines of code in a function
      'max-lines-per-function': [
        'error',
        {
          // Maximum number of lines allowed in a function
          max: 50,
          // Whether to ignore blank lines when counting lines
          skipBlankLines: true,
          // Whether to ignore comments when counting lines
          skipComments: true,
          // Whether to include any code included in IIFEs
          IIFEs: false,
        },
      ],
      // Enforce a maximum depth that callbacks can be nested
      'max-nested-callbacks': [
        'error',
        {
          // Maximum number of nested callbacks allowed
          max: 3,
        },
      ],
      // Enforce a maximum number of parameters in function definitions
      'max-params': 'off', // Handled by TS-ESLint
      // Enforce a maximum number of statements allowed in function blocks
      'max-statements': [
        'error',
        {
          // Maximum number of statements allowed
          max: 20,
        },
      ],
      // Require constructor names to begin with a capital letter
      'new-cap': [
        'error',
        {
          // Requires all new operators to be called with uppercase-started functions
          newIsCap: true,
          // Requires all uppercase-started functions to be called with new operators
          capIsNew: false,
          // Allows specified lowercase-started function names
          newIsCapExceptions: [],
          // Allows any lowercase-started function names that match the specified regex pattern
          newIsCapExceptionPattern: undefined,
          // Allows specified uppercase-started function names
          capIsNewExceptions: [],
          // Allows any uppercase-started function names that match the specified regex pattern
          capIsNewExceptionPattern: undefined,
          // Whether to enable the checks on object properties
          properties: true,
        },
      ],
      // Disallow the use of alert, confirm, and prompt
      'no-alert': 'error',
      // Disallow Array constructors
      'no-array-constructor': 'off', // Handled by TS-ESLint
      // Disallow bitwise operators
      'no-bitwise': [
        'error',
        {
          // Allows a list of bitwise operators to be used as exceptions
          allow: [],
          // Allows the use of bitwise OR in |0 pattern for type casting.
          int32Hint: false,
        },
      ],
      // Disallow the use of arguments.caller or arguments.callee
      'no-caller': 'error',
      // Disallow lexical declarations in case clauses
      'no-case-declarations': 'error',
      // Disallow the use of console
      'no-console': [
        'error',
        {
          // Array of strings which are allowed methods of the console object
          allow: undefined,
        },
      ],
      // Disallow continue statements
      'no-continue': 'error',
      // Disallow deleting variables
      'no-delete-var': 'error',
      // Disallow equal signs explicitly at the beginning of regular expressions
      'no-div-regex': 'error',
      // Disallow else blocks after return statements in if statements
      'no-else-return': [
        'error',
        {
          // Whether to allow else if blocks after a return
          allowElseIf: true,
        },
      ],
      // Disallow empty block statements
      'no-empty': [
        'error',
        {
          // Whether to allow empty catch clauses
          allowEmptyCatch: false,
        },
      ],
      // Disallow empty functions
      'no-empty-function': 'off', // Handled by TS-ESLint
      // Disallow empty static blocks
      'no-empty-static-block': 'error',
      // Disallow null comparisons without type-checking operators
      'no-eq-null': 'error',
      // Disallow the use of eval()
      'no-eval': [
        'error',
        {
          // Whether to allow indirect calls to eval()
          allowIndirect: false,
        },
      ],
      // Disallow extending native types
      'no-extend-native': [
        'error',
        {
          // List of exceptions for which extensions will be allowed
          exceptions: [],
        },
      ],
      // Disallow unnecessary calls to .bind()
      'no-extra-bind': 'error',
      // Disallow unnecessary boolean casts
      'no-extra-boolean-cast': [
        'error',
        {
          // Whether to check if boolean casts are present in expressions whose result is used in a boolean context
          enforceForInnerExpressions: true,
        },
      ],
      // Disallow unnecessary labels
      'no-extra-label': 'error',
      // Disallow assignments to native objects or read-only global variables
      'no-global-assign': [
        'error',
        {
          // List of exceptions for which assignments will be allowed
          exceptions: [],
        },
      ],
      // Disallow shorthand type conversions
      'no-implicit-coercion': [
        'error',
        {
          // Whether to warn about shorter type conversions for `boolean` type
          boolean: false,
          // Whether to warn about shorter type conversions for `number` type
          number: false,
          // Whether to warn about shorter type conversions for `string` type
          string: true,
          // Whether to warn about type conversions using templates
          disallowTemplateShorthand: true,
          // List of operators that will be allowed to be used for type conversions
          allow: [],
        },
      ],
      // Disallow declarations in the global scope
      'no-implicit-globals': 'off',
      // Disallow the use of eval()-like methods
      'no-implied-eval': 'off', // Handled by TS-ESLint
      // Disallow inline comments after code
      'no-inline-comments': [
        'off', // Not wanted
        {
          // Ignore specific comments matching the pattern
          ignorePattern: undefined,
        },
      ],
      // Disallow use of `this` in contexts where the value of this is undefined
      'no-invalid-this': [
        'error',
        {
          // Whether to treat uppercase and anonymous functions as ‘regular’ functions
          capIsConstructor: true,
        },
      ],
      // Disallow the use of the __iterator__ property
      'no-iterator': 'error',
      // Disallow labels that share a name with a variable
      'no-label-var': 'error',
      // Disallow labeled statements
      'no-labels': [
        'error',
        {
          // Whether to ignore labels which are sticking to loop statements
          allowLoop: false,
          // Whether to ignore labels which are sticking to switch statements
          allowSwitch: false,
        },
      ],
      // Disallow unnecessary nested blocks
      'no-lone-blocks': 'error',
      // Disallow if statements as the only statement in else blocks
      'no-lonely-if': 'error',
      // Disallow function declarations that contain unsafe references inside loop statements
      'no-loop-func': 'off', // Handled by TS-ESLint
      // Disallow magic numbers
      'no-magic-numbers': 'off', // Handled by TS-ESLint
      // Disallow use of chained assignment expressions
      'no-multi-assign': [
        'error',
        {
          // Whether to allow chains that don’t include initializing a variable
          ignoreNonDeclaration: false,
        },
      ],
      // Disallow multiline strings
      'no-multi-str': 'error',
      // Disallow negated conditions
      'no-negated-condition': 'error',
      // Disallow nested ternary expressions
      'no-nested-ternary': 'error',
      // Disallow new operators outside of assignments or comparisons
      'no-new': 'error',
      // Disallow new operators with the Function object
      'no-new-func': 'error',
      // Disallow new operators with the String, Number, and Boolean objects
      'no-new-wrappers': 'error',
      // Disallow \8 and \9 escape sequences in string literals
      'no-nonoctal-decimal-escape': 'error',
      // Disallow calls to the Object constructor without an argument
      'no-object-constructor': 'error',
      // Disallow octal literals
      'no-octal': 'error',
      // Disallow octal escape sequences in string literals
      'no-octal-escape': 'error',
      // Disallow reassigning function parameters
      'no-param-reassign': [
        'off', // Not needed in strict mode
        {
          // Whether to warn against the modification of parameter properties
          props: false,
        },
      ],
      // Disallow the unary operators ++ and --
      'no-plusplus': [
        'error',
        {
          // Whether ti allow unary operators ++ and -- in the afterthought of a for loop
          allowForLoopAfterthoughts: true,
        },
      ],
      // Disallow the use of the __proto__ property
      'no-proto': 'error',
      // Disallow variable redeclaration
      'no-redeclare': 'off', // Handled by TS-ESLint
      // Disallow multiple spaces in regular expressions
      'no-regex-spaces': 'error',
      // Disallow specified names in exports
      'no-restricted-exports': [
        'error',
        {
          // Array of strings, where each string is a name to be restricted
          restrictedNamedExports: [],
          // Named exports matching this pattern will be restricted
          restrictedNamedExportsPattern: undefined,
          // Object option with boolean properties to restrict certain default export declarations
          restrictDefaultExports: undefined,
        },
      ],
      // Disallow specified global variables
      'no-restricted-globals': 'error',
      // Disallow specified modules when loaded by import
      'no-restricted-imports': 'off', // Handled by TS-ESLint
      // Disallow certain properties on certain objects
      'no-restricted-properties': 'error',
      // Disallow specified syntax
      'no-restricted-syntax': 'error',
      // Disallow assignment operators in return statements
      'no-return-assign': [
        'error',
        //  Disallow assignments unless they are enclosed in parentheses
        'always', // or 'except-parens'
      ],
      // Disallow javascript: URLs
      'no-script-url': 'error',
      // Disallow comma operators
      'no-sequences': [
        'error',
        {
          // Whether to allow comma operators in parentheses
          allowInParentheses: false,
        },
      ],
      // Disallow variable declarations from shadowing variables declared in the outer scope
      'no-shadow': 'off', // Handled by TS-ESLint
      // Disallow identifiers from shadowing restricted names
      'no-shadow-restricted-names': [
        'error',
        {
          // Whether to reports declarations of globalThis
          reportGlobalThis: false,
        },
      ],
      // Disallow ternary operators
      'no-ternary': 'off', // Not wanted
      // Disallow throwing literals as exceptions
      'no-throw-literal': 'error',
      // Disallow initializing variables to undefined
      'no-undef-init': 'error',
      // Disallow the use of undefined as an identifier
      'no-undefined': 'off', // Needed when `undefined` should be returned instead of `null`
      // Disallow dangling underscores in identifiers
      'no-underscore-dangle': [
        'error',
        {
          // Allow specified identifiers to have dangling underscores
          allow: [],
          // Whether to disallow dangling underscores in members of the `this` object
          allowAfterThis: false,
          // Whether to disallow dangling underscores in members of the super object
          allowAfterSuper: false,
          // Whether to disallow dangling underscores in members of the this.constructor object
          allowAfterThisConstructor: false,
          // Whether to allow dangling underscores in method names
          enforceInMethodNames: false,
          // Whether to allow dangling underscores in es2022 class fields names
          enforceInClassFields: false,
          // Whether to allow dangling underscores in variable names assigned by array destructuring
          allowInArrayDestructuring: true,
          // Whether to allow dangling underscores in variable names assigned by object destructuring
          allowInObjectDestructuring: true,
          // Whether to allow dangling underscores in function parameter names
          allowFunctionParams: true,
        },
      ],
      // Disallow ternary operators when simpler alternatives exist
      'no-unneeded-ternary': [
        'error',
        {
          // Whether to allow the conditional expression as a default assignment pattern
          defaultAssignment: true,
        },
      ],
      // Disallow unused expressions
      'no-unused-expressions': 'off', // Handled by TS-ESLint
      // Disallow unused labels
      'no-unused-labels': 'error',
      // Disallow unnecessary calls to .call() and .apply()
      'no-useless-call': 'error',
      // Disallow unnecessary catch clauses
      'no-useless-catch': 'error',
      // Disallow unnecessary computed property keys in objects and classes
      'no-useless-computed-key': [
        'error',
        {
          // Whether to enforce this rule for class members
          enforceForClassMembers: true,
        },
      ],
      // Disallow unnecessary concatenation of literals or template literals
      'no-useless-concat': 'error',
      // Disallow unnecessary constructors
      'no-useless-constructor': 'off', // Handled by TS-ESLint
      // Disallow unnecessary escape characters
      'no-useless-escape': [
        'error',
        {
          // Array of characters that should be allowed to have unnecessary escapes in regular expressions
          allowRegexCharacters: [],
        },
      ],
      // Disallow renaming import, export, and destructured assignments to the same name
      'no-useless-rename': [
        'error',
        {
          // Whether to not check imports
          ignoreImport: false,
          // Whether to not check exports
          ignoreExport: false,
          // Whether to not check destructuring assignments
          ignoreDestructuring: false,
        },
      ],
      // Disallow redundant return statements
      'no-useless-return': 'error',
      // Require let or const instead of var
      'no-var': 'error',
      // Disallow void operators
      'no-void': [
        'error',
        {
          // Whether to not error on cases that the void operator is used as a statement,
          allowAsStatement: true,
        },
      ],
      // Disallow specified warning terms in comments
      'no-warning-comments': [
        'error',
        {
          // Array of terms to match
          terms: [],
          // String that configures where in your comments to check for matches
          location: 'start',
          // Array of characters that are ignored at the start of a comment, when location is "start"
          decoration: undefined,
        },
      ],
      // Disallow with statements
      'no-with': 'error',
      // Require or disallow method and property shorthand syntax for object literals
      'object-shorthand': [
        'error',
        // Expects that the shorthand will be used whenever possible
        'always', // or 'methods' or 'properties' or 'never' or 'consistent' or 'consistent-as-needed'
        {
          // Prefer long-form syntax whenever the object key is a string literal
          avoidQuotes: false,
          // Whether to ignore errors for constructors
          ignoreConstructors: false,
          // Pattern for methods where shorthand will not be enforced
          methodsIgnorePattern: undefined,
          // Whether methods are preferred over explicit-return arrow functions for function properties
          avoidExplicitReturnArrows: false,
        },
      ],
      // Enforce variables to be declared either together or separately in functions
      'one-var': [
        'error',
        // Always requires one variable declaration per scope
        'never', // or 'always' or 'consecutive'
      ],
      // Require or disallow assignment operator shorthand where possible
      'operator-assignment': [
        'error',
        // Always require shorthand assignment operators
        'always', // or 'never'
      ],
      // Require using arrow functions for callbacks
      'prefer-arrow-callback': [
        'error',
        {
          // Whether to prohibit named functions as callbacks or function arguments
          allowNamedFunctions: false,
          // Whether to allow unbound function expressions containing this to be used as callbacks
          allowUnboundThis: true,
        },
      ],
      // Require const declarations for variables that are never reassigned after declared
      'prefer-const': [
        'error',
        {
          // The kind of the way to address variables in destructuring
          destructuring: 'any',
          // Avoid conflicting with no-use-before-define rule
          ignoreReadBeforeAssign: false,
        },
      ],
      // Require destructuring from arrays and/or objects
      'prefer-destructuring': 'off', // Handled by TS-ESLint
      // Disallow the use of Math.pow in favor of the ** operator
      'prefer-exponentiation-operator': 'error',
      // Enforce using named capture group in regular expression
      'prefer-named-capture-group': 'error',
      // Disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
      'prefer-numeric-literals': 'error',
      // Disallow use of Object.prototype.hasOwnProperty.call() and prefer use of Object.hasOwn()
      'prefer-object-has-own': 'error',
      // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
      'prefer-object-spread': 'error',
      // Require using Error objects as Promise rejection reasons
      'prefer-promise-reject-errors': 'off', // Handled by TS-ESLint
      // Disallow use of the RegExp constructor in favor of regular expression literals
      'prefer-regex-literals': [
        'error',
        {
          // Whether to additionally check for unnecessarily wrapped regex literals
          disallowRedundantWrapping: true,
        },
      ],
      // Require rest parameters instead of arguments
      'prefer-rest-params': 'error',
      // Require spread operators instead of .apply()
      'prefer-spread': 'error',
      // Require template literals instead of string concatenation
      'prefer-template': 'error',
      // Enforce the consistent use of the radix argument when using parseInt()
      radix: [
        'error',
        // Enforces providing a radix but disallows providing the 10 radix
        'as-needed',
      ],
      // Disallow async functions which have no await expression
      'require-await': 'off', // Handled by TS-ESLint
      // Enforce the use of u or v flag on regular expressions
      'require-unicode-regexp': [
        'off', // Not needed
        {
          // Requires a particular Unicode regex flag
          requireFlag: undefined,
        },
      ],
      // Require generator functions to contain yield
      'require-yield': 'error',
      // Enforce sorted import declarations within modules
      'sort-imports': [
        'error',
        {
          // Whether to ignore case
          ignoreCase: true,
          // Whether to ignore declaration order
          ignoreDeclarationSort: true,
          // Whether to ignore member order
          ignoreMemberSort: false,
          // Member syntax sort order
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          // Whether to allow separated groups of imports
          allowSeparatedGroups: false,
        },
      ],
      // Require object keys to be sorted
      'sort-keys': [
        'off', // Not wanted
        // Enforce properties to be in ascending order.
        'asc',
        {
          // Whether to enforce properties to be in case-sensitive order
          caseSensitive: true,
          // Minimum number of keys that an object should have
          minKeys: 2,
          // Whether to  enforce properties to be in natural order
          natural: false,
          // Whether to allow grouping object keys through line breaks
          allowLineSeparatedGroups: true,
          // Whether to ignore all computed keys
          ignoreComputedKeys: false,
        },
      ],
      // Require variables within the same declaration block to be sorted
      'sort-vars': [
        'off', // Not wanted
        {
          // Whether to ignore the case-sensitivity of the variables order
          ignoreCase: true,
        },
      ],
      // Require or disallow strict mode directives
      strict: [
        'off', // Handled by tsconfig.json
        // Requires one strict mode directive in the global scope
        'safe', // or 'global' or 'function' or 'never'
      ],
      // Require symbol descriptions
      'symbol-description': 'error',
      // Require var declarations be placed at the top of their containing scope
      'vars-on-top': 'error',
      // Require or disallow “Yoda” conditions
      yoda: [
        'error',
        // The literal value must always come first
        'never',
        {
          // Whether to allow Yoda conditions in range comparisons which are wrapped directly in parentheses
          exceptRange: false,
          // Whether to report Yoda conditions only for the equality operators
          onlyEquality: false,
        },
      ],
    },
  },

  // TypeScript ESLint
  {
    rules: {
      // Require that function overload signatures be consecutive
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      // Require consistently using either T[] or Array<T> for arrays
      '@typescript-eslint/array-type': [
        'error',
        {
          // The array type expected for mutable cases
          default: 'array',
          // The array type expected for readonly cases
          readonly: 'array',
        },
      ],
      // Disallow awaiting a value that is not a Thenable
      '@typescript-eslint/await-thenable': 'error',
      // Disallow @ts-<directive> comments or require descriptions after directives
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-check': 'allow-with-description',
          'ts-expect-error': 'allow-with-description',
          'ts-ignore': 'allow-with-description',
          'ts-nocheck': 'allow-with-description',
          // Minimum length for descriptions when using the allow-with-description option
          minimumDescriptionLength: 3,
        },
      ],
      // Disallow // tslint:<rule-flag> comments
      '@typescript-eslint/ban-tslint-comment': 'error',
      // Enforce that literals on classes are exposed in a consistent style
      '@typescript-eslint/class-literal-property-style': [
        'error',
        // Requires to be defined using readonly modifier
        'fields', // (or 'getters')
      ],
      // Enforce that class methods utilize this
      '@typescript-eslint/class-methods-use-this': [
        'off', // Not wanted
        {
          // Ignore members marked with the override modifier
          ignoreOverrideMethods: true,
          // Ignore class members that are defined within a class that implements a type
          ignoreClassesThatImplementAnInterface: true,
        },
      ],
      // Enforce specifying generic type arguments on type annotation or constructor name of a constructor call
      '@typescript-eslint/consistent-generic-constructors': [
        'error',
        // Type arguments that only appear on the type annotation are disallowed
        'constructor', // or 'type-annotation'
      ],
      // Require or disallow the Record type
      '@typescript-eslint/consistent-indexed-object-style': [
        'error',
        // Only allow the Record type
        'record', // or 'index-signature'
      ],
      // Require return statements to either always or never specify values
      '@typescript-eslint/consistent-return': [
        'off', // Does not work well with switch statements over enums
        {
          // Always either specify values or return undefined explicitly or implicitly.
          treatUndefinedAsUnspecified: false,
        },
      ],
      // Enforce consistent usage of type assertions
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        {
          // Enforce that you always use ... as foo
          assertionStyle: 'as', // or 'angle-bracket' or 'never'
          // Prefer type declarations for array literals used as variable initializers, rather than type assertions
          arrayLiteralTypeAssertions: 'allow', // or 'allow-as-parameter' or 'never'
          // Prefer type declarations for object literals used as variable initializers, rather than type assertions
          objectLiteralTypeAssertions: 'allow', // or 'allow-as-parameter' or 'never'
        },
      ],
      // Enforce type definitions to consistently use either interface or type
      '@typescript-eslint/consistent-type-definitions': [
        'error',
        // Which type definition syntax to prefer
        'interface', // or 'type'
      ],
      // Enforce consistent usage of type exports
      '@typescript-eslint/consistent-type-exports': [
        'error',
        {
          // Whether the rule will autofix "mixed" export cases using TS inline type specifiers
          fixMixedExportsWithInlineTypeSpecifier: false,
        },
      ],
      // Enforce consistent usage of type imports
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          // Whether to disallow type imports in type annotations
          disallowTypeAnnotations: true,
          // The expected type modifier to be added when an import is detected as used only in the type position
          fixStyle: 'separate-type-imports', // or 'inline-type-imports'
          // The expected import kind for type-only imports
          prefer: 'type-imports', // or 'no-type-imports'
        },
      ],
      // Enforce default parameters to be last
      '@typescript-eslint/default-param-last': 'off', // Not wanted
      // Enforce dot notation whenever possible
      '@typescript-eslint/dot-notation': [
        'error',
        {
          // Whether to allow accessing class members marked as private with array notation
          allowPrivateClassPropertyAccess: false,
          // Whether to allow accessing class members marked as protected with array notation
          allowProtectedClassPropertyAccess: false,
          // Whether to allow accessing properties matching an index signature with array notation
          allowIndexSignaturePropertyAccess: false,
        },
      ],
      // Require explicit return types on functions and class methods
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          // Whether to allow arrow functions that start with the `void` keyword
          allowConciseArrowFunctionExpressionsStartingWithVoid: false,
          // Whether to ignore arrow functions immediately returning a `as const` value
          allowDirectConstAssertionInArrowFunctions: true,
          // Whether to ignore function expressions (functions which are not part of a declaration)
          allowExpressions: false,
          // Whether to ignore functions that don't have generic type parameters
          allowFunctionsWithoutTypeParameters: false,
          // Whether to ignore functions immediately returning another function expression
          allowHigherOrderFunctions: true,
          // Whether to ignore immediately invoked function expressions (IIFEs)
          allowIIFEs: false,
          // Whether to ignore type annotations on the variable of function expressions
          allowTypedFunctionExpressions: true,
          // An array of function/method names that will not have their arguments or return values checked
          allowedNames: [],
        },
      ],
      // Require explicit accessibility modifiers on class properties and methods
      '@typescript-eslint/explicit-member-accessibility': 'off', // Not wanted
      // Require explicit return and argument types on exported functions' and classes' public class methods
      '@typescript-eslint/explicit-module-boundary-types': [
        'error',
        {
          // Whether to ignore arguments that are explicitly typed as `any`
          allowArgumentsExplicitlyTypedAsAny: true,
          // Whether to ignore return type annotations on body-less arrow functions that return an `as const` assertion
          allowDirectConstAssertionInArrowFunctions: true,
          // Whether to ignore return type annotations on functions immediately returning another function expression
          allowHigherOrderFunctions: true,
          // Whether to ignore return type annotations on functions with overload signatures
          allowOverloadFunctions: false,
          // Whether to ignore type annotations on the variable of a function expression
          allowTypedFunctionExpressions: true,
          // An array of function/method names that will not have their arguments or return values checked
          allowedNames: [],
        },
      ],
      // Require or disallow initialization in variable declarations
      '@typescript-eslint/init-declarations': 'off', // Not working well with try-catch blocks
      // Enforce a maximum number of parameters in function definitions
      '@typescript-eslint/max-params': [
        'error',
        {
          // Maximum number of parameters allowed
          max: 7,
          // Whether to count a `this` declaration when the type is `void`
          countVoidThis: false,
        },
      ],
      // Require a consistent member declaration order
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: {
            // Organizing on member type groups such as methods vs. properties
            memberTypes: undefined,
            // Whether to put all optional members first or all required members first
            optionalityOrder: undefined, // or 'optional-first' or 'required-first'
            // Organizing based on member names
            order: 'as-written', // or 'alphabetically' ...
          },
        },
      ],
      // Enforce using a particular method signature syntax
      '@typescript-eslint/method-signature-style': [
        'error',
        // Enforce using method or property signature for functions
        'method', // or 'property'
      ],
      // Enforce naming conventions for everything across a codebase
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'default', format: ['camelCase'], leadingUnderscore: 'forbid', trailingUnderscore: 'forbid' },
        { selector: 'import', format: ['camelCase', 'PascalCase'] },
        { selector: 'class', format: ['PascalCase'] },
        { selector: 'interface', format: ['PascalCase'] },
        { selector: 'typeAlias', format: ['PascalCase'] },
        { selector: 'enum', format: ['PascalCase'] },
        { selector: 'enumMember', format: ['PascalCase'] },
        { selector: 'function', format: ['camelCase', 'PascalCase'] },
        { selector: 'variable', format: ['camelCase', 'PascalCase', 'UPPER_CASE'] },
        { selector: 'parameter', format: ['camelCase'], leadingUnderscore: 'allow' },
        { selector: 'typeParameter', format: ['PascalCase'] },
        { selector: 'objectLiteralProperty', format: [] },
        { selector: 'typeProperty', format: ['camelCase', 'snake_case'] },
      ],
      // Disallow generic Array constructors
      '@typescript-eslint/no-array-constructor': 'error',
      // Disallow using the delete operator on array values
      '@typescript-eslint/no-array-delete': 'error',
      // Require .toString() and .toLocaleString() to only be called on objects which provide useful information
      '@typescript-eslint/no-base-to-string': [
        'error',
        {
          // Stringified regular expressions of type names to ignore
          ignoredTypeNames: ['error', 'RegExp', 'URL', 'URLSearchParams'],
        },
      ],
      // Disallow non-null assertion in locations that may be confusing
      '@typescript-eslint/no-confusing-non-null-assertion': 'error',
      // Require expressions of type void to appear in statement position
      '@typescript-eslint/no-confusing-void-expression': [
        'error',
        {
          // Whether to ignore "shorthand" arrow functions
          ignoreArrowShorthand: false,
          // Whether to ignore returns that start with the `void` operator
          ignoreVoidOperator: false,
          // Whether to ignore returns from functions with explicit and contextual`void` return types
          ignoreVoidReturningFunctions: false,
        },
      ],
      // Disallow using code marked as @deprecated
      '@typescript-eslint/no-deprecated': [
        'error',
        {
          // Type specifiers that can be allowed
          allow: [],
        },
      ],
      // Disallow duplicate enum member values
      '@typescript-eslint/no-duplicate-enum-values': 'error',
      // Disallow duplicate constituents of union or intersection types
      '@typescript-eslint/no-duplicate-type-constituents': [
        'error',
        {
          // Whether to ignore `&` intersections
          ignoreIntersections: false,
          // Whether to ignore `|` unions
          ignoreUnions: false,
        },
      ],
      // Disallow using the delete operator on computed key expressions
      '@typescript-eslint/no-dynamic-delete': 'error',
      // Disallow empty functions
      '@typescript-eslint/no-empty-function': [
        'error',
        {
          // Type specifiers that can be allowed
          allow: [],
        },
      ],
      // Disallow accidentally using the "empty object" type
      '@typescript-eslint/no-empty-object-type': [
        'error',
        {
          // Whether to allow empty interfaces
          allowInterfaces: 'never',
          // Whether to allow empty object type literals
          allowObjectTypes: 'never',
          // A regular expression to allow interfaces and object type aliases with the configured name
          allowWithName: undefined,
        },
      ],
      // Disallow the `any` type
      '@typescript-eslint/no-explicit-any': [
        'off', // Not wanted
        {
          // Whether to enable auto-fixing in which the `any` type is converted to the `unknown` type
          fixToUnknown: false,
          // Whether to ignore rest parameter arrays
          ignoreRestArgs: false,
        },
      ],
      // Disallow extra non-null assertions
      '@typescript-eslint/no-extra-non-null-assertion': 'error',
      // Disallow classes used as namespaces
      '@typescript-eslint/no-extraneous-class': [
        'error',
        {
          // Whether to allow extraneous classes that contain only a constructor
          allowConstructorOnly: false,
          // Whether to allow extraneous classes that have no body
          allowEmpty: true,
          // Whether to allow extraneous classes that only contain static members
          allowStaticOnly: false,
          // Whether to allow extraneous classes that include a decorator
          allowWithDecorator: false,
        },
      ],
      // Require Promise-like statements to be handled appropriately
      '@typescript-eslint/no-floating-promises': [
        'error',
        {
          // Type specifiers of functions whose calls are safe to float
          allowForKnownSafeCalls: [],
          // Type specifiers that are known to be safe to float
          allowForKnownSafePromises: [],
          // Whether to check all "Thenable"s, not just the built-in Promise type
          checkThenables: false,
          // Whether to ignore async IIFEs
          ignoreIIFE: false,
          // Whether to ignore `void` expressions
          ignoreVoid: true,
        },
      ],
      // Disallow iterating over an array with a for-in loop
      '@typescript-eslint/no-for-in-array': 'error',
      // Disallow the use of eval()-like functions
      '@typescript-eslint/no-implied-eval': 'error',
      // Enforce the use of top-level import type qualifier
      '@typescript-eslint/no-import-type-side-effects': 'error',
      // Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
      '@typescript-eslint/no-inferrable-types': [
        'error',
        {
          // Whether to ignore function parameters
          ignoreParameters: true,
          // Whether to ignore class properties
          ignoreProperties: true,
        },
      ],
      // Disallow void type outside of generic or return types
      '@typescript-eslint/no-invalid-void-type': [
        'error',
        {
          // Whether a `this` parameter of a function may be `void`
          allowAsThisParameter: false,
          // Whether `void` can be used as a valid value for generic type parameters
          allowInGenericTypeArguments: true,
        },
      ],
      // Disallow function declarations that contain unsafe references inside loop statements
      '@typescript-eslint/no-loop-func': 'error',
      // Disallow magic numbers
      '@typescript-eslint/no-magic-numbers': [
        'error',
        {
          // Specific numbers that are allowed
          ignore: [-1, 0, 1, 2, 3, 4, 5, 8, 16, 32, 60, 64, 100, 1000, 3000],
          // Whether to ignore numbers used as array indexes
          ignoreArrayIndexes: true,
          // Whether default values are considered okay
          ignoreDefaultValues: true,
          // Whether numbers used as initial values of class fields are considered okay
          ignoreClassFieldInitialValues: true,
          // Whether enums used in TypeScript are considered okay
          ignoreEnums: true,
          // Whether numbers used in TypeScript numeric literal types are considered okay
          ignoreNumericLiteralTypes: true,
          // Whether readonly class properties are considered okay
          ignoreReadonlyClassProperties: true,
          // Whether numbers used to index types are okay
          ignoreTypeIndexes: true,
          // Whether number variables must be constants
          enforceConst: false,
          // Whether object properties should be checked
          detectObjects: false,
        },
      ],
      // Disallow the void operator except when used to discard a value
      '@typescript-eslint/no-meaningless-void-operator': [
        'error',
        {
          // Whether to suggest removing void when the argument has type never
          checkNever: false,
        },
      ],
      // Enforce valid definition of new and constructor
      '@typescript-eslint/no-misused-new': 'error',
      // Disallow Promises in places not designed to handle them
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          // Whether to warn when a Promise is provided to conditional statements
          checksConditionals: true,
          // Whether to warn when `...` spreading a `Promise`
          checksSpreads: true,
          // Whether to warn when a Promise is returned from a function typed as returning `void`
          checksVoidReturn: true,
        },
      ],
      // Disallow using the spread operator when it might cause unexpected behavior
      '@typescript-eslint/no-misused-spread': [
        'error',
        {
          // An array of type specifiers that are known to be safe to spread
          allow: [],
        },
      ],
      // Disallow enums from having both number and string members
      '@typescript-eslint/no-mixed-enums': 'error',
      // Disallow TypeScript namespaces
      '@typescript-eslint/no-namespace': [
        'error',
        {
          // Whether to allow `declare` with custom TypeScript namespaces
          allowDeclarations: false,
          // Whether to allow `declare` with custom TypeScript namespaces inside definition files
          allowDefinitionFiles: true,
        },
      ],
      // Disallow non-null assertions in the left operand of a nullish coalescing operator
      '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
      // Disallow non-null assertions after an optional chain expression
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
      // Disallow non-null assertions using the ! postfix operator
      '@typescript-eslint/no-non-null-assertion': 'off',
      // Disallow variable redeclaration
      '@typescript-eslint/no-redeclare': [
        'off', // Handled by TypeScript compiler
        {
          // Whether to ignore declaration merges between certain TypeScript declaration types
          ignoreDeclarationMerge: true,
        },
      ],
      // Disallow members of unions and intersections that do nothing or override type information
      '@typescript-eslint/no-redundant-type-constituents': 'error',
      // Disallow invocation of require()
      '@typescript-eslint/no-require-imports': [
        'error',
        {
          // Patterns of import paths to allow requiring from
          allow: [],
          // Allows `require` statements in import declarations
          allowAsImport: false,
        },
      ],
      // Disallow specified modules when loaded by import
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          // Whether to allow imports for a path
          paths: [
            {
              name: 'class-validator',
              importNames: ['Expose', 'IsInt', 'IsNumberString', 'IsOptional'],
              message: 'Please use custom decorators instead.',
              allowTypeImports: true,
            },
            {
              name: '@nestjs/common',
              importNames: ['ClassSerializerInterceptor'],
              message: 'Please use custom ExcludeNullSerializerInterceptor interceptor instead.',
              allowTypeImports: true,
            },
          ],
          // Specify multiple modules to restrict
          patterns: [],
        },
      ],
      // Disallow certain types
      '@typescript-eslint/no-restricted-types': [
        'error',
        {
          // An object whose keys are the types you want to ban, and the values are error messages
          types: {},
        },
      ],
      // Disallow variable declarations from shadowing variables declared in the outer scope
      '@typescript-eslint/no-shadow': [
        'error',
        {
          // Prevents shadowing of built-in global variables
          builtinGlobals: false,
          // Report shadowing behavior
          hoist: 'functions-and-types',
          // An array of identifier names for which shadowing is allowed.
          allow: [],
          // Ignore variables in their initializers when the shadowed variable is presumably still uninitialized
          ignoreOnInitialization: true,
          // Whether to ignore types named the same as a variable
          ignoreTypeValueShadow: true,
          // Whether to ignore function parameters named the same as a variable
          ignoreFunctionTypeParameterNameValueShadow: true,
        },
      ],
      // Disallow aliasing this
      '@typescript-eslint/no-this-alias': [
        'error',
        {
          // Whether to ignore destructurings
          allowDestructuring: true,
          // Names to ignore
          allowedNames: [],
        },
      ],
      // Disallow unnecessary equality comparisons against boolean literals
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': [
        'error',
        {
          // Whether to allow comparisons between nullable boolean variables and `false`
          allowComparingNullableBooleansToFalse: true,
          // Whether to allow comparisons between nullable boolean variables and `true`
          allowComparingNullableBooleansToTrue: true,
        },
      ],
      // Disallow conditionals where the type is always truthy or always falsy
      '@typescript-eslint/no-unnecessary-condition': [
        'error',
        {
          // Whether to ignore constant loop conditions
          allowConstantLoopConditions: 'never',
          // Whether to check the asserted argument of a type predicate function for unnecessary conditions
          checkTypePredicates: false,
        },
      ],
      // Disallow unnecessary assignment of constructor property parameter
      '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
      // Disallow unnecessary namespace qualifiers
      '@typescript-eslint/no-unnecessary-qualifier': 'error',
      // Disallow unnecessary template expressions
      '@typescript-eslint/no-unnecessary-template-expression': 'error',
      // Disallow type arguments that are equal to the default
      '@typescript-eslint/no-unnecessary-type-arguments': 'error',
      // Disallow type assertions that do not change the type of expression
      '@typescript-eslint/no-unnecessary-type-assertion': [
        'error',
        {
          // Whether to check literal const assertions
          checkLiteralConstAssertions: false,
          // A list of type names to ignore
          typesToIgnore: [],
        },
      ],
      // Disallow unnecessary constraints on generic types
      '@typescript-eslint/no-unnecessary-type-constraint': 'error',
      // Disallow conversion idioms when they do not change the type or value of the expression
      '@typescript-eslint/no-unnecessary-type-conversion': 'error',
      // Disallow type parameters that aren't used multiple times
      '@typescript-eslint/no-unnecessary-type-parameters': 'error',
      // Disallow calling a function with a value with type any
      '@typescript-eslint/no-unsafe-argument': 'error',
      // Disallow assigning a value with type any to variables and properties
      '@typescript-eslint/no-unsafe-assignment': 'error',
      // Disallow calling a value with type any
      '@typescript-eslint/no-unsafe-call': 'error',
      // Disallow unsafe declaration merging
      '@typescript-eslint/no-unsafe-declaration-merging': 'error',
      // Disallow comparing an enum value with a non-enum value
      '@typescript-eslint/no-unsafe-enum-comparison': 'off', // Not wanted
      // Disallow using the unsafe built-in Function type
      '@typescript-eslint/no-unsafe-function-type': 'error',
      // Disallow member access on a value with type any
      '@typescript-eslint/no-unsafe-member-access': 'error',
      // Disallow returning a value with type any from a function
      '@typescript-eslint/no-unsafe-return': 'error',
      // Disallow type assertions that narrow a type
      '@typescript-eslint/no-unsafe-type-assertion': 'off', // Needed as workaround to fix wrong types
      // Require unary negation to take a number
      '@typescript-eslint/no-unsafe-unary-minus': 'error',
      // Disallow unused expressions
      '@typescript-eslint/no-unused-expressions': 'error',
      // Disallow unused variables
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          // Checks all variables for usage
          vars: 'all',
          // Unused positional arguments that occur before the last used argument will not be checked
          args: 'after-used',
          // Exceptions not to check for usage
          argsIgnorePattern: undefined,
          // All named arguments must be used
          caughtErrors: 'all',
          // Exceptions not to check for usage
          caughtErrorsIgnorePattern: undefined,
          // Exceptions not to check for usage
          destructuredArrayIgnorePattern: undefined,
          // Ignores rest siblings when destructuring objects
          ignoreRestSiblings: false,
          // Ignores classes containing static initialization blocks
          ignoreClassWithStaticInitBlock: false,
          // Report variables that match any of the valid ignore pattern options
          reportUsedIgnorePattern: false,
        },
      ],
      // Disallow the use of variables before they are defined
      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          // Whether the rule checks function declarations
          functions: false,
          // Whether the rule checks class declarations
          classes: true,
          // Whether the rule checks variable declarations
          variables: true,
          // Whether the rule checks enum declarations
          enums: true,
          // Whether the rule checks references to enums
          typedefs: true,
          // Whether the rule checks references to types
          ignoreTypeReferences: true,
          // Always allows references in export declarations
          allowNamedExports: false,
        },
      ],
      // Disallow unnecessary constructors
      '@typescript-eslint/no-useless-constructor': 'error',
      // Disallow empty exports that don't change anything in a module file
      '@typescript-eslint/no-useless-empty-export': 'error',
      // Disallow using confusing built-in primitive class wrappers
      '@typescript-eslint/no-wrapper-object-types': 'error',
      // Enforce non-null assertions over explicit type assertions
      '@typescript-eslint/non-nullable-type-assertion-style': 'error',
      // Disallow throwing non-Error values as exceptions
      '@typescript-eslint/only-throw-error': [
        'error',
        {
          // Type specifiers that can be thrown
          allow: [],
          // Whether to allow rethrowing caught values that are not `Error` objects
          allowRethrowing: false,
          // Whether to always allow throwing values typed as `any`
          allowThrowingAny: true,
          // Whether to always allow throwing values typed as `unknown`
          allowThrowingUnknown: true,
        },
      ],
      // Require or disallow parameter properties in class constructors
      '@typescript-eslint/parameter-properties': [
        'off', // Not wanted
        {
          // Whether to allow certain kinds of properties to be ignored
          allow: [],
          // Whether to prefer class properties or parameter properties
          prefer: 'class-property',
        },
      ],
      // Enforce the use of as const over literal type
      '@typescript-eslint/prefer-as-const': 'error',
      // Require destructuring from arrays and/or objects
      '@typescript-eslint/prefer-destructuring': [
        'error',
        {
          // Whether to enforce destructuring for arrays
          array: true,
          // Whether to enforce destructuring for objects
          object: true,
        },
        {
          // Whether the object destructuring applies to renamed variables
          enforceForRenamedProperties: false,
          // Whether the object destructuring applies to declarations with type annotations
          enforceForDeclarationWithTypeAnnotation: false,
        },
      ],
      // Require each enum member value to be explicitly initialized
      '@typescript-eslint/prefer-enum-initializers': 'off', // Not wanted
      // Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result
      '@typescript-eslint/prefer-find': 'error',
      // Enforce the use of for-of loop over the standard for loop where possible
      '@typescript-eslint/prefer-for-of': 'error',
      // Enforce using function types instead of interfaces with call signatures
      '@typescript-eslint/prefer-function-type': 'error',
      // Enforce includes method over indexOf method
      '@typescript-eslint/prefer-includes': 'error',
      // Require all enum members to be literal values
      '@typescript-eslint/prefer-literal-enum-member': 'error',
      // Require using namespace keyword over module keyword to declare custom TypeScript modules
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      // Enforce using the nullish coalescing operator instead of logical assignments or chaining
      '@typescript-eslint/prefer-nullish-coalescing': [
        'error',
        {
          // Whether to ignore arguments to the `Boolean` constructor
          ignoreBooleanCoercion: false,
          // Whether to ignore cases that are located within a conditional test
          ignoreConditionalTests: true,
          // Whether to ignore any if statements that could be simplified by using the nullish coalescing operator
          ignoreIfStatements: false,
          // Whether to ignore any logical or expressions that are part of a mixed logical expression
          ignoreMixedLogicalExpressions: false,
          //  Whether to ignore all (`true`) or some (an object with properties) primitive types
          ignorePrimitives: { bigint: false, boolean: false, number: false, string: false },
          // Whether to ignore any ternary expressions that could be simplified by using the nullish coalescing operator
          ignoreTernaryTests: false,
        },
      ],
      // Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects
      '@typescript-eslint/prefer-optional-chain': [
        'error',
        {
          // Whether to check operands that are typed as `any`
          checkAny: true,
          // Whether to check operands that are typed as `bigint`
          checkBigInt: true,
          // Whether to check operands that are typed as `boolean`
          checkBoolean: true,
          // Whether to check operands that are typed as `number`
          checkNumber: true,
          // Whether to check operands that are typed as `string`
          checkString: true,
          // Whether to check operands that are typed as `unknown`
          checkUnknown: true,
          // Whether to skip operands that are not typed with `null` and/or `undefined`
          requireNullish: false,
        },
      ],
      // Require using Error objects as Promise rejection reasons
      '@typescript-eslint/prefer-promise-reject-errors': [
        'error',
        {
          // Whether to allow calls to Promise.reject() with no arguments
          allowEmptyReject: false,
          //  Whether to always allow throwing values typed as `any`
          allowThrowingAny: false,
          // Whether to always allow throwing values typed as `unknown`
          allowThrowingUnknown: false,
        },
      ],
      // Require private members to be marked as readonly if they're never modified outside of the constructor
      '@typescript-eslint/prefer-readonly': [
        'error',
        {
          // Whether to restrict checking only to members immediately assigned a lambda value
          onlyInlineLambdas: false,
        },
      ],
      // Require function parameters to be typed as readonly to prevent accidental mutation of inputs
      '@typescript-eslint/prefer-readonly-parameter-types': [
        'off', // Not wanted
        {
          // An array of type specifiers to ignore
          allow: [],
          // Whether to check class parameter properties
          checkParameterProperties: true,
          // Whether to ignore parameters which don't explicitly specify a type
          ignoreInferredTypes: true,
          // Whether to treat all mutable methods as though they are readonly
          treatMethodsAsReadonly: false,
        },
      ],
      // Enforce using type parameter when calling Array#reduce instead of using a type assertion
      '@typescript-eslint/prefer-reduce-type-parameter': 'error',
      // Enforce RegExp#exec over String#match if no global flag is provided
      '@typescript-eslint/prefer-regexp-exec': 'error',
      // Enforce that this is used when only this type is returned
      '@typescript-eslint/prefer-return-this-type': 'error',
      // Enforce using String#startsWith and String#endsWith over other equivalent methods of checking substrings
      '@typescript-eslint/prefer-string-starts-ends-with': 'error',
      // Require any function or method that returns a Promise to be marked async
      '@typescript-eslint/promise-function-async': [
        'error',
        {
          // Whether to consider `any` and `unknown` to be Promises
          allowAny: true,
          // Any extra names of classes or interfaces to be considered Promises
          allowedPromiseNames: [],
          // Whether to check arrow functions
          checkArrowFunctions: true,
          // Whether to check standalone function declarations
          checkFunctionDeclarations: true,
          // Whether to check inline function expressions
          checkFunctionExpressions: true,
          // Whether to check methods on classes and object literals
          checkMethodDeclarations: true,
        },
      ],
      // Enforce that get() types should be assignable to their equivalent set() type
      '@typescript-eslint/related-getter-setter-pairs': 'error',
      // Require Array#sort and Array#toSorted calls to always provide a compareFunction
      '@typescript-eslint/require-array-sort-compare': [
        'error',
        {
          // Whether to ignore arrays in which all elements are strings
          ignoreStringArrays: true,
        },
      ],
      // Disallow async functions which do not return promises and have no await expression
      '@typescript-eslint/require-await': 'error',
      // Require both operands of addition to be the same type and be bigint, number, or string
      '@typescript-eslint/restrict-plus-operands': [
        'error',
        {
          // Whether to allow `any` typed values
          allowAny: true,
          // Whether to allow `boolean` typed values
          allowBoolean: false,
          // Whether to allow potentially `null` or `undefined` typed values
          allowNullish: false,
          // Whether to allow `bigint`/`number` typed values and `string` typed values to be added together
          allowNumberAndString: false,
          // Whether to allow `regexp` typed values
          allowRegExp: false,
          // Whether to skip compound assignments such as `+=`
          skipCompoundAssignments: undefined,
        },
      ],
      // Enforce template literal expressions to be of string type
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
          // Types to allow in template expressions
          allow: [],
          // Whether to allow `any` typed values in template expressions
          allowAny: false,
          // Whether to allow `array` typed values in template expressions
          allowArray: false,
          // Whether to allow `boolean` typed values in template expressions
          allowBoolean: true,
          // Whether to allow `nullish` typed values in template expressions
          allowNullish: false,
          // Whether to allow `number` typed values in template expressions
          allowNumber: true,
          // Whether to allow `regexp` typed values in template expressions
          allowRegExp: false,
        },
      ],
      // Enforce consistent awaiting of returned promises
      '@typescript-eslint/return-await': [
        'error',
        // Requires that all returned promises be awaited
        'always', // or 'in-try-catch' or 'error-handling-correctness-only' or 'never'
      ],
      // Disallow certain types in boolean expressions
      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        {
          // Whether to allow `any`s in a boolean context
          allowAny: true,
          // Whether to allow nullable `boolean`s in a boolean context
          allowNullableBoolean: false,
          // Whether to allow nullable `enum`s in a boolean context
          allowNullableEnum: false,
          // Whether to allow nullable `number`s in a boolean context
          allowNullableNumber: false,
          // Whether to allow nullable `object`s, `symbol`s, and functions in a boolean context
          allowNullableObject: true,
          // Whether to allow nullable `string`s in a boolean context
          allowNullableString: true,
          // Whether to allow `number`s in a boolean context
          allowNumber: false,
          // Whether to allow `string`s in a boolean context
          allowString: true,
        },
      ],
      // Require switch-case statements to be exhaustive
      '@typescript-eslint/switch-exhaustiveness-check': [
        'error',
        {
          // Whether 'default' cases on switch statements with exhaustive cases are allowed
          allowDefaultCaseForExhaustiveSwitch: true,
          // Whether 'default' clause is used to determine whether the switch statement is exhaustive for union type
          considerDefaultExhaustiveForUnions: false,
          // Regular expression for a comment that can indicate an intentionally omitted default case
          defaultCaseCommentPattern: undefined,
          // Whether a 'default' clause is required for switches on non-union types
          requireDefaultForNonUnion: false,
        },
      ],
      // Disallow certain triple slash directives in favor of ES6-style import declarations
      '@typescript-eslint/triple-slash-reference': [
        'error',
        {
          // What to enforce for `/// <reference lib="..." />` references
          lib: 'always',
          // What to enforce for `/// <reference path="..." />` references
          path: 'never',
          // What to enforce for `/// <reference types="..." />` references
          types: 'prefer-import',
        },
      ],
      // Enforce unbound methods are called with their expected scope
      '@typescript-eslint/unbound-method': [
        'error',
        {
          // Whether to skip checking whether `static` methods are correctly bound
          ignoreStatic: false,
        },
      ],
      // Disallow two overloads that could be unified into one with a union or an optional/rest parameter
      '@typescript-eslint/unified-signatures': [
        'error',
        {
          // Whether two parameters with different names should be considered different
          ignoreDifferentlyNamedParameters: false,
          // Whether two overloads with different JSDoc comments should be considered different
          ignoreOverloadsWithDifferentJSDoc: false,
        },
      ],
      // Enforce typing arguments in Promise rejection callbacks as unknown
      '@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',
    },
  },
)
