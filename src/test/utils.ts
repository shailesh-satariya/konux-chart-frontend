import {ReactWrapper, ShallowWrapper} from "enzyme";

/**
 * Return node(s) with the given data-test attribute.
 * @param {ReactWrapper | ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 *
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper: ReactWrapper | ShallowWrapper, val: string) => {
    return wrapper.find(`[data-test="${val}"]`);
}