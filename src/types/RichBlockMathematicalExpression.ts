/**
 * ## RichBlockMathematicalExpression
 * A block with a mathematical expression in LaTeX format, corresponding to the custom HTML tag <tg-math-block>.
 * @see https://core.telegram.org/bots/api#richblockmathematicalexpression
 */
export type RichBlockMathematicalExpression = {
  /**
   * Type of the block, always "mathematical_expression"
   */
  type: 'mathematical_expression';

  /**
   * The mathematical expression in LaTeX format
   */
  expression: string;
};
