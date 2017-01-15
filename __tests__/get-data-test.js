import { asyncGetData } from "../src/routes/Home/module";

describe("asyncGetData", () => {
  describe("when triggered", () => {
    it("it gets ab oject array", () => {
        test("ayncGetData get an array object", () => {
            const startState = {
                firewallBuildData: undefined
            };

            const finState = asyncGetData(firewallBuildData);

            expect(finState.firewallBuildData).toEqual([{
                "id": "Tenrox-R1_1235",
                "type": "build",
                "owner": null,
                "timeStarted": {},
                "state": "pending",
                "metrics": {
                    "name":"Metrics",
                    "status":"pending",
                    "test":null,
                    "maintainability":null,
                    "security":null,
                    "workmanship":null
                },
                "build": {
                    "name":"Build",
                    "status":"pending",
                    "date":null,
                    "time":null
                },
                "unitTest": {
                    "name":"Unit Test",
                    "status":"pending",
                    "chartData":null,
                    "testsPassed":null,
                    "codeCovered":null
                },
                "functionalTest": {
                    "name":"Functional Test",
                    "status":"pending",
                    "chartData":null,
                    "testsPassed":null,
                    "codeCovered":null
                },
                "result":{
                    "message":"Pending",
                    "subMessage":"Run Build"
                }
            }]);
            });

    });
  });
});
