def validate_email(email):
    import re
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

def validate_password(password):
    if len(password) < 8:
        return False
    if not any(char.isupper() for char in password):
        return False
    if not any(char.isdigit() for char in password):
        return False
    return True

def sanitize_input(user_input):
    import html
    user_input = user_input.strip()
    return html.escape(user_input)

def is_valid_phone(phone):
    import re
    pattern = r'^\+?1?\d{9,15}$'
    return re.match(pattern, phone) is not None
