(function () {
    var tincan = new TinCan (
        {
            recordStores: [
                {
                    endpoint: "https://cloud.scorm.com/ScormEngineInterface/TCAPI/public/",
                    username: "test",
                    password: "pass"
                }
            ]
        }
    );
    tincan.sendStatement(
        {
            actor: {
                mbox: "mailto:tincanjava-github@tincanapi.com"
            },
            verb: {
                id: "http://adlnet.gov/expapi/verbs/attempted"
            },
            target: {
                id: "http://rusticisoftware.github.com/TinCanJava"
            }
        },
        function () {}
    );
}());
