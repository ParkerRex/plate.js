/** @jsx jsx */

import { PlateEditor } from '@udecode/plate-core/src/types/PlateEditor';
import { jsx } from '@udecode/plate-test-utils';
import { isCollapsed } from '@udecode/slate/src/interfaces/range/isCollapsed';

jsx;

const input = (
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any as PlateEditor;

const output = true;

it('should be', () => {
  expect(isCollapsed(input.selection)).toBe(output);
});
