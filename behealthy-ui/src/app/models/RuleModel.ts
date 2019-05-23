export class RuleModel {
  expressions: [SimpleExpression];
  question: string;
}

export class SimpleExpression {
  related_to_previous_exp_by?: string;
  parameter: string;
  related_to_value_by: string;
  value: string;
}
