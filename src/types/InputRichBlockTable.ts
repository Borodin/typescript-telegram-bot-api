import { RichBlockTableCell, RichText } from './';

/**
 * ## InputRichBlockTable
 * A table, corresponding to the HTML tag <table>.
 * @see https://core.telegram.org/bots/api#inputrichblocktable
 */
export type InputRichBlockTable = {
  /**
   * Type of the block, always "table"
   */
  type: 'table';

  /**
   * Cells of the table
   */
  cells: RichBlockTableCell[][];

  /**
   * Optional. Pass True if the table has borders
   */
  is_bordered?: true;

  /**
   * Optional. Pass True if the table is striped
   */
  is_striped?: true;

  /**
   * Optional. Caption of the table
   */
  caption?: RichText;
};
