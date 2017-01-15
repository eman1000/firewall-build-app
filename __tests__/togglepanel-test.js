import * as actions from "../src/routes/Home/module";
describe("actions", () => {
  it("should create an action to toggle a panel", () => {
    const payload = {key:"panel0", value:true};
    const expectedAction = {
		type: "TOGGLE_PANEL",
		payload
    };
    expect(actions.togglePanel(payload)).toEqual(expectedAction);
  });
});