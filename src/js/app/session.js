/**
 * Session to hold/transact data.
 */
define(function() {
    return (function() {
        let instance;

        function init() {
            let courseData;
            // Getter Method
            function getCourseData() {
                return courseData;
            }
            //Setter Method
            function setCourseData(data) {
                courseData = data;
            }

            return {
                getCourseData: getCourseData,
                setCourseData: setCourseData
            };
        }

        if (!instance) instance = init();

        return instance;
    })();
});
