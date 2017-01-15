import * as actions from "../src/routes/Home/module";
describe("actions", () => {
  it("should create an action to toggle a detail view modal", () => {
    const payload = "Metrics";
    const expectedAction = {
		type: "TOGGLE_DETAIL_VIEW_MODAL",
		payload
    };
    expect(actions.toggleModal(payload)).toEqual(expectedAction);
  });
});