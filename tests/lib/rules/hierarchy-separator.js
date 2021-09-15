/**
 * @fileoverview Deprecated hierarchy separator
 * @author Yann Braga
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/hierarchy-separator'),
  ruleTester = require('../../utils/rule-tester')

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

ruleTester.run('hierarchy-separator', rule, {
  valid: ["export default { title: 'Examples/Components/Button' }"],
  invalid: [
    {
      code: "export default { title: 'Examples|Components|Button' }",
      errors: [
        {
          type: 'ExportDefaultDeclaration',
          suggestions: [
            {
              output: "export default { title: 'Examples/Components/Button' }",
            },
          ],
        },
      ],
    },
    {
      code: "export default { title: 'Examples.Components.Button' }",
      errors: [
        {
          type: 'ExportDefaultDeclaration',
          suggestions: [
            {
              output: "export default { title: 'Examples/Components/Button' }",
            },
          ],
        },
      ],
    },
  ],
})
