var size = 0;

var styleCache_TECLS={}
var style_TECLS = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.8 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: "rgba(31,75,125,1.0)"})})
    })];
    if ("") {
        var labelText = "";
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_TECLS[key]){
        var text = new ol.style.Text({
              font: '10.725px Calibri,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_TECLS[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_TECLS[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};