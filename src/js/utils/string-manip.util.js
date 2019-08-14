/**
 * @desc This utility provides function to manipulate string.
 * @example
 * import { firstLetterUpperCase } from 'utils/string-manip';
 * const result = firstLetterUpperCase( 'some string' ); // Some string
 */

// convert string to local uppercase
export const firstLetterUpperCase = ( str ) => {
    return str.charAt( 0 ).toUpperCase() + str.slice( 1 );
};
