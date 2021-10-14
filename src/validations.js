import React from "react";

export default class Validators {
    static customFieldLevelValidation = (value, validations) => {
        for (let validation of validations) {
            const result = validation(value);
            if (result) {
                return result;
            }
        }
        return null;
    };

    static required = value => (value ? undefined : 'Required');

    static invalidChar = value =>
        value && /['"`]/i.test(value)
            ? "You can't use [_' \"]!"
            : undefined;

    static onlyCharacters = value =>
        value && /[^a-zA-Z ]/i.test(value)
            ? 'Only characters!'
            : undefined;
}
