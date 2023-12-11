export enum PARTNER_MESSAGES {
    CREATE = 'partner-create',
    UPDATE = 'partner-update',
    FIND_ALL = 'partner-get-all',
    FIND_ONE = 'partner-get-one',
    DELETE = 'partner-delete'
}

export enum USER_MESSAGES {
    CREATE = 'user-create',
    AC_VERIFICATION = 'ac_verification',
    GENERATE_TOKEN = 'generate_token',
    GENERATE_PASSWORD_RESET_TOKEN = 'generate_password_reset_token',
    FORGET_PASSWORD = 'forget_password',
    RESET_PASSWORD = 'reset_password',
    UPDATE = 'user-update',
    FIND_ALL = 'user-get-all',
    FIND_ONE = 'user-get-one',
    DELETE = 'user-delete'
}