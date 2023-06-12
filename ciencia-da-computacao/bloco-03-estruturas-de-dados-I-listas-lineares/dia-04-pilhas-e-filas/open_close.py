from stack import Stack


def is_valid(string: str) -> bool:
    stack = Stack()

    if (len(string) % 2 != 0) or (len(string) == 0):
        return False

    for char in string:
        if char not in ["(", ")", "{", "}", "[", "]"]:
            return False

        if char in ["(", "{", "["]:
            stack.push(char)
        elif char == ")" and not stack.is_empty() and stack.peek() == "(":
            stack.pop()
        elif char == "}" and not stack.is_empty() and stack.peek() == "{":
            stack.pop()
        elif char == "]" and not stack.is_empty() and stack.peek() == "[":
            stack.pop()
        else:
            return False

    return stack.is_empty()
