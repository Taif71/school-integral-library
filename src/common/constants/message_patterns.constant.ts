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

export enum COUNTRY_MESSAGES {
    CREATE = 'country-create',
    UPDATE = 'country-update',
    FIND_ALL = 'country-get-all',
    FIND_ONE = 'country-get-one',
    DELETE = 'country-delete',
    COUNT = 'country-count',
    BULK_CREATE = 'bulk-create'
}

export enum STATE_MESSAGES {
    CREATE = 'state-create',
    UPDATE = 'state-update',
    FIND_ALL = 'state-get-all',
    FIND_ONE = 'state-get-one',
    DELETE = 'state-delete',
    COUNT = 'state-count',
    BULK_CREATE = 'bulk-create'
}

export enum CITY_MESSAGES {
    CREATE = 'city-create',
    UPDATE = 'city-update',
    FIND_ALL = 'city-get-all',
    FIND_ONE = 'city-get-one',
    DELETE = 'city-delete',
    COUNT = 'city-count',
    BULK_CREATE = 'bulk-create'
}

export enum FILES_MESSAGES {
    UPLOAD = 'upload'
}

export enum SCHOOL_MESSAGES {
    CREATE = 'school-create',
    UPDATE_PUT = 'school-update-put',
    UPDATE_PATCH = 'school-update-patch',
    FIND_ALL = 'school-get-all',
    FIND_ONE = 'school-get-one',
    DELETE = 'school-delete',
    COUNT = 'school-count',
    BULK_CREATE = 'bulk-create'
}