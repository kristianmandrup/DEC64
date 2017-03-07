const Dec64 = require('./dec64')

const DEC64_NAN = Symbol('DEC64_NAN');
const DEC64_ZERO = Symbol('DEC64_ZERO');
const DEC64_ONE = Symbol('DEC64_ONE');
const DEC64_TRUE = Symbol('DEC64_TRUE');
const DEC64_FALSE = Symbol('DEC64_FALSE');

function dec64_new(number) {
    return new Dec64(number)
}

function dec64_is_any_nan(number) {
    return typeof number === 'symbol'
}

function dec64_equal(comparator, comparison) {
    return comparator.equal(comparison)
}



const nan = DEC64_NAN; /* not a number */
const nannan = 32896; /* a non-normal nan */
const zero = DEC64_ZERO; /* 0 */
const zip = 1; /* a non normal 0 */
const one = DEC64_ONE; /* 1 */
const two = dec64_new(2, 0); /* 2 */
const three = dec64_new(3, 0); /* 3 */
const four = dec64_new(4, 0); /* 4 */
const five = dec64_new(5, 0); /* 5 */
const six = dec64_new(6, 0); /* 6 */
const seven = dec64_new(7, 0); /* 7 */
const eight = dec64_new(8, 0); /* 8 */
const nine = dec64_new(9, 0); /* 9 */
const ten = dec64_new(10, 0); /* 10 */
const minnum = dec64_new(1, -127); /* the smallest possible number */
const e = dec64_new(27182818284590452, -16); /* e */
const epsilon = dec64_new(1, -16); /* the smallest number addable to 1 */
const cent = dec64_new(1, -2); /* 0.01 */
const half = dec64_new(5, -1); /* 0.5 */
const almost_one = dec64_new(9999999999999999, -16);
/* 0.9999999999999999 */
const pi = dec64_new(31415926535897932, -16);
/* pi */
const half_pi = dec64_new(15707963267948966, -16);
const maxint = dec64_new(36028797018963967, 0);
/* the largest normal integer */
const maxint_plus = dec64_new(3602879701896397, 1);
/* the smallest number larger than maxint */
const maxnum = dec64_new(36028797018963967, 127);
/* the largest possible number */
const negative_minnum = dec64_new(-1, -127);
/* the smallest possible negative number */
const negative_one = dec64_new(-1, 0); /* -1 */
const negative_nine = dec64_new(-9, 0);
/* -9 */
const negative_pi = dec64_new(-31415926535897932, -16);
/* -pi */
const negative_maxint = dec64_new(-36028797018963968, 0);
/* the largest negative normal integer */
const negative_maxnum = dec64_new(-36028797018963968, 127);
/* the largest possible negative number */
const almost_negative_one = dec64_new(-9999999999999999, -16);
/* -0.9999999999999999 */

/**
 * Print a number
 * @param {Dec64} number - The number to print
 */
function print_dec64(number) {
    let actual = ''
    if (dec64_is_any_nan(number) == DEC64_TRUE) {
        if (number == DEC64_TRUE) {
            printf("true");
        } else if (number == DEC64_FALSE) {
            printf("false");
        } else {
            printf("nan");
        }
    } else {
        dec64_to_string(state, number, actual);
        printf("%s", actual);
    }
}

/**
 * Print a number
 * @param {Dec64} number - The number to print
 * @param {string} name - label of number
 */
function p(number, name) {
    if (name) {
        printf("\n[%s ", name);
    } else {
        printf("\n[");
    }
    print_dec64(number);
    printf("]");
}

function judge_unary(
    first,
    expected,
    actual,
    name,
    op,
    comment
) {
    if (dec64_equal(expected, actual) == DEC64_TRUE) {
        nr_pass += 1;
        if (level >= 3) {
            printf("\n\npass %s: %s", name, comment);
            printf("\n%-4s", op);
            print_dec64(first);
            printf("\n%-4s", "=");
            print_dec64(actual);
        }
    } else {
        nr_fail += 1;
        if (level >= 1) {
            printf("\n\nFAIL %s: %s", name, comment);
            if (level >= 2) {
                printf("\n%-4s", op);
                print_dec64(first);
                printf("\n%-4s", "?");
                print_dec64(actual);
                printf("  (error ");
                print_dec64(dec64_subtract(actual, expected));
                printf(")\n%-4s", "=");
                print_dec64(expected);
            }
        }
    }
}