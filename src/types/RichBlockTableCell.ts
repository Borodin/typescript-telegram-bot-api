import { RichText } from './';

/**
 * ## RichBlockTableCell
 * Cell in a table.
 * @see https://core.telegram.org/bots/api#richblocktablecell
 */
export type RichBlockTableCell = {
  /**
   * Optional. Text in the cell. If omitted, then the cell is invisible.
   */
  text?: RichText;

  /**
   * Optional. True, if the cell is a header cell
   */
  is_header?: true;

  /**
   * Optional. The number of columns the cell spans if it is bigger than 1
   */
  colspan?: number;

  /**
   * Optional. The number of rows the cell spans if it is bigger than 1
   */
  rowspan?: number;

  /**
   * Horizontal cell content alignment. Currently, must be one of "left", "center", or "right".
   */
  align: 'left' | 'center' | 'right';

  /**
   * Vertical cell content alignment. Currently, must be one of "top", "middle", or "bottom".
   */
  valign: 'top' | 'middle' | 'bottom';
};
