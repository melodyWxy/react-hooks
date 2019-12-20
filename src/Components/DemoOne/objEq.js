export default  function isObjEqual(o1,o2){
    var props1 = Object.getOwnPropertyNames(o1);
    var props2 = Object.getOwnPropertyNames(o2);
    if (props1.length != props2.length) {
        return false;
    }
    for (var i = 0,max = props1.length; i < max; i++) {
        var propName = props1[i];
        if (o1[propName] !== o2[propName]) {
            return false;
        }
    }
    return true;
}