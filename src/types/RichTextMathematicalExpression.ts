/**
 * ## RichTextMathematicalExpression
 * A mathematical expression.
 * @see https://core.telegram.org/bots/api#richtextmathematicalexpression
 */
export type RichTextMathematicalExpression = {
  /**
   * Type of the rich text, always "mathematical_expression"
   */
  type: 'mathematical_expression';

  /**
   * The expression in LaTeX format
   */
  expression: string;
};
