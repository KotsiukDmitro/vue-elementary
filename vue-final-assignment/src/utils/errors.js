const ERROR_CODES = {
    // EMAIL_NOT_FOUND: 'E-mail не найден',
    INVALID_LOGIN_CREDENTIALS: 'Неверный E-mail или пароль'
}


export function errors(code) {
    return ERROR_CODES[code] ? ERROR_CODES[code] : 'неизвесная ошибка'
}