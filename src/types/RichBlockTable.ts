import { RichBlockTableCell, RichText } from './';

/**
 * ## RichBlockTable
 * A table, corresponding to the HTML tag <table>.
 * @see https://core.telegram.org/bots/api#richblocktable
 */
export type RichBlockTable = {
  /**
   * Type of the block, always "table"
   */
  type: 'table';

  /**
   * Cells of the table
   */
  cells: RichBlockTableCell[][];

  /**
   * Optional. True, if the table has borders
   */
  is_bordered?: true;

  /**
   * Optional. True, if the table is striped
   */
  is_striped?: true;

  /**
   * Optional. Caption of the table
   */
  caption?: RichText;
};
