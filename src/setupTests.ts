import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme from "enzyme";

Enzyme.configure({
    adapter: new EnzymeAdapter(),
});
