/**
 * Deserialize HTML text node to text.
 */
import { isHtmlText } from './isHtmlText';

export const htmlTextNodeToString = (node: HTMLElement | ChildNode) => {
  if (isHtmlText(node)) {
    const trimmedText = node.textContent?.replace(/^\n+|\n+$/g, '') ?? '';
    return trimmedText.length > 0 ? trimmedText : null;
  }
};
