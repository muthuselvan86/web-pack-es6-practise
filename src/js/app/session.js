/**
 * Session to hold/transact data.
 */
define(function(require) {

  return (function() {

    var instance;

    function init(){
        var courseData;
        // Getter Method
        function getCourseData(){
            return courseData;
        }
        //Setter Method
        function setCourseData(data){
            courseData = data;
        }

        return {
            getCourseData:getCourseData,
            setCourseData:setCourseData
        }
    };

    if (!instance) instance = init();

    return instance;

  })();

});
