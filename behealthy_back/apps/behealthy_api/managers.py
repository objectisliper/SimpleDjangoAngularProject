import abc


class AbstractExpression(metaclass=abc.ABCMeta):
    """
    Declare an abstract Interpret operation that is common to all nodes
    in the abstract syntax tree.
    """

    @abc.abstractmethod
    def interpret(self):
        pass


class Expression(AbstractExpression):
    def __init__(self, dictionary, parameters):
        self.parameters = parameters
        self.parameter = dictionary['parameter']
        self.related_to_value_by = dictionary['related_to_value_by']
        self.value = dictionary['value']

    def interpret(self):
        return comparise(self.parameters[self.parameter], self.related_to_value_by, self.value)


def expressions_comparison(first_expression, second_expression, operator):
    return {
        'or': first_expression or second_expression,
        'and': first_expression and second_expression,
        'and not': first_expression and not second_expression,
        'or not': first_expression or not second_expression
    }[operator.lower()]


def comparise(parameter, operator, value):
    return {
        '=': parameter == value,
        '>': parameter > value,
        '<': parameter < value,
        '>=': parameter >= value,
        '<=': parameter <= value
    }[operator]


def get_missed_params(existed_params):
    params = {'gender', 'age', 'abdominal_pain', 'systolic_bp', 'diastolic_bp'}
    existed_params = set(existed_params.keys())
    return params - existed_params


def interpret_expression(parameters, expression_dict, index=0):
    exp = Expression(expression_dict[index], parameters)
    resulted_bool = exp.interpret()
    if len(expression_dict) > 1 and index < len(expression_dict) - 1:
        resulted_bool = expressions_comparison(resulted_bool, interpret_expression(parameters, expression_dict, index + 1), expression_dict[index + 1]['related_to_previous_exp_by'])
    return resulted_bool
